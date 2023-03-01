import React, { useState } from "react"
import { useForm } from "react-hook-form"

import { Layout, SecondaryButton } from "../../components"
import {
  AddPrestation,
  PrestationCard,
  ScheduleCard,
  UserCard,
} from "./components"
import { Container, ContainerButtons, Form } from "./styled-components"
import { ReactComponent as FileIcon } from "../../assets/file.svg"
import { ReactComponent as EditIcon } from "../../assets/edit.svg"
import { FormProvider } from "react-hook-form"

type PrestationType = {
  prestationType: { value: string; label: string }
  collaborator: { value: string; label: string }
  price: number
}

const RendezVous = () => {
  const methods = useForm()

  const onSubmit = (data: any) => console.log("data", data)

  const [prestations, setPrestations] = useState([
    {
      prestationType: { value: "", label: "" },
      collaborator: { value: "", label: "" },
      price: 60,
    },
  ])

  const renderPrestations = () =>
    prestations?.map((prestation, index) => (
      <PrestationCard
        key={index}
        prestation={prestation}
        onChange={(value, type) => {
          const newPrestations = [...prestations]
          newPrestations[index][type as keyof PrestationType] = value
          setPrestations(newPrestations)
        }}
        onRemove={() => {
          setPrestations(prestations.filter((_, i) => index !== i))
        }}
      />
    ))

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Layout price={60}>
          <Container>
            <UserCard />
            <ScheduleCard />
            {renderPrestations()}
            <AddPrestation
              onClick={() => {
                setPrestations([
                  ...prestations,
                  {
                    prestationType: { value: "", label: "" },
                    collaborator: { value: "", label: "" },
                    price: 60,
                  },
                ])
              }}
            />
            <ContainerButtons>
              <SecondaryButton
                value="Ajouter un titre"
                onClick={() => null}
                icon={<FileIcon width="10px" height="14px" />}
              />
              <SecondaryButton
                icon={<EditIcon />}
                value="Ajouter une note"
                onClick={() => null}
              />
            </ContainerButtons>
          </Container>
        </Layout>
      </Form>
    </FormProvider>
  )
}

export default RendezVous

import React, { useCallback, useState } from "react"
import { Layout, SecondaryButton } from "../../components"
import {
  AddPrestation,
  PrestationCard,
  ScheduleCard,
  UseCard,
} from "./components"
import { Container, ContainerButtons } from "./styled-components"
import { ReactComponent as FileIcon } from "../../assets/file.svg"
import { ReactComponent as EditIcon } from "../../assets/edit.svg"
import { IndexType } from "typescript"

type PrestationType = {
  prestationType: { value: string; label: string }
  collaborator: { value: string; label: string }
}

const RendezVous = () => {
  const [prestations, setPrestations] = useState([
    {
      prestationType: { value: "", label: "" },
      collaborator: { value: "", label: "" },
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
    <Layout>
      <Container>
        <UseCard />
        <ScheduleCard />
        {renderPrestations()}
        <AddPrestation
          onClick={() => {
            setPrestations([
              ...prestations,
              {
                prestationType: { value: "", label: "" },
                collaborator: { value: "", label: "" },
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
  )
}

export default RendezVous

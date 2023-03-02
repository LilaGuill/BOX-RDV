import { useState } from "react"
import { useForm, useFieldArray, FormProvider } from "react-hook-form"
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

const defaultPrestations = {
  prestationType: { value: "", label: "" },
  collaborator: { value: "", label: "" },
  price: 60,
  duration: 60,
}

const RendezVous = () => {
  const [canCreateUser, setCanCreateUser] = useState(false)
  const methods = useForm({
    defaultValues: {
      user: {
        username: "",
        email: "",
        phone: "",
        gender: "man",
        birthay: { day: 22, month: "Sept" },
        sms: {
          reminder: true,
        },
      },
      schedule: { date: new Date() },
      prestations: [defaultPrestations],
      chosen: true,
      came: true,
    },
  })
  const { control, setValue, watch } = methods
  const { fields, append, remove } = useFieldArray({
    control,
    name: "prestations",
  })

  const onSubmit = (data: any) => console.log("data", data)

  const price = watch("prestations").reduce(
    (total, { price }) => (!isNaN(price) ? Number(price) + total : total),
    0
  )

  const renderPrestations = () =>
    fields?.map((field, index) => (
      <PrestationCard
        index={index}
        key={field.id}
        onRemove={() =>
          fields.length === 1
            ? setValue("prestations", [defaultPrestations])
            : remove(index)
        }
      />
    ))

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Layout price={price} canCreateUser={canCreateUser}>
          <Container>
            <UserCard
              canCreateUser={canCreateUser}
              onCreateUser={(value) => setCanCreateUser(value)}
            />
            <ScheduleCard />
            {renderPrestations()}
            <AddPrestation onClick={() => append(defaultPrestations)} />
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

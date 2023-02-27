import React, { useState } from "react"
import { Layout } from "../../components"
import {
  AddPrestation,
  PrestationCard,
  ScheduleCard,
  UseCard,
} from "./components"
import { Container } from "./styled-components"

const RendezVous = () => {
  return (
    <Layout>
      <Container>
        <UseCard />
        <ScheduleCard />
        <PrestationCard />
        <AddPrestation />
      </Container>
    </Layout>
  )
}

export default RendezVous

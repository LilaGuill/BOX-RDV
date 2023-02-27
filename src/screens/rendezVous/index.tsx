import React, { useState } from "react"
import { Layout } from "../../components"
import { UseCard, ScheduleCard, PrestationCard } from "./components"
import { Container } from "./styled-components"

const RendezVous = () => {
  return (
    <Layout>
      <Container>
        <UseCard />
        <ScheduleCard />
        <PrestationCard />
      </Container>
    </Layout>
  )
}

export default RendezVous

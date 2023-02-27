import React, { useState } from "react"
import { Layout } from "../../components"
import { UseCard, ScheduleCard } from "./components"
import { Container } from "./styled-components"

const RendezVous = () => {
  return (
    <Layout>
      <Container>
        <UseCard />
        <ScheduleCard />
      </Container>
    </Layout>
  )
}

export default RendezVous

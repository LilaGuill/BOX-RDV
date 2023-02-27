import React, { useState } from "react"
import { Layout } from "../../components"
import { UseCard } from "./components"

const RendezVous = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <Layout>
      <UseCard />
    </Layout>
  )
}

export default RendezVous

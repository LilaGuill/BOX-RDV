import React, { useState } from "react"
import { Card, Toggle, Layout } from "../../components"

const RendezVous = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <Layout>
      <Card>
        <Toggle
          isToggled={isToggled}
          onClick={() => setIsToggled(!isToggled)}
          label="hello"
        />
        {/* <CheckIcon /> */}
        {/* 
          <InputNumber unit="€" value={60} /> */}
      </Card>
    </Layout>
  )
}

export default RendezVous

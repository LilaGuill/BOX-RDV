import { useState } from "react"
import { Card, Select, InputNumber } from "../../../../components"
import { ReactComponent as FileIcon } from "../../../../assets/file.svg"
import {
  CardContainer,
  CollaboratorContainer,
  PrestationContainer,
  SelectContainer,
} from "./styled-components"

const PrestationCard = () => {
  return (
    <Card>
      <CardContainer>
        <FileIcon />
        <SelectContainer>
          <PrestationContainer>
            <Select />
          </PrestationContainer>
          <CollaboratorContainer>
            <Select />
          </CollaboratorContainer>
        </SelectContainer>
        <InputNumber value={60} unit="Min" />
      </CardContainer>
    </Card>
  )
}

export default PrestationCard

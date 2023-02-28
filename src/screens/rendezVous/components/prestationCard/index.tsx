import { Card, Select, InputNumber, Button } from "../../../../components"
import { ReactComponent as FileIcon } from "../../../../assets/file.svg"
import { ReactComponent as BinIcon } from "../../../../assets/bin.svg"
import {
  CardContainer,
  CollaboratorContainer,
  PrestationContainer,
  RightContainer,
  SelectContainer,
  IconContainer,
} from "./styled-components"

const prestationOptions = [
  { value: "manShort", label: "Coupe homme (cheveux courts)" },
  {
    value: "womanShort",
    label:
      "Coupe + Balayage + Couleur + Shampoing + Mise en pli (cheveux longs & épais)",
  },
]

const collaboratorOptions = [
  { value: "jm", label: "Jean-Michel" },
  { value: "leo", label: "Léo" },
]

const PrestationCard = ({
  onRemove,
  onChange,
  prestation,
}: PrestationCardProps) => {
  const { prestationType, collaborator } = prestation

  return (
    <Card>
      <CardContainer>
        <IconContainer>
          <FileIcon />
        </IconContainer>
        <SelectContainer>
          <PrestationContainer>
            <Select
              value={prestationType}
              onChange={(value) => onChange(value, "prestationType")}
              label={
                prestationType.value ? "Prestation" : "Choisir une prestation"
              }
              color="green"
              options={prestationOptions}
            />
          </PrestationContainer>
          <CollaboratorContainer hasValue={!!collaborator.value}>
            <Select
              value={collaborator}
              onChange={(value) => onChange(value, "collaborator")}
              label={collaborator.value ? "Avec" : "Choisir un collaborateur"}
              color="blueLight"
              options={collaboratorOptions}
            />
          </CollaboratorContainer>
        </SelectContainer>
        <RightContainer>
          <InputNumber value={60} unit="Min" onChange={() => null} />
          {prestationType.value && collaborator.value && (
            <InputNumber value={60} unit="€" onChange={() => null} />
          )}
          <Button
            buttonType="secondary"
            color="white"
            size="small"
            onClick={onRemove}
          >
            <BinIcon />
          </Button>
        </RightContainer>
      </CardContainer>
    </Card>
  )
}

export default PrestationCard

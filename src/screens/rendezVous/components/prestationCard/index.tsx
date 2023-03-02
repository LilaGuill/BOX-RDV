import { useFormContext, Controller } from "react-hook-form"
import { size } from "lodash"
import { Card, Select, InputNumber, Button } from "../../../../components"
import { ReactComponent as FileIcon } from "../../../../assets/file.svg"
import { ReactComponent as BinIcon } from "../../../../assets/bin.svg"
import {
  CardContainer,
  CollaboratorContainer,
  Container,
  IconContainer,
  PrestationContainer,
  RightContainer,
  SelectContainer,
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

const PrestationCard = ({ onRemove, index }: PrestationCardProps) => {
  const { control, watch } = useFormContext()
  const { prestationType, collaborator } = watch(`prestations.${index}`)

  const isRemoveButtonVisible =
    prestationType.value || collaborator.value || size(watch("prestations")) > 1

  return (
    <Card>
      <CardContainer>
        <IconContainer>
          <FileIcon width="16px" />
        </IconContainer>
        <Container>
          <SelectContainer>
            <PrestationContainer>
              <Controller
                name={`prestations.${index}.prestationType`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={value}
                    onChange={(value) => onChange(value, "prestationType")}
                    label={
                      value.value ? "Prestation" : "Choisir une prestation"
                    }
                    color="green"
                    options={prestationOptions}
                  />
                )}
              />
            </PrestationContainer>
            <CollaboratorContainer hasValue={!!collaborator.value}>
              <Controller
                name={`prestations.${index}.collaborator`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={value}
                    onChange={(value) => onChange(value, "collaborator")}
                    label={value.value ? "Avec" : "Choisir un collaborateur"}
                    color="blueLight"
                    options={collaboratorOptions}
                  />
                )}
              />
            </CollaboratorContainer>
          </SelectContainer>
          <RightContainer>
            <Controller
              name={`prestations.${index}.duration`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputNumber unit="Min" onChange={onChange} value={value} />
              )}
            />

            {prestationType.value && collaborator.value && (
              <Controller
                name={`prestations.${index}.price`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputNumber unit="€" onChange={onChange} value={value} />
                )}
              />
            )}
            {isRemoveButtonVisible && (
              <Button
                buttonType="secondary"
                color="white"
                size="medium"
                onClick={onRemove}
              >
                <BinIcon />
              </Button>
            )}
          </RightContainer>
        </Container>
      </CardContainer>
    </Card>
  )
}

export default PrestationCard

import { useState } from "react"
import {
  Card,
  Checkbox,
  InputTime,
  InputDate,
  SecondaryButton,
  Text,
} from "../../../../components"
import { ReactComponent as RepeatIcon } from "../../../../assets/repeat.svg"
import { ReactComponent as TimetableIcon } from "../../../../assets/timetable.svg"
import {
  CardContainer,
  CheckboxContainer,
  InputContainer,
  SchedulerContainer,
  TimeContainer,
} from "./styled-components"

const ScheduleCard = () => {
  const [isFullDay, setIsFullDay] = useState<boolean>(false)

  return (
    <Card>
      <CardContainer>
        <TimetableIcon />
        <SchedulerContainer>
          <InputContainer>
            <InputDate />
          </InputContainer>
          {!isFullDay && (
            <TimeContainer>
              <Text color="grey800" weight={400}>
                de
              </Text>
              <InputTime hours={14} minutes={30} onChange={() => null} />
              <Text color="grey800" weight={400}>
                à
              </Text>
              <InputTime hours={15} minutes={30} onChange={() => null} />
              <Text>(1h)</Text>
            </TimeContainer>
          )}
          <CheckboxContainer>
            <Checkbox
              checked={isFullDay}
              onChange={() => setIsFullDay(!isFullDay)}
              label="Jour entier"
            />
          </CheckboxContainer>
        </SchedulerContainer>
        <SecondaryButton
          color="green"
          value="Répéter"
          onClick={() => null}
          icon={<RepeatIcon />}
        />
      </CardContainer>
    </Card>
  )
}

export default ScheduleCard

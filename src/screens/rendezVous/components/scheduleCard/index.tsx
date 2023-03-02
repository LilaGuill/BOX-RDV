import { useState } from "react"
import { useFormContext, Controller } from "react-hook-form"
import {
  Card,
  Checkbox,
  InputTime,
  DatePicker,
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
  const { control, setValue, watch } = useFormContext()

  const duration = `${
    watch("schedule.to.hours") - watch("schedule.from.hours")
  }h${watch("schedule.to.minutes") - watch("schedule.from.minutes") || ""}`

  return (
    <Card>
      <CardContainer>
        <TimetableIcon />
        <SchedulerContainer>
          <InputContainer>
            <Controller
              name="schedule.date"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker value={value} onChange={onChange} />
              )}
            />
          </InputContainer>
          {!isFullDay && (
            <TimeContainer>
              <Text color="grey800" weight={400}>
                de
              </Text>
              <InputTime
                defaultValue={{ hours: 14, minutes: 30 }}
                name="schedule.from"
              />
              <Text color="grey800" weight={400}>
                à
              </Text>
              <InputTime
                defaultValue={{ hours: 15, minutes: 30 }}
                name="schedule.to"
              />
              <Text>({duration})</Text>
            </TimeContainer>
          )}
          <CheckboxContainer>
            <Checkbox
              checked={watch("schedule.isFullDay")}
              onChange={() => {
                setValue("schedule.isFullDay", !watch("schedule.isFullDay"))
                setIsFullDay(!isFullDay)
              }}
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

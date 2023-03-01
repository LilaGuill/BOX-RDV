import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
  width: 100%;
`

export const Name = styled.div`
  width: 356px;
`

export const Phone = styled.div`
  width: 240px;
`

export const Email = styled.div`
  width: 356px;
`

export const InfoFirstRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  margin-left: 40px;
`

export const InfoSecondRow = styled.div<{ isInfoVisible?: boolean }>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 40px;
  margin-bottom: ${({ isInfoVisible }) => isInfoVisible && "20px"};
`

export const InfoThirdRow = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  margin-top: 10px;
  margin-left: 40px;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const IconContainer = styled.div`
  margin-right: 10px;
  cursor: pointer;
`
export const InfoTextContainer = styled.div<{ isInfoVisible: boolean }>`
  display: flex;
  gap: 4px;
  flex-direction: column;
  padding: ${({ isInfoVisible }) => (isInfoVisible ? "10px 12px" : "10px 0")};
  border: ${({ isInfoVisible, theme }) =>
    isInfoVisible && `1px dashed ${theme.colors.grey200}`};
  width: 100%;
`

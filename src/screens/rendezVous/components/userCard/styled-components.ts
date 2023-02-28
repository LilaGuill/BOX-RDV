import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 14px;
  margin: 0 8px;

  & div:first-child {
    width: 290px;
  }
  & div:nth-child(2) {
    width: 240px;
  }
  & div:nth-child(3) {
    width: 306px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InfoClient = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
`

export const InfoTextContainer = styled.div<{ isInfoVisible: boolean }>`
  display: flex;
  gap: 4px;
  flex-direction: column;
  padding: ${({ isInfoVisible, theme }) =>
    isInfoVisible ? "10px 12px" : "10px 0"};
  border: ${({ isInfoVisible, theme }) =>
    isInfoVisible && `1px dashed ${theme.colors.grey200}`};
  min-width: 100%;
`

export const FidelityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`

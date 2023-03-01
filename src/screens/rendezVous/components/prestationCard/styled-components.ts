import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100%;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const SelectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 16px;
  margin-left: 12px;
  max-width: 525px;
`

export const PrestationContainer = styled.div`
  min-width: 183px;
`

export const CollaboratorContainer = styled.div<{ hasValue?: boolean }>`
  min-width: ${({ hasValue }) => (hasValue ? "118px" : "195px")};
`

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 16px;
  flex: 1;
`

export const IconContainer = styled.div`
  margin-top: 15px;
`

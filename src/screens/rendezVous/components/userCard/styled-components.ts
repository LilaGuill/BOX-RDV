import styled from "styled-components"
import media from "styled-media-query"

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 14px;
  margin-left: 8px;

  & div:first-child {
    width: 356px;
  }
  & div:nth-child(2) {
    width: 240px;
  }
  & div:last-child {
    width: 356px;
  }
`

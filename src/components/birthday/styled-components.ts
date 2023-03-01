import styled from "styled-components"

export const Container = styled.div`
  & input:first-child {
    border-radius: 6px 0 0 6px;
    border-right: none;
  }

  & input:last-child {
    border-radius: 0 6px 6px 0;
  }
`

export const StyledInput = styled.input`
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-sizing: border-box;
  font-family: Open Sans;
  font-size: 13px;
  width: 108px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey900};
`

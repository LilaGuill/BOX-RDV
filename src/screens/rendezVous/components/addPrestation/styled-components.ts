import styled from "styled-components"

export const Container = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.grey800};
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;

  & :first-child {
    margin-right: 10px;
  }
`

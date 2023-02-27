import styled from "styled-components"

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
`

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + span {
    background-color: ${({ theme }) => theme.colors.green};
  }

  :checked + span:before {
    transform: translateX(14px);
  }
`

export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.grey400};
  transition: 0.3s;
  border-radius: 16px;

  :before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    top: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    transition: 0.3s;
  }
`

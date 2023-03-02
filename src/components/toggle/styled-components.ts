import styled from "styled-components"

export const Label = styled.label`
  display: inline-block;
  height: 20px;
  position: relative;
  width: 34px;
`

export const Input = styled.input`
  height: 0;
  opacity: 0;
  width: 0;

  :checked + span {
    background-color: ${({ theme }) => theme.colors.green};
  }

  :checked + span:before {
    transform: translateX(14px);
  }
`

export const Span = styled.span`
  background: ${({ theme }) => theme.colors.grey400};
  border-radius: 16px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s;

  :before {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    content: "";
    height: 14px;
    left: 3px;
    position: absolute;
    top: 3px;
    transition: 0.3s;
    width: 14px;
  }
`

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

type ButtonProps = {
  buttonType?: "primary" | "secondary"
  children?: React.ReactNode | string
  color?: string
  onClick?: (value: any) => void
  size?: "large" | "medium" | "small"
  type?: "button" | "submit" | "reset" | undefined
}

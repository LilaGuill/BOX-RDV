type ButtonProps = {
  size?: "large" | "medium" | "small"
  children?: React.ReactNode | string
  color?: string
  buttonType?: "primary" | "secondary"
  onClick?: (value: any) => void
}

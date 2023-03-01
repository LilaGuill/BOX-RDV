type SelectProps = {
  label: string
  color: string
  options: { value: string; label: string }[]
  value: { value: string; label: string }
  onChange: (value: any) => void
}

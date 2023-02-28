type PrestationCardProps = {
  onRemove: () => void
  onChange: (value: any, type: string) => void
  prestation: {
    prestationType: { value: string; label: string }
    collaborator: { value: string; label: string }
  }
}

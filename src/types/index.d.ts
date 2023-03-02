type UserType = {
  user: {
    username: string
    email?: string
    phone?: string
    gender?: string
    birthay?: { day: number; month: string }
    sms?: {
      reminder?: boolean
      marketing?: boolean
    }
  }
  schedule?: { date?: Date; from?: {}; to?: {} }
  prestations?: {
    prestationType: { value: string; label: string }
    collaborator: { value: string; label: string }
    price: number
    duration: number
  }[]
  chosen?: boolean
  came?: boolean
}

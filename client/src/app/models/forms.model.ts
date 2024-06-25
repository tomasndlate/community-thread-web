export interface AuthFieldForm {
  label: string,
  type: 'password' | 'text',
  value: string,
  status: 'default' | 'valid' | 'invalid',
  isLocked: boolean
}

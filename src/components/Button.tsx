import { ButtonContainer, ButtonVariant } from './Button.style'

interface ButtonProps {
  variant: ButtonVariant
}
export function Button({ variant }: ButtonProps) {
  return <ButtonContainer Variant={variant}>Criar</ButtonContainer>
}

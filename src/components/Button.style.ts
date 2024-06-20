import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

interface ButtonContainerProps {
  Variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 60px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`

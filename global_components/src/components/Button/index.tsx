import { ButtonHTMLAttributes, ReactNode } from "react"
import styled, { css } from 'styled-components';

type Variant = 'outline' | 'solid'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant
  colorScheme?: string
}

interface ContainerButtonProps {
  variant: Variant
  colorScheme: string
}

const ContainerButton = styled.button<ContainerButtonProps>`
  ${({ variant, colorScheme }) => css`
  border: none;
  border-radius: 8px;
  white-space: nowrap;

  padding: 0.5rem 1rem;
  background: ${colorScheme};
  padding: 0 16px;
  color: white;
  cursor: pointer;
  height: 48px;
  line-height: 48px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 700;
  border: 1px solid transparent;
  line-height: inherit;
  outline: none;
  transition: background .2s ease,color .2s ease,border-color .2s ease;

  ${variant === 'outline' ? (
    css`
      color: ${colorScheme};
      background-color: #FFF;
      border-color: #eaeaea;
      
      &:hover {
        border-color: ${colorScheme};
      }
    `
  ) : (
    css`
      &:hover {
        color: #000;
        background-color: #FFF;
        border-color: #000;
      }
    `
  )}

  `}
`

export function Button({ children, type = 'button', variant = 'solid', colorScheme = '#000', ...rest }: ButtonProps) {
  return (
    <ContainerButton variant={variant} type={type} colorScheme={colorScheme} {...rest}>
      {children}
    </ContainerButton>
  )
}
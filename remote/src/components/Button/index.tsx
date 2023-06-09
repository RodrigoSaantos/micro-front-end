import { ButtonHTMLAttributes, ReactNode } from "react"
import styled from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ContainerButton = styled.button`
  border: none;
  border-radius: 8px;

  padding: 0.5rem 1rem;
  background: #000;
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

  &:hover {
    color: #000;
    background-color: #FFF;
    border-color: #000;
  }
`

export function Button({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    <ContainerButton type={type} {...rest}>
      {children}
    </ContainerButton>
  )
}
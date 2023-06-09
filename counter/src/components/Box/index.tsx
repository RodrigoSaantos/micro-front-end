import { ReactNode } from 'react'
import styled from 'styled-components'

const ContainerBox = styled.div`
  max-width: 42rem;
  min-height: 100%;
  max-height: 500px;
  border-radius: 0.5rem;
  box-shadow: 0 16px 70px rgba(0,0,0,.2);
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  background-color: red;
`

export interface BoxProps {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <ContainerBox>
      {children}
    </ContainerBox>
  )
}
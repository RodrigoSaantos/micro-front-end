// @refresh
import { ReactNode } from 'react'
// import dynamic from 'next/dynamic';
import { ContainerBox } from './styles'

// const Button = dynamic(() => import('remote/Button').then(module => module.Button), {
//   ssr: false,
//   loading: () => <span>Carregando...</span>
// })

export interface BoxProps {
  children: ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <ContainerBox title="Counter">
      {children}
      {/* <Button>Resetar</Button> */}
    </ContainerBox>
      
  )
}
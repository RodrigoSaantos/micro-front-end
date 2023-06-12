import { Container } from './styles'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('global_components/components/Button').then(module => module.Button), {
  ssr: false,
  loading: () => <span>Carregando...</span>
})

export function Header() {
  return (
    <Container>
      <nav>
        <div>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
          <a href="#">ShowCase</a>
          <a href="#">Docs</a>
          <a href="#">Blog</a>
          <a href="#">Analytics</a>
        </div>
        <div> 
          <Button variant='outline'>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>

    </Container>
  )
}
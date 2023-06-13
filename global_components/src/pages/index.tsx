import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/Breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={'#'} >
          get
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Introduction</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

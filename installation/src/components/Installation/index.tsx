import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

import { TabContextData  } from "counter/hooks/useTab";

let useTab = (() => ({})) as () => TabContextData;

if (typeof window === 'object') {
  useTab = (await import('counter/hooks/useTab')).useTab
}

const Breadcrumb = dynamic(() => import('global_components/components/Breadcrumb').then(mod => mod.Breadcrumb), {
  ssr: false,
  loading: () => <span>Carregando breadcrumb...</span>
})
const BreadcrumbItem = dynamic(() => import('global_components/components/Breadcrumb').then(mod => mod.BreadcrumbItem), {
  ssr: false,
  loading: () => <span>Carregando...</span>
})
const BreadcrumbLink = dynamic(() => import('global_components/components/Breadcrumb').then(mod => mod.BreadcrumbLink), {
  ssr: false,
  loading: () => <span>Carregando...</span>
})

const markdown = `
# Installation
  - System Requirements
    - Node.js 16.8 or later.
    - macOS, Windows (including WSL), and Linux are supported.
----
## Automatic Installation
We recommend creating a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:
`

const breadcrumbs = [
  { name: 'Getting Started', link: '#', isCurrentPage: false }, 
  { name: 'Installation', link: '#', isCurrentPage: true }
]

export function Installation() {
  const { changeTab } = useTab();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <Breadcrumb>
        {breadcrumbs.map(breadcrumb => (
          <BreadcrumbItem key={breadcrumb.name} onClick={() => !breadcrumb.isCurrentPage && changeTab(undefined) }>
            <BreadcrumbLink isCurrentPage={breadcrumb.isCurrentPage} href={breadcrumb.link}>{breadcrumb.name}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
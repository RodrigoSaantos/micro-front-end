import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

import { TabContextData  } from "counter/hooks/useTab";
import dynamic from 'next/dynamic';

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
# Next.js Project Structure

This page provides an overview of the file and folder structure of a Next.js project. It covers top-level files and folders, configuration files, and routing conventions within the *app* and *pages* directories.

----

## Top-level files

----

*Next.js*

----

\`${'next.config.js'}\`	Configuration file for Next.js

----

\`${'middleware.ts'}\`	Next.js request middleware

----

\`${'instrumentation.ts'}\`	OpenTelemetry and Instrumentation

----

\`${'.env'}\`	Environment variables

----

\`${'.env.local'}\`	Local environment variables

----

\`${'.env.production'}\`	Production environment variables

----

\`${'.env.development'}\`	Development environment variables

----

\`${'.next-env.d.ts'}\`	TypeScript declaration file for Next.js

`

const breadcrumbs = [
  { name: 'Getting Started', link: '#', isCurrentPage: false }, 
  { name: 'Project Structure', link: '#', isCurrentPage: true }
]

export function Structure() {
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
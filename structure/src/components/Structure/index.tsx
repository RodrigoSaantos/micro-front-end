import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

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

export function Structure() {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  )
}
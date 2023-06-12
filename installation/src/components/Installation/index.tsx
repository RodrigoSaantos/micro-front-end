import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const markdown = `
# Installation
  - System Requirements
    - Node.js 16.8 or later.
    - macOS, Windows (including WSL), and Linux are supported.
----
## Automatic Installation
We recommend creating a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:
`

export function Installation() {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  )
}
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const markdown = `
# Introduction
Welcome to the Next.js documentation!
----
## What is Next.js?
- Next.js is a framework for building web applications.

- With Next.js, you can build user interfaces using React components. Then, Next.js provides additional structure, features, and optimizations for your application.

- Under the hood, Next.js also abstracts and automatically configures tooling for you, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time setting up tooling.

- Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast web applications.
`

export function Introduction() {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  )
}
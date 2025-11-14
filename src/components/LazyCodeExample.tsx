'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ErrorBoundary from './ErrorBoundary'

interface CodeExample {
  id: string
  title: string
  language: string
  code: string
  description: string
}

interface LazyCodeExampleProps {
  example: CodeExample
}

export default function LazyCodeExample({ example }: LazyCodeExampleProps) {
  return (
    <ErrorBoundary>
      <div className="bg-background-surface rounded-lg border border-background-border overflow-hidden">
        <div className="bg-background-hover px-4 py-2 border-b border-background-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-text-primary">
              {example.title}
            </span>
            <span className="text-xs text-text-secondary uppercase">
              {example.language}
            </span>
          </div>
        </div>
        
        <div className="relative">
          <SyntaxHighlighter
            language={example.language === 'python' ? 'python' : 'javascript'}
            style={vscDarkPlus}
            customStyle={{
              background: 'transparent',
              margin: 0,
              padding: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
            showLineNumbers
            lineNumberStyle={{
              color: '#6b7280',
              paddingRight: '1rem',
              borderRight: '1px solid #374151',
              marginRight: '1rem',
            }}
            wrapLines
            wrapLongLines
          >
            {example.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </ErrorBoundary>
  )
}

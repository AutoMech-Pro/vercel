'use client'

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <h3 className="text-red-400 font-semibold mb-2">Error Loading Component</h3>
          <p className="text-red-300 text-sm">
            Something went wrong loading this component. Please refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

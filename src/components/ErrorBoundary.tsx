'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  componentName?: string
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  public render() {
    if (this.state.hasError) {
      const { fallback, componentName = 'Component' } = this.props

      if (fallback) {
        return fallback
      }

      return (
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-text-primary mb-4">
            {componentName} Error
          </h3>
          <p className="text-text-secondary mb-4">
            An error occurred while rendering this component. This might be due to canvas initialization issues or WebGL support.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: undefined, errorInfo: undefined })
            }}
            className="bg-primary-500 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-text-secondary text-sm mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-xs bg-background-surface p-2 rounded text-red-300 overflow-auto max-h-40">
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
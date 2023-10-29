import type { ReactNode } from 'react'

export type SearchBarProps = {
  onSearch: (value: string) => void
  placeholder?: string
  helpText?: ReactNode
}

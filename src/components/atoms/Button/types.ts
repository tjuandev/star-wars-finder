import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Attach = 'left' | 'right'

type Size = 'sm' | 'md'

export type ButtonProps = {
  children: ReactNode
  icon?: ReactNode
  uppercase?: boolean
  attachPos?: Attach
  size?: Size
} & ButtonHTMLAttributes<HTMLButtonElement>

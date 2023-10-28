import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Attach = 'left' | 'right'

export type ButtonProps = {
  children: ReactNode
  icon?: ReactNode
  uppercase?: boolean
  attachPos?: Attach
} & ButtonHTMLAttributes<HTMLButtonElement>

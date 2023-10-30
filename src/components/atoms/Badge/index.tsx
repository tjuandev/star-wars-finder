import clsx from 'clsx'
import S from './styles.module.scss'
import type { BadgeProps } from './types'

export const Badge = ({ children, hugeText }: BadgeProps) => (
  <div className={clsx(S.container, hugeText && S.huge_text)}>{children}</div>
)

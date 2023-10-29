import S from './styles.module.scss'
import type { BadgeProps } from './types'

export const Badge = ({ children }: BadgeProps) => (
  <div className={S.container}>{children}</div>
)

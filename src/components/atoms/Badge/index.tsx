import S from './styles.module.scss'
import type { BadgeProps } from './types'

export const Badge = ({ content }: BadgeProps) => (
  <div className={S.container}>{content}</div>
)

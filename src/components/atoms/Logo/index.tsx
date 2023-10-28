import { LogoIcon } from '../Icons'
import type { LogoProps } from './types'
import S from './styles.module.scss'

export const Logo = ({ size = 'md' }: LogoProps) => (
  <LogoIcon aria-label="logo" role="img" className={S[size]} />
)

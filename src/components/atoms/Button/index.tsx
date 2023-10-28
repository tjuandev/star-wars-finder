import clsx from 'clsx'
import S from './styles.module.scss'
import type { ButtonProps } from './types'

export const Button = ({
  children,
  icon,
  uppercase = false,
  attachPos,
  ...props
}: ButtonProps) => (
  <button
    className={clsx(
      S.button,
      uppercase && S.uppercase,
      attachPos && S[`attach_${attachPos}`]
    )}
    {...props}
  >
    {children}
    {icon}
  </button>
)

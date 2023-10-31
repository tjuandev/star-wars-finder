import clsx from 'clsx'
import S from './styles.module.scss'
import type { ButtonProps } from './types'

export const Button = ({
  children,
  icon,
  uppercase = false,
  attachPos,
  size = 'md',
  ...props
}: ButtonProps) => (
  <button
    className={clsx(
      S.button,
      S[`button_${size}`],
      uppercase && S.uppercase,
      attachPos && S[`attach_${attachPos}`]
    )}
    {...props}
  >
    {children}
    {icon}
  </button>
)

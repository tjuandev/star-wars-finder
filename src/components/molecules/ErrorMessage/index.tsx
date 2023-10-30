import { Button, DarthVaderIcon } from 'components/atoms'
import S from './styles.module.scss'
import type { ErrorMessageProps } from './types'

export const ErrorMessage = ({
  message,
  title,
  helpButtonProps
}: ErrorMessageProps) => (
  <div className={S.container} role="alert">
    <DarthVaderIcon className={S.icon} />
    <div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
    {helpButtonProps && <Button size="sm" {...helpButtonProps} />}
  </div>
)

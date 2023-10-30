'use client'

import { ErrorMessage } from 'components/molecules'
import { useRouter } from 'next/navigation'
import S from './styles.module.scss'

const NotFound = () => {
  const { push } = useRouter()

  return (
    <html lang="en-US">
      <body className={S.not_found}>
        <ErrorMessage
          title="Page not found"
          message="The page you are looking for does not exist."
          helpButtonProps={{
            children: 'Go to home page',
            onClick: () => {
              push('/')
            }
          }}
        />
      </body>
    </html>
  )
}

export default NotFound

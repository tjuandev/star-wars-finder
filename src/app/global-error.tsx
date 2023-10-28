'use client'

import { useEffect } from 'react'
import Error from 'components/organisms/Error'
import poppins from 'theme/fontFamily'
import type { ErrorProps } from './types'

const GlobalError = ({ error }: ErrorProps) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <html lang="en-US">
      <body className={poppins.className}>
        <Error />
      </body>
    </html>
  )
}

export default GlobalError

'use client'

import { useEffect } from 'react'
import poppins from 'theme/fontFamily'
import type { ErrorProps } from './types'
import { ErrorMessage } from 'components/molecules'

const GlobalError = ({ error }: ErrorProps) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <html lang="en-US">
      <body className={poppins.className}>
        <ErrorMessage
          title="Something went wrong"
          message="Please try again later."
        />
      </body>
    </html>
  )
}

export default GlobalError

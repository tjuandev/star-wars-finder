'use client'

import Error from 'components/organisms/Error'
import poppins from 'theme/fontFamily'

const NotFound = () => {
  return (
    <html lang="en-US">
      <body className={poppins.className}>
        <Error />
      </body>
    </html>
  )
}

export default NotFound

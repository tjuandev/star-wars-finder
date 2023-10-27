'use client'

import Error from 'components/organisms/Error'
import poppins from 'theme/fontFamily'

const NotFound = () => {
  return (
    <body className={poppins.className}>
      <Error />
    </body>
  )
}

export default NotFound

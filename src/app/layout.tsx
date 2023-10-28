import type { ReactNode } from 'react'
import MainProvider from 'providers/MainProvider'
import 'theme/global.scss'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en-US">
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  )
}

export default RootLayout

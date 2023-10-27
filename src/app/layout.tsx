import type { ReactNode } from 'react'
import MainProvider from 'providers/MainProvider'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <MainProvider>{children}</MainProvider>
}

export default RootLayout

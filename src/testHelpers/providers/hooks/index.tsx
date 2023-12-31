import { renderHook, type RenderHookResult } from '@testing-library/react'
import MainProvider from 'providers/MainProvider'
import type { RenderHooksProviderProps, WrapperProps } from './types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: WrapperProps): ReactNode => (
  <MainProvider>{children}</MainProvider>
)

const renderHooksProvider = (
  children: RenderHooksProviderProps
): RenderHookResult<any, any> => {
  return renderHook(children, { wrapper })
}

export default renderHooksProvider

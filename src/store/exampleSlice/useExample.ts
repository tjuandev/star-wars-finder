import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { increment } from './slice'

export const useExample = () => {
  const dispatch = useTypedDispatch()
  const data = useTypedSelector(state => state.dynamicForm.count)

  const setState = {
    increment: () => dispatch(increment())
  }

  return { data, ...setState }
}

import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { addToRanking } from './slice'
import type { AddRankingPayload } from './types'

export const usePopularSearches = () => {
  const dispatch = useTypedDispatch()
  const data = useTypedSelector(state => state.popularSearches.data)

  const setState = {
    addToRanking: (payload: AddRankingPayload) =>
      dispatch(addToRanking(payload))
  }

  return { data, ...setState }
}

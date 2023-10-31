'use client'
import {
  useSearchCategory,
  useSearchParallelCategories
} from 'services/category'

import { errors } from 'services/category/errors'

import { usePopularSearches } from 'store/popularSearchesSlice'
import type { MainProps } from '../types'
import S from '../styles.module.scss'
import { CategoryItem } from './CategoryItem'
import { Loader } from 'components/atoms'
import { ErrorMessage } from 'components/molecules'

type PopularProps = {
  category: StarWarsCategories
}

const LoaderBar = () => (
  <div className={S.loader}>
    <Loader />
  </div>
)

const SearchedItems = ({ category, searchValue }: MainProps) => {
  const { data, isLoading, error } = useSearchCategory({
    category,
    searchValue
  })

  if (isLoading) return <LoaderBar />

  const isDataEmpty = data.length === 0
  if (error || isDataEmpty) {
    const { title, message } =
      errors[isDataEmpty ? 'not-found' : 'unknown-error']

    return <ErrorMessage title={title} message={message} />
  }

  return data?.map(itemProps => (
    <CategoryItem key={itemProps.id} category={category} {...itemProps} />
  ))
}

const PopularItems = ({ category }: PopularProps) => {
  const { data: popularIds } = usePopularSearches()
  const topFivePopularIds = popularIds[category]?.slice(0, 5) || []

  const { data, isLoading, error } = useSearchParallelCategories({
    ids: topFivePopularIds.map(({ id }) => id),
    category
  })

  if (isLoading) return <LoaderBar />

  const isDataEmpty = data?.length === 0
  if (error || isDataEmpty) {
    const { title, message } =
      errors[isDataEmpty ? 'not-found-popular-searches' : 'unknown-error']

    return <ErrorMessage title={title} message={message} />
  }

  return data?.map(itemProps => (
    <CategoryItem key={itemProps?.id} category={category} {...itemProps} />
  ))
}

export const Main = ({ category, searchValue }: MainProps) => {
  const showPopular = !searchValue?.length

  return (
    <main className={S.main}>
      {showPopular && <h3>Popular</h3>}
      <div>
        {showPopular ? (
          <PopularItems category={category} />
        ) : (
          <SearchedItems category={category} searchValue={searchValue} />
        )}
      </div>
    </main>
  )
}

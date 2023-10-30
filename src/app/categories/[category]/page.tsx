'use client'
import S from './styles.module.scss'
import { notFound } from 'next/navigation'
import { categoriesList } from 'constant'
import type { MainProps, PageProps } from './types'
import { Badge, Loader, Logo } from 'components/atoms'
import { Accordion, SearchBar } from 'components/molecules'
import Link from 'next/link'
import { useSearchCategory } from 'services/category'
import { useState } from 'react'
import { usePopularSearches } from 'store/popularSearchesSlice'

const SMALL_BADGE_LENGTH = 50

const SearchHelpText = () => (
  <p className={S.search_help_text}>
    Wrong category? <Link href="/">Choose another.</Link>
  </p>
)

export const Main = ({ category, searchValue }: MainProps) => {
  const { data, isLoading } = useSearchCategory({ category, searchValue })

  const { addToRanking } = usePopularSearches()

  return (
    <main className={S.main}>
      {isLoading ? (
        <Loader className={S.loader} aria-label="loader" />
      ) : (
        data?.map(({ details, id, name, title }) => {
          const contentAdapted = Object.entries(details).map(([key, value]) => {
            const hasHugeText = value.length > SMALL_BADGE_LENGTH

            return (
              <Badge key={key} hugeText={hasHugeText}>
                <p className={S.badge_content}>
                  <strong>{key.replaceAll('_', ' ')}</strong>: {value}
                </p>
              </Badge>
            )
          })

          return (
            <Accordion
              key={name}
              onOpen={() => addToRanking({ category, id })}
              title={
                <p className={S.accordion_title}>
                  #{id}
                  <strong>{name || title}</strong>
                </p>
              }
            >
              <div className={S.accordion_badges}>{contentAdapted}</div>
            </Accordion>
          )
        })
      )}
    </main>
  )
}

const Category = ({ params: { category } }: PageProps) => {
  const isValidCategory = categoriesList.find(({ title }) => title === category)
  if (!isValidCategory || !category) notFound()

  const [searchValue, setSearchValue] = useState<string | null>(null)

  return (
    <div className={S.container}>
      <header className={S.header}>
        <Logo />
        <h5>{category}</h5>
        <SearchBar
          onSearch={value => {
            setSearchValue(value)
          }}
          helpText={<SearchHelpText />}
        />
      </header>
      <Main category={category} searchValue={searchValue} />
    </div>
  )
}

export default Category

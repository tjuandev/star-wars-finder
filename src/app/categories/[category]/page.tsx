'use client'
import S from './styles.module.scss'
import { notFound } from 'next/navigation'
import { categoriesList } from 'constant'
import type { PageProps } from './types'
import { Badge, Loader, Logo } from 'components/atoms'
import { Accordion, SearchBar } from 'components/molecules'
import Link from 'next/link'
import { useSearchCategory } from 'services/category'
import { useState } from 'react'

const SearchHelpText = () => (
  <p className={S.search_help_text}>
    Wrong category? <Link href="/">Choose another.</Link>
  </p>
)

export const Main = ({
  category,
  searchValue
}: {
  category: StarWarsCategories
  searchValue: string | null
}) => {
  const { data, isLoading } = useSearchCategory({ category, searchValue })

  return (
    <main className={S.main}>
      {isLoading ? (
        <Loader className={S.loader} aria-label="loader" />
      ) : (
        data?.map(({ details, id, name }) => {
          const contentAdapted = Object.entries(details).map(([key, value]) => {
            return (
              <Badge key={key}>
                <p className={S.badge_content}>
                  <strong>{key.replaceAll('_', ' ')}</strong>: {value}
                </p>
              </Badge>
            )
          })

          const title = (
            <p className={S.accordion_title}>
              #{id}
              <strong>{name}</strong>
            </p>
          )

          return (
            <Accordion key={name} title={title}>
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

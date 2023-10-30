'use client'
import S from './styles.module.scss'
import { notFound } from 'next/navigation'
import { categoriesList } from 'constant'
import type { PageProps } from './types'
import { Logo } from 'components/atoms'
import { SearchBar } from 'components/molecules'
import Link from 'next/link'
import { useState } from 'react'
import { Main } from './components'

const SearchHelpText = () => (
  <p className={S.search_help_text}>
    Wrong category? <Link href="/">Choose another.</Link>
  </p>
)

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

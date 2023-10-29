import { Button, LightsaberIcon } from 'components/atoms'
import S from './styles.module.scss'
import type { SearchBarProps } from './types'
import type { FormEvent } from 'react'

export const SearchBar = ({
  onSearch,
  placeholder = 'Search here...'
}: SearchBarProps) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = (e.target as HTMLFormElement).search.value
    onSearch(value)
  }

  return (
    <form className={S.container} onSubmit={onSubmit}>
      <input
        name="search"
        className={S.input}
        type="text"
        placeholder={placeholder}
      />
      <Button type="submit" attachPos="left" icon={<LightsaberIcon />}>
        Search
      </Button>
    </form>
  )
}

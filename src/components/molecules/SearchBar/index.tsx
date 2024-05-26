import { Button, LightsaberIcon } from 'components/atoms'
import S from './styles.module.scss'
import type { SearchBarProps } from './types'
import type { FormEvent } from 'react'

export const SearchBar = ({
  onSearch,
  placeholder = 'Search here...',
  helpText
}: SearchBarProps) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = (e.target as HTMLFormElement).search.value
    onSearch(value)
  }

  return (
    <form className={S.container} onSubmit={onSubmit} role="search">
      <div>
        <input
          name="search"
          className={S.input}
          type="search"
          placeholder={placeholder}
          data-cy="search-input"
        />
        <Button
          type="submit"
          attachPos="left"
          icon={<LightsaberIcon />}
          data-cy="search-button"
        >
          Search
        </Button>
      </div>
      <div className={S.help_text}>{helpText}</div>
    </form>
  )
}

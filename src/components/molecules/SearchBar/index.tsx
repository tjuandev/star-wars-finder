import { Button, LightsaberIcon } from 'components/atoms'
import S from './styles.module.scss'
import type { SearchBarProps } from './types'
import type { FormEvent } from 'react'

export const SearchBar = ({
  onChange,
  onSearch,
  value,
  placeholder = 'Search here...'
}: SearchBarProps) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch()
  }

  return (
    <form className={S.container} onSubmit={onSubmit}>
      <input
        name="search"
        className={S.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => {
          onChange(e.target.value)
        }}
      />
      <Button type="submit" attachPos="left" icon={<LightsaberIcon />}>
        Search
      </Button>
    </form>
  )
}

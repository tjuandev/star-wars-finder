import S from './styles.module.scss'
import { redirect } from 'next/navigation'
import { categoriesList } from 'constant'
import type { PageProps } from './types'
import { Logo } from 'components/atoms'

const Category = ({ params: { category } }: PageProps) => {
  const isValidCategory = categoriesList.find(({ title }) => title === category)

  if (!isValidCategory || !category) {
    redirect('/not-found')
  }

  return (
    <div>
      <header className={S.header}>
        <Logo />
        <h5>{category}</h5>
      </header>
      <main></main>
    </div>
  )
}

export default Category

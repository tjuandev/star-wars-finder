import { redirect } from 'next/navigation'
import { categoriesList } from 'constant'
import type { PageProps } from './types'

const Category = ({ params: { category } }: PageProps) => {
  const isValidCategory = categoriesList.find(({ title }) => title === category)

  if (!isValidCategory || !category) {
    redirect('/not-found')
  }

  return <div>{category}</div>
}

export default Category

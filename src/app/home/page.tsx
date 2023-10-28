import { Logo } from 'components/atoms'
import S from './styles.module.scss'
import { Card } from 'components/molecules'
import { categoriesList } from 'constant'

const Categories = () => {
  return (
    <div className={S.categories}>
      {categoriesList.map(({ title, src }) => (
        <Card
          key={title}
          src={src}
          title={title}
          alt={`${title}'s image`}
          href={`/categories/${title}`}
        />
      ))}
    </div>
  )
}

const Home = () => {
  return (
    <div className={S.container}>
      <header>
        <Logo size="lg" />
      </header>
      <h4 className={S.info_text}>
        Find <strong>anything</strong> you want about this awesome universe!
      </h4>
      <Categories />
    </div>
  )
}

export default Home

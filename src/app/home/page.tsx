import { Logo } from 'components/atoms'
import S from './styles.module.scss'

const Home = () => {
  return (
    <div className={S.container}>
      <Logo size="lg" />
      <h4 className={S.info_text}>
        Find <strong>anything</strong> you want about this awesome universe!
      </h4>
    </div>
  )
}

export default Home

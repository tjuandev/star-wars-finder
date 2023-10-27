import S from './styles.module.scss'

const Error = () => (
  <div className={S.grid}>
    <header className={S.header} role="banner">
      Error!
    </header>
    <main className={S.container}>
      <h1 className={S.title}>Page not found!</h1>
    </main>
  </div>
)

export default Error

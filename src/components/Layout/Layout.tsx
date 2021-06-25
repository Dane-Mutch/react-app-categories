import Header from './Header'
import Footer from './Footer'
import Main from './Main'

import styles from './layout.module.scss';

const Layout = () => { 
  return (
    <section className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </section>
  )
}

export default Layout
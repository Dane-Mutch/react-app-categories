import Header from '../Header'
import Footer from '../Footer'
import Main from '../Main'

import classes from './layout.module.scss';
import { useGetCategoriesQuery } from '../../services/categoriesApi';

const Layout = () => { 
  return (
    <section className={classes.container}>
      <Header />
      <div className={classes.image}></div>
      <Main />
      <Footer />
    </section>
  )
}

export default Layout
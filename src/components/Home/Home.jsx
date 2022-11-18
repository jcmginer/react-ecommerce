import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'
import TopNav from '../TopNav/TopNav'
import styles from './home.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <>
        <TopNav />
        <Cart />
        <Products />
        <Footer />
      </>
    </div>
  )
}

export default Home
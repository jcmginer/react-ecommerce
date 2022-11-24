import styles from './allProducts.css'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'
import TopNav from '../TopNav/TopNav'
import Cart from '../Cart/Cart'

const AllProducts = () => {
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

export default AllProducts
import styles from './allProducts.css'

import Products from '../../components/Products/Products'
import TopNav from '../../components/TopNav/TopNav'
import Cart from '../../components/Cart/Cart'
import Footer from '../../components/Footer/Footer'

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
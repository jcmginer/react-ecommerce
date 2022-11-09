import Cart from '../Cart/Cart'
import Products from '../Products/Products'
import styles from'./home.css'
const Home = () => {
  return (
    <div className={styles.home}>
      <>
        <Cart />
        <Products />
      </>
    </div>
  )
}

export default Home
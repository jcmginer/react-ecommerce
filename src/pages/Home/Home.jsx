import Footer from '../../components/Footer/Footer'
import TopNav from '../../components/TopNav/TopNav'
import './home.css'

const Home = () => {
  return (

    <>
      <TopNav />

      <img className='img-main' src='https://ik.imagekit.io/jcmginer/Products/hero-backpack-4__1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669242368781' alt='img main top' />
      <button className='btn buttonHome'>It's waiting for you</button>
      <Footer />
    </>

  )
}

export default Home
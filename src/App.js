import './App.css';
import Footer from './components/Footer/Footer';
import ProductContainer from './components/ProductContainer/ProductContainer';
import TopNav from './components/TopNav/TopNav';
import TopSearch from './components/TopSearch/TopSearch';

function App() {
  return (
    <>
    <TopNav />
    <TopSearch />
    <ProductContainer />
    <Footer />
    </>
  );
}

export default App;

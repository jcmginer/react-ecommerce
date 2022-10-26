import './App.css';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import TopNav from './components/TopNav/TopNav';
import TopSearch from './components/TopSearch/TopSearch';

function App() {
  return (
    <>
    <TopNav />
    <TopSearch />
    <Products />
    <Footer />
    </>
  );
}

export default App;

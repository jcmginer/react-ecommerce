import './App.css';
import { CartProvider } from './components/Context/CartContext';
import Home from './components/Home/Home';
function App() {
  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
}

export default App;

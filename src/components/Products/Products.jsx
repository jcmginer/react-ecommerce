import { useContext, useEffect, useState } from 'react';
/* import { Link } from 'react-router-dom'; */
import { CartContext } from '../Context/CartContext';
import Wishlist from '../Wishlist/Wishlist';
import './products.css';


const Products = () => {
	const [productsInfo, setProductsInfo] = useState([]);
	const url = "http://localhost:3001/ProductsInfo";
	const { addItemToCart } = useContext(CartContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setProductsInfo(data);
			} catch (error) {

			}

		}

		fetchData()

	}, [url])

	return (
		<>
			<div className="productsContainer">
				{productsInfo.map((product) => (
					<div key={product.id} className="product">
						{/* <Link to={`/product/${product.id}`}> */}
						<img src={product.img} alt={product.name} />
						{/* </Link> */}
						<div className='contentTextProduct'>
							<p>
								{product.name}
							</p>
							<p>
								{product.price}€
							</p>
							<button onClick={() => addItemToCart(product)}>Add to Cart</button>
							<Wishlist
								key={product.id}
								id={product.id}
								name={product.name}
								price={product.price}
								img={product.img}
							/>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Products
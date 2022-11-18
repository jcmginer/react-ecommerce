import { useContext, useEffect, useState } from 'react';
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
						<img src={product.img} alt={product.name} />
						<div className='contentTextProduct'>
							<p>
								{product.name}
							</p>
							<p>
								{product.price}$
							</p>
							<button onClick={() => addItemToCart(product)}>Add to Cart</button>
							<Wishlist {...product} />
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Products
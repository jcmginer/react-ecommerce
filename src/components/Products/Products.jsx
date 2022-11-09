import { useContext } from 'react';
import { ProductsInfo } from '../../assets/db/db';
import { CartContext } from '../Context/CartContext';
import'./products.css';


const Products = () => {
	const {addItemToCart} = useContext(CartContext)

	return (
		<>
			<div className="productsContainer">
				{ProductsInfo.map((product, i) => (
					<div key={i} className="product">
						<img src={product.img} alt={product.name} />
						<div className='contentTextProduct'>
							<p>
								{product.name}
							</p>
							<p>
							{product.price}$
							</p>
							<button onClick={() => addItemToCart(product)}>Add to Cart</button>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Products
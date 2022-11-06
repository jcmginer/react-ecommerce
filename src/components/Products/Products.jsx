import { useContext } from 'react';
import { ProductsInfo } from '../../assets/db/db';
import { CartContext } from '../Context/CartContext';
import styles from './products.css';


const Products = () => {
	const {addItemToCart} = useContext(CartContext)

	return (
		<>
			<div className={styles.productsContainer}>
				{ProductsInfo.map((product, i) => (
					<div key={i} className={styles.product}>
						<img src={product.img} alt={product.name} />
						<div>
							<p>
								{product.name} - ${product.price}
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
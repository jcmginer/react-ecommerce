import { CardsInfo } from "../../assets/db/db"
import Products from "../Products/Products"
import TopMain from "../TopMain/TopMain";


const ProductContainer = () => {
  return (
    <>
      <div className="products-box">
        <div className="container">
          <TopMain />

          {CardsInfo && CardsInfo.map((card) => {
            return <Products key={card.img} name={card.name} price={card.price} img={card.img} />;
          })}

        </div>
      </div>
    </>
  )
}

export default ProductContainer
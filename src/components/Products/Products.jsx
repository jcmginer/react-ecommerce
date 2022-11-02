import * as photos from "../../assets/img";
import MaskIcon from "../MaskIcon/MaskIcon";


const Products = ({ name, price, img }) => {

    const productImage = photos[`photo${img}`];
    return (
        <>

            <div className="row special-list">
                <div className="col-lg-3 col-md-6 special-grid best-seller">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <div className="type-lb">
                                <p className="sale">Sale</p>
                            </div>
                            <img src={productImage} className="img-fluid" alt={productImage} />
                            <MaskIcon />
                        </div>
                        <div className="why-text">
                            <h4>{name}</h4>
                            <h5>{price}</h5>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Products
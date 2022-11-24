import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import "./itemCart.css";

const ItemCart = ({ item }) => {
  const { addItemToCart, deleteItemToCart } = useContext(CartContext);

  console.log(item.img);

  return (
    <>
      <div className="table d-flex justify-content-end">
        <img className="imgItemCart" src={item.img} alt={item.name} />
        <div className="dataContainer">
          <div className="dataContainerLeft">
            <p>{item.name}</p>
            <div className="buttons">
              <button className="btn btn-success p-0 m-3" onClick={() => addItemToCart(item)}>
                ADD
              </button>
              <button className="btn btn-danger p-0 mb-3 mt-3" onClick={() => deleteItemToCart(item)}>
                DELETE
              </button>
            </div>
          </div>
          <div className="dataContainerRight">
            <div>{item.amount}</div>
            <p>{item.price}</p>
            <p>Total: {item.amount * item.price}€</p>
          </div>
        </div>
      </div>
    </>
  );
};


export default ItemCart;
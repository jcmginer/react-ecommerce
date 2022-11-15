import { useEffect, useState } from "react";

function InfoProducts() {

  const [productsInfo, setProductsInfo] = useState([]);
  const url = "http://localhost:3001/ProductsInfo";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const { ProductsInfo } = await response.json();
        setProductsInfo(ProductsInfo)
        console.log(ProductsInfo);
      } catch (error) {

      }
    }
    fetchData()
  }, [url])
  return (
    <h2>
      Hola mundo
    </h2>

  )
}

export default InfoProducts;
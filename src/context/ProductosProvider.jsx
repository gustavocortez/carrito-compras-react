import { ProductoContext } from "./ProductoContext"
import { useEffect, useState } from "react";

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProductos(data);
    };
  
    useEffect(() => {
      fetchProductos();
    }, []);
    return (
    <ProductoContext.Provider value={{ productos }}>
        {children}
    </ProductoContext.Provider>
  )
}

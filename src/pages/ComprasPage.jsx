import { ProductoContext } from "../context/ProductoContext";
import { CarritoContext } from "./../context/CarritoContext"
import { Card } from "./../components/Card";
import { useContext, useEffect, useState } from "react";

export const ComprasPage = () => {
  
  const { productos } = useContext(ProductoContext)

  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) => {
   agregarCompra(compra) 
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }
  const handleAumentar = (id) => {
    
  }
  const handleDisminuir = (id) => {
    
  }

  return (
    <>
      <h1>Compras:</h1>
      <hr />
      {productos.map((producto) => (
        <Card
          key={producto.id} // Es importante incluir una clave única al mapear.
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        />
      ))}
    </>
  );
};


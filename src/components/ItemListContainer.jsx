import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from "../data/mockdata";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.error(error));
  }, [idCategoria]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
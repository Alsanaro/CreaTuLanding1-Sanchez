import { useEffect, useState } from "react";
import { getProductos } from "../data/mockdata";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(res => setProductos(res))
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <div className="row">
        {productos.map(prod => (
          <div key={prod.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={prod.imagen} className="card-img-top" alt={prod.nombre} />
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.descripcion}</p>
                <p className="card-text"><strong>${prod.precio}</strong></p>
                <button className="btn btn-primary">Ver detalle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
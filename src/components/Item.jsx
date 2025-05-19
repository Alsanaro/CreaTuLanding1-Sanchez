import { Link } from 'react-router-dom';

function Item({ id, nombre, precio, imagen }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Precio: ${precio}</p>
          <Link to={`/item/${id}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
import ItemCount from './ItemCount';

function ItemDetail({ id, nombre, descripcion, precio, categoria, imagen }) {
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} unidad(es) del producto: ${nombre}`);
  };

  return (
    <div className="container mt-4">
      <h2>Detalle del producto</h2>
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text"><strong>Precio: ${precio}</strong></p>
          <p className="card-text">Categoría: {categoria}</p>
          <p className="card-text text-muted">ID: {id}</p>
          <ItemCount inicial={1} stock={10} onAdd={handleOnAdd} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
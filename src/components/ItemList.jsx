import Item from './Item';

function ItemList({ productos }) {
  return (
    <div className="row">
      {productos.map(prod => (
        <Item
          key={prod.id}
          id={prod.id}
          nombre={prod.nombre}
          precio={prod.precio}
          imagen={prod.imagen}
        />
      ))}
    </div>
  );
}

export default ItemList;
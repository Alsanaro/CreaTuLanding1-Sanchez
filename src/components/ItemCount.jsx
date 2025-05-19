import { useState } from 'react';

function ItemCount({ inicial, stock, onAdd }) {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button className="btn btn-outline-primary" onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button className="btn btn-outline-primary" onClick={incrementar}>+</button>
      </div>
      <div className="mt-3">
 <button className="btn btn-success"
  onClick={() => {
    onAdd(cantidad);
  }}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
export default ItemCount;
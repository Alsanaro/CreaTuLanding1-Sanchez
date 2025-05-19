import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoPorId } from '../data/mockdata';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductoPorId(idProducto)
      .then(res => setProducto(res))
      .catch(err => {
        console.error('Error al obtener producto:', err);
        setProducto(null);
      })
      .finally(() => setLoading(false));
  }, [idProducto]);

  if (loading) return <div className="container mt-4"><p>Cargando...</p></div>;

  if (!producto) return <div className="container mt-4"><p>Producto no encontrado</p></div>;

   return (
    <div className="container mt-5">
      <ItemDetail {...producto} />
    </div>
  );
}

export default ItemDetailContainer;
const productos = [
    {
      id: '1',
      nombre: 'Zapatillas Urbanas',
      descripcion: 'Zapatillas cómodas para el día a día',
      precio: 12000,
      categoria: 'calzado',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      id: '2',
      nombre: 'Remera básica',
      descripcion: 'Remera de algodón blanca',
      precio: 4500,
      categoria: 'indumentaria',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      id: '3',
      nombre: 'Campera impermeable',
      descripcion: 'Ideal para lluvia',
      precio: 18000,
      categoria: 'indumentaria',
      imagen: 'https://via.placeholder.com/150'
    }
  ];
  
  export default productos;
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  };
  
  export const getProductoPorId = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(prod => prod.id === id));
      }, 1000);
    });
  };
  
  export const getProductosPorCategoria = (categoriaId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.filter(prod => prod.categoria === categoriaId));
      }, 1000);
    });
  };
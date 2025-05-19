const productos = [
    {
      id: '1',
      nombre: 'Zapatillas Running',
      descripcion: 'Zapatillas cómodas para el día a día',
      precio: 170000,
      categoria: 'sneakers',
      imagen: 'https://www.newbalance.com.ar/on/demandware.static/-/Sites-siteCatalog_NBEU/default/dwe12bdfc2/new_images/N1T000200/N1T000200040658/N1T000200040658-1.jpeg'
    },
    {
      id: '2',
      nombre: 'Jersey Barcelona x Travis Scott',
      descripcion: 'Jersey del Barcelona FC 2025/2026 x Cactus Jack',
      precio: 120000,
      categoria: 'jerseys',
      imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzJUkcRQEEGPjwjhUh5gnD5wCU6DPPEaasCCqRB6BIPFyZz7DN0XpQo-gQyPh8ChI59Ob8VYKNvtmcNBLnU6aqnoSThOdh5KvAF-rQYO412zrMRDWN-WsO23pNh1UKLFmLCYznRHyMOTV5ZhnI-oZPuBZnvo38NoSxip_yMTAPlS6d7OkWBKIy1pGU-7fv/s1600/lanzamiento-de-la-camiseta-especial-nike-barcelona-travis-scott-2000-2001-skeleton-remake.jpg'
    },
    {
      id: '3',
      nombre: 'Chaqueta Diesel Vaquera',
      descripcion: 'Chaqueta Diesel ideal para lluvia',
      precio: 230000,
      categoria: 'jackets',
      imagen: 'https://cdn-images.farfetch-contents.com/24/34/65/76/24346576_54305429_1000.jpg'
    },
    {
      id: '4',
      nombre: 'Adidas SL 72',
      descripcion: 'Zapatillas Adidas de nueva coleccion',
      precio: 180000,
      categoria: 'sneakers',
      imagen: 'https://chelseaio.vtexassets.com/arquivos/ids/518812/JI1281_1.jpg?v=638578514986200000'
    },
    {
      id: '5',
      nombre: 'Rompevientos Ducati X Supreme',
      descripcion: 'Nuevo rompevientos Ducati X Supreme',
      precio: 240000,
      categoria: 'jackets',
      imagen: 'https://image.reversible.com/spu_thumbnail/e182340d5419020bc2064855558ed042cd7373e482b5c452a45152783638cbbb'
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
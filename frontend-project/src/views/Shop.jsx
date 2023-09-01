import { useState, useEffect } from 'react';


function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/admin/products');
        const { msg, result } = await response.json();
        setData(result);
      } catch (error) {
        console.error("Hubo un error obteniendo los datos:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <main className="productos productos__contenedor">
        <h2 className="productos__heading">Nuestra Colección</h2>
        <div className="productos__grid">
          {data.map(producto => (
            <div className="producto" key={producto.id}>
              <img className="producto__imagen" src={producto.image} alt="imagen guitarra" />
              <div className="producto__contenido">
                <h3 className="producto__nombre">{producto.name}</h3>
                <p className="producto__descripcion">{producto.description}</p>
                <p className="producto__precio">${producto.price}</p>
                <a className="producto__enlace" href="producto.html">Ver Producto</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Shop;
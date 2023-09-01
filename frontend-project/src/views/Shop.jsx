import { useState, useEffect } from 'react';


function Shop() {
  // Cambiamos el estado inicial a un array vacío.
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/admin/products'); // Reemplaza 'URL_DEL_SERVIDOR' por la URL de tu API
        const { msg, result } = await response.json();
        setData(result); // Asumimos que el resultado es un array con los productos
      } catch (error) {
        console.error("Hubo un error obteniendo los datos:", error);
      }
    }

    fetchData();
  }, []); // El array vacío indica que el useEffect se ejecutará solo una vez cuando el componente se monte

  return (
    <>
      <main className="productos productos__contenedor">
        <h2 className="productos__heading">Nuestra Colección</h2>
        <div className="productos__grid">
          {/* Iteramos sobre el array de productos y renderizamos cada uno */}
          {data.map(producto => (
            <div className="producto" key={producto.id}> {/* Asumimos que cada producto tiene un 'id' único */}
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
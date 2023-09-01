import { pool2 } from '../database/config.js';

/* 
  const schema = {
    id: xx,
    name: xx,
    description: xx,
    price: xx,
    image: xx,
    public_id: xx
  }
*/

const getAllProducts = async () => {
  const [rows] = await pool2.query("SELECT * FROM product");
  //Obtenemos todas las filas sin id
  return rows;
}

const getOneProduct = async (id) => {
  const [rows] = await pool2.query("SELECT * FROM product WHERE id = ?", [id]);
  //Obtenemos una fila con respecto a un id
  return rows[0];
}

const createProduct = async (name, description, price, image, public_id) => {
  const result = await pool2.query("INSERT INTO product (name, description, price, image, public_id) VALUES (?, ?, ?, ?, ?)", [name, description, price, image, public_id]);
  //Obtenemos informacion en caso de que se haya creado el recurso en la base de datos
  return result[0];
}

/*const updateProduct = async (name, description, price, image, public_id, id) => {
  const result = await pool2.query("UPDATE product SET name = ?, description = ?, price = ?, image = ?, public_id = ? WHERE id = ?", [name, description, price, image, public_id, id]);
  //Obtenemos informacion en caso de que se haya actualizado el recurso en la base de datos
  return result[0];
}*/

const updateProduct = async (name, description, price, id) => {
  const result = await pool2.query("UPDATE product SET name = ?, description = ?, price = ? WHERE id = ?", [name, description, price, id]);
  //Obtenemos informacion en caso de que se haya actualizado el recurso en la base de datos
  return result[0];
}

const deleteProduct = async (id) => {
  const result = await pool2.query("DELETE FROM product WHERE id = ?", [id]);
  //Obtenemos informacion en caso de que se haya eliminado el recurso en la base de datos
  return result[0];
}

export {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
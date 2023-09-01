import { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } from "../models/product.js";
import { uploadImage, deleteImage } from "../utils/cloudinary.js";

//Get all products
const getAll = async (req, res) => {
  try {
    const result = await getAllProducts();
    console.log(` - GET ALL CONTROLLER ACTIVED ✔`);
    return res.status(200).json({ msg: "Resources Obtained ✔", result: result });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
}

//Get one product
const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await getOneProduct(id);
    console.log(` - GET ONE CONTROLLER ACTIVED ✔`);
    return res.status(200).json({ msg: "Resource Obtained ✔", result: result });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
}

//Create product
const created = async (req, res) => {
  const { name, description, price } = req.body;
  const imagePath = req.files.image.tempFilePath;
  try {
    const { url, public_id } = await uploadImage(imagePath);
    const result = await createProduct(name, description, price, url, public_id);
    console.log(` - CREATED CONTROLLER ACTIVED ✔`);
    return res.status(200).json({ msg: "Product Created ✔", result: result.info });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
}

//Update product
const updated = async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  //const imagePath = req.files.image.tempFilePath;
  try {
    //Aqui obtenemos el recurso a modificar
    const product = await getOneProduct(id);
    //Aqui eliminamos de cloudinary el recurso a modificar
    //await deleteImage(product.public_id);
    //Aqui hacemos el cambio en cloudinary por el recurso nuevo
    //const { url, public_id } = await uploadImage(imagePath);
    //Aqui hacemos el cambio en la base de datos
    const result = await updateProduct(name, description, price, id);
    //Enviamos la respuesta
    console.log(` - UPDATED CONTROLLER ACTIVED ✔`);
    return res.status(200).json({ msg: "Product Updated ✔", result: result.info });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
}

//Delete
const deleted = async (req, res) => {
  const id = req.params.id;
  try {
    //Aqui eliminamos de cloudinary la imagen
    const product = await getOneProduct(id);
    await deleteImage(product.public_id);
    const result = await deleteProduct(id);
    //Enviamos la respuesta
    console.log(` - DELETED CONTROLLER ACTIVED ✔`);
    return res.status(200).json({ msg: "Product Deleted ✔", result: result.info });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
}

export {
  getAll,
  getOne,
  created,
  updated,
  deleted
}
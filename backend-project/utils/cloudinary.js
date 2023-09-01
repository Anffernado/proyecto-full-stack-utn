import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const uploadImage = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'projectUTN'
  });
  return result;
}

const deleteImage = async (public_id) => {
  const result = await cloudinary.uploader.destroy(public_id);
  return result;
}

export {
  uploadImage,
  deleteImage
}
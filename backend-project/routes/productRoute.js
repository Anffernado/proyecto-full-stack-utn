import { Router } from "express";
import { getAll, getOne, created, updated, deleted } from "../controllers/productControllers.js";

const router = Router();

//Get all products
router.get('/', getAll);

//Get one product
router.get('/:id', getOne);

//Create product
router.post('/', created);

//Update product
router.put('/:id', updated);

//Delete
router.delete('/:id', deleted);

export default router;
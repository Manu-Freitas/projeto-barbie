import express from "express";
import {
  getAllBarbies,
  getBarbiesById,
  createBarbies,
  deleteBarbies,
} from "../controllers/barbiesController.js";

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getBarbiesById);
router.post("/", createBarbies);
router.delete("/:id", deleteBarbies);

export default router;

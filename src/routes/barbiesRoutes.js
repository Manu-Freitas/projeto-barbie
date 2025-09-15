import express from "express";
import {
  getAllBarbies,
  getBarbiesById,
  createBarbies,
  deleteBarbies, 
  updateBarbie } from "../controllers/barbiesController.js";

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getBarbiesById);
router.post("/", createBarbies);
router.delete("/:id", deleteBarbies);
router.put("/:id", updateBarbie);

export default router;

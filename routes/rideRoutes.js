import express from "express";
import { getRideById, getRides } from "../controllers/rideController.js";

const router = express.Router()

router.route('/').get(getRides)
router.route('/:id').get(getRideById)

export default router
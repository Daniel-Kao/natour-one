import express from 'express';
import { getAllTours } from '../controllers/tourController';

const router = express.Router();

router.route('/').get(getAllTours);

export { router };

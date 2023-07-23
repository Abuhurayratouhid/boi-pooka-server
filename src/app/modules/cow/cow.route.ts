import express from 'express';
import { cowController } from './cow.controller';

const router = express.Router();

router.post('/', cowController.createCow);

router.get('/:id', cowController.getSingleCow);

router.patch('/:id', cowController.updateCow);

router.delete('/:id', cowController.deleteCow);

router.get('/', cowController.getAllCows);

export const cowRoutes = router;

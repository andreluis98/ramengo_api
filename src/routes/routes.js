import express from 'express';
import { getProteins, getBroths, createOrder} from '../controllers/controllers.js';

const router = express.Router();

//All routes  in here are starting with /api
router.get('/proteins', getProteins);

router.get('/broths', getBroths)

router.post('/order', createOrder)

export default router
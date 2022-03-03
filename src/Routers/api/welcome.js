import express from 'express';
import welcome from '../../Controllers/welcome'

const router = express.Router();


router.get('/', welcome);

export default router;
import express from 'express';
import {TellMe, TellMeNow} from '../../Controllers/TellMe';

const router = express.Router();


router.post('/tell', TellMe);
router.post('/tellMe', TellMeNow);

export default router;
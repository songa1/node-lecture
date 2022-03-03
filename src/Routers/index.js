import express from 'express';

import WelcomeRouter from './api/welcome';
import TellMeRouter from './api/TellMe';

const router = express.Router();

router.use('/welcome', WelcomeRouter);
router.use('/name', TellMeRouter)

export default router;
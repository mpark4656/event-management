import express from 'express';
import { login, logout, getCurrentUser } from '../controllers/authController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);
router.get('/current-user', authenticate, getCurrentUser);

export default router;
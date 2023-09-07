import express from 'express';
import { login, logout, getCurrentUser, createVisitor } from '../controllers/authController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);
router.get('/current-user', authenticate, getCurrentUser);
router.post('/create-visitor', createVisitor);
export default router;
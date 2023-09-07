import express from 'express';
import passwordHashMiddleware from '../middleware/passwordHashMiddleware.js';
import {
	getUser, getAllUsers, createUser, updateUser, deleteUser
} from '../controllers/userController.js';

const router = express.Router();

router.route('/admin/user/:id').get(getUser).delete(deleteUser).patch(passwordHashMiddleware, updateUser);
router.route('/admin/user').get(getAllUsers).post(passwordHashMiddleware, createUser);

export default router;
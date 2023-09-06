import express from 'express';
import {
	getUser, getAllUsers, createUser, updateUser, deleteUser
} from '../controllers/userController.js';

const router = express.Router();

router.route('/admin/user/:id').get(getUser).delete(deleteUser).patch(updateUser);
router.route('/admin/user').get(getAllUsers).post(createUser);

export default router;
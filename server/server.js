import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middleware/errorMiddleware.js';
import { authorize } from './middleware/authMiddleware.js';
import authRouter from './routers/authRouter.js';
import userRouter from './routers/userRouter.js';
import USER_ROLES from './utils/constants.js';

const app = express();

// Cookie Parser
app.use(cookieParser());

// Json Middleware
app.use(express.json());

// Static Pages Middleware
app.use(express.static('dist'));

// Auth API
app.use('/api/v1', authRouter);

// User Admin API
app.use('/api/v1', authorize([USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN]), userRouter);

// Send index html file from React and let the react router handle this
app.get('*', (req, res) => { res.sendFile('index.html', {root: 'dist/'}); });

// Error middleware
app.use(errorMiddleware);

// Start listening on the app port if able to connect to DB
app.listen(process.env.PORT, async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log(`Server started on port ${process.env.PORT}`);
	} catch(err) {
		console.log(err);
	}
});
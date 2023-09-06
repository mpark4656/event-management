import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import errorMiddleware from './middleware/errorMiddleware.js';
import userRouter from './routers/userRouter.js';

const app = express();

// Json Middleware
app.use(express.json());

// Static Pages Middleware
app.use(express.static('dist'));

// User API
app.use('/api/v1', userRouter);

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
import express from 'express';
import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
	console.log(`server started on port ${process.env.PORT}`);
});
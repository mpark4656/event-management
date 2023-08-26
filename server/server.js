import express from 'express';
import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.static('dist'));

app.get('/hello', (req, res) => {
	res.send('Hello World!');
});

// Send index html file from React and let the react router handle this
app.get('*', (req, res) => {
	res.sendFile('index.html', {root: 'dist/'});
})

app.listen(process.env.PORT, () => {
	console.log(`server started on port ${process.env.PORT}`);
});
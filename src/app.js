import express, { json } from 'express';
import { SERVER_PORT } from './config/index.js';
import router from './routes/index.js';
import cors from 'cors';

const PORT = SERVER_PORT || 3001;

const app = express();

app.use(json());
app.use(cors());

/* ROUTES */
app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on ${PORT}...`));
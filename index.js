import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import routesRamengo from './src/routes/routes.js';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));

app.use('/api', routesRamengo);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

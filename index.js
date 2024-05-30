import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routesRamengo from './src/routes/routes.js';


const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));

app.use('/api', routesRamengo);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

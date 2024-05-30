import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routesRamengo from './src/routes/routes.js';


const app = express();
const PORT = 5000;

app.use(cors());

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({ error: 'Unauthorized request' });
    }
  });

app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));

app.use('/api', routesRamengo);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

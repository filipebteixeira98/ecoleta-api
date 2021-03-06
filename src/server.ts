import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';

import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.use(errors());

app.listen(3333, () => {
  console.log('🚀 Server is running at http://localhost:3333');
});

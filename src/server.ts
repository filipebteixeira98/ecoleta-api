import express from 'express';
import path from 'path';

import routes from './routes';

const app = express();

app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server is running at http://localhost:3333');
});

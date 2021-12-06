import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.send();
});

app.listen(3333, () => {
  console.log('🚀 Server is running at http://localhost:3333');
});

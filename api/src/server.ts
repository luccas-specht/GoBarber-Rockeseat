import express, { response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'alterado e deu bom?!' });
});

app.listen(3333, () => {
  console.log('oieeeeee');
});

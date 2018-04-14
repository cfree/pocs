import express from 'express';
import Endpoint from './endpoint';

const { getData } = new Endpoint();
const app = express();

app.get('/', (req, res) => res.json(getData()))

app.listen(1337, () => console.log('Server running at port 1337'))

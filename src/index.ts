import dotenv from 'dotenv';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { typeOrmConfig } from './config';

dotenv.config();

const app = require('./app');
const port = process.env.PORT || 3000;

createConnection(typeOrmConfig).then(() => {
  console.log('PG connected.');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

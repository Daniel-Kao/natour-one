// Config that is common to more than one part of the app.

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import Tour from './models/Tour';

const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'tours',
  synchronize: true,
  logging: false,
  entities: [Tour]
};

export { typeOrmConfig };

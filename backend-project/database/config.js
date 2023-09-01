import { createPool } from "mysql2/promise";

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'gomita95',
  port: 3306,
  database: 'users'
});

const pool2 = createPool({
  host: 'localhost',
  user: 'root',
  password: 'gomita95',
  port: 3306,
  database: 'products'
});

export {
  pool,
  pool2
}
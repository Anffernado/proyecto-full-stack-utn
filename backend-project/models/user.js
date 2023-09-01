import { pool } from '../database/config.js'

const getUser = async (username, password) => {
  const [rows] = await pool.query('SELECT username, password FROM user WHERE username = ? AND password = ?', [username, password]);
  return rows[0];
}

export {
  getUser
}
const pool = require('./pool');

const getAllMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

const insertMessage = async (user, text, added) => {
  await pool.query('INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)', [user, text, added])
}
const deleteMessageById = async (id) => {
  await pool.query('DELETE FROM messages WHERE id = $1', [id]);
}




module.exports = {
  getAllMessages,
  insertMessage,
  deleteMessageById
}
import pool from '@/lib/db';

export const getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

export const getUserById = async (id: number) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Error fetching user');
  }
};

export const createUser = async (name: string, email: string, username: string, password: string) => {
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, username, password, created_at, updated_at) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *',
      [name, email, username, password]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error creating user');
  }
};

export const updateUser = async (id: number, name: string, email: string, username: string, password: string) => {
  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, username = $3, password = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
      [name, email, username, password, id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Error updating user');
  }
};

export const deleteUser = async (id: number) => {
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

import { query } from '../database/postgresql.js'

export const getAllClients = async () => {
  const result = await query('SELECT * FROM CLIENTS;');
  const allClients = result.rows;
  return allClients;
}

export const getClient = async (id) => {
  const result = await query('SELECT * FROM CLIENTS WHERE id = $1;', [id]);
  const client = result.rows[0];
  return client;
}

export const createClient = async ({ nombre, correo, telefono }) => {
  const values = [nombre, correo, telefono];
  const result = await query('INSERT INTO CLIENTS (nombre, correo, telefono) values ($1, $2, $3) RETURNING *;', values);
  const client = result.rows[0];
  return client;
}

export const updateClient = async ({ nombre, correo, telefono }, id) => {
  const values = [nombre, correo, telefono, id];
  const result = await query('UPDATE CLIENTS SET nombre = $1, correo = $2, telefono = $3 WHERE id = $4 RETURNING *;', values);
  const client = result.rows[0];
  return client;
}

export const deleteClient = async (id) => {
  const values = [id];
  const result = await query('DELETE FROM CLIENTS WHERE id = $1 RETURNING *;', values);
  const client = result.rows[0];
  return client;
}

export const errorHTTPHandler = (res, error) => {
  if (error.code === '23514') {
    return res.status(400).send({ status: 400, message: "Llene todos los campos", detail: error.detail });
  }
  if (error.code === '23505') {
    return res.status(400).send({ status: 400, message: "Error al crear cliente", detail: error.detail });
  }
  res.status(500);
  res.send({ error });
}
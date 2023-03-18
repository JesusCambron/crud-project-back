import { isEmpty, isMaxLength, isMinMaxLength, isString } from "../utils/validators.js";

const NOMBRE_REGEX = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü]+\s{0,1})+[a-zA-ZÑñÁáÉéÍíÓóÚúÜü]$/;
const TELEFONO_REGEX = /^[0-9]{10,15}$/;
const EMAIL_REGEX = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validateClients = (req, res, next) => {
  const { nombre, telefono, correo } = req.body;

  let errors = { nombre: [], telefono: [], correo: [] };

  errors.nombre = validateNombre(nombre);
  errors.telefono = validateTelefono(telefono);
  errors.correo = validateCorreo(correo);

  for (let error of Object.values(errors)) {
    if (error.length) return res.status(401).send({ status: 400, message: "Error en campos", detail: errors })
  }

  next();
}

const validateNombre = (nombre) => {
  const errors = [];
  if (isEmpty(nombre)) errors.push("Este campo no puede estar vácio");
  if (!NOMBRE_REGEX.test(nombre)) errors.push("Nombre debe de contener caracteres a - z, un espacio entre palabras, y sin espacio al inicio y final");
  if (!isMinMaxLength(1, 50, nombre)) errors.push("Mínimo 1 carácter y máximo 50 carácteres");
  return errors;
}

const validateTelefono = (telefono) => {
  const errors = [];
  if (isEmpty(telefono)) errors.push("Este campo no puede estar vácio");
  if (!TELEFONO_REGEX.test(telefono)) errors.push("Teléfono debe de contener caracteres númericos(0-9) sin espacios, mínimo 10 carácteres y máximo 15 carácteres");
  return errors;
}

const validateCorreo = (correo) => {
  const errors = [];
  if (isEmpty(correo)) errors.push("Este campo no puede estar vácio");
  if (!EMAIL_REGEX.test(correo)) errors.push("Formato de correo incorrecto");
  if (!isMaxLength(50, correo)) errors.push("Máximo 50 carácteres");
  return errors;
}
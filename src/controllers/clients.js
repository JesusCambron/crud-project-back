import * as clientsServices from "../services/clients.js"
import { errorHTTPHandler } from "../utils/errorHTTPHandler.js";

export const getClients = async (req, res) => {
  const allClients = await clientsServices.getAllClients();
  res.send({ clients: allClients });
}

export const getClient = async (req, res) => {
  try {
    const id = Number(req.params?.id);
    if (isNaN(id)) return res.status(400).send({ message: "Id no númerico", detail: "El id debe de ser númerico" });
    const client = await clientsServices.getClient(id);
    res.send(client);
  } catch (error) {
    console.log(error);
    errorHTTPHandler(res, error);
  }
}

export const createClient = async (req, res) => {
  try {
    const newClient = await clientsServices.createClient(req.body);
    res.send({ ...newClient });
  } catch (error) {
    errorHTTPHandler(res, error);
  }
}

export const updateClient = async (req, res) => {
  try {
    const id = Number(req.params?.id);
    if (isNaN(id)) return res.status(400).send({ message: "Id no númerico", detail: "El id debe de ser númerico" });
    const updatedClient = await clientsServices.updateClient(req.body, id);
    res.send({ ...updatedClient });
  } catch (error) {
    errorHTTPHandler(res, error);
  }
}

export const deleteClient = async (req, res) => {
  const id = req.params?.id
  const deletedClient = await clientsServices.deleteClient(id);
  res.send(deletedClient);
}
import Router from "express";
import * as clientsController from '../controllers/clients.js';
import { validateClients } from "../middleware/clients.js";

const router = Router();

router.get('/', clientsController.getClients);
router.get('/:id', clientsController.getClient);
router.post('/', validateClients, clientsController.createClient);
router.put('/:id', validateClients, clientsController.updateClient);
router.delete('/:id', clientsController.deleteClient);

export { router };
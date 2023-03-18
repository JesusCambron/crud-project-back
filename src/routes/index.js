import Router from "express";
import { readdirSync } from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName) => {
  const file = fileName.split('.').shift();
  return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'index') {
    console.log(`Loading route... /${cleanName}`);
    import(`./${cleanName}.js`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    })
  }
})

export default router;
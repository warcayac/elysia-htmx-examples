import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import DialogsCustom, { Modal } from "../../components/DialogsCustom";


const relpath = '/modal';
const path = `/modal-custom${relpath}`;

export const modalcustomRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <DialogsCustom path={path}/> ))
  .get(relpath, ({html}) => html( <Modal /> ))
;
import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import DialogsUIKit, { Modal } from "../../components/DialogsUIKit";


const relpath = '/modal';
const path = `/modal-uikit${relpath}`;

export const modaluikitRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <DialogsUIKit path={path}/> ))
  .get(relpath, ({html}) => html(<Modal />))
;
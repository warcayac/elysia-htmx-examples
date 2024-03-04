import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import DialogsBootstrap, { Modal } from "../../components/DialogsBootstrap";


const relpath = '/modal';
const path = `/modal-bootstrap${relpath}`;

export const modalbootstrapRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <DialogsBootstrap path={path}/> ))
  .get(relpath, ({html}) => html( <Modal /> ))
;
import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import AsyncAuth from "../../components/AsyncAuth";


const relpath = '/example';
const path = `/async-auth${relpath}`;

export const asyncauthRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <AsyncAuth path={path}/> ))
  .post(relpath, () => 'Hello from the server!')
;

import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import LazyLoading from "../../components/LazyLoading";


const relpath = '/graph';
const path = `/lazy-load${relpath}`;

export const lazyloadRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <LazyLoading path={path}/> ))
  .get(relpath, () => ( <img src="/public/img/tokyo.png" alt="Tokyo Climate" /> ))
;
import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

import Click2Load, { RowList } from "../../components/Click2Load";
import { checkQueryPage } from "../../utils/validators";


const relpath = '/contacts';
const path = `/click-to-load${relpath}`;

export const click2loadRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <Click2Load path={path} /> ))
  .get(
    relpath, 
    ({query: {page}, html}) => {
      return html( <RowList path={path} multiplier={ parseInt(page) } /> );
    },
    checkQueryPage,
  )
;
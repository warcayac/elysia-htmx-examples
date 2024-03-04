import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import DialogsBrowser from "../../components/DialogsBrowser";


const relpath = '/submit';
const path = `/dialogs${relpath}`;

export const dialogsRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html(<DialogsBrowser path={path}/>))
  .post(
    relpath, 
    ({headers}) => {
      const value = headers['hx-prompt'];
      return (`User entered <i>${value}</i>`)
    },
    { 
      headers: t.Object({
        'hx-prompt': t.String({minLength: 1}),
      })
    }
  )
;
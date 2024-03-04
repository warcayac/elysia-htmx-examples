import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import DragDropSortable, { Items } from "../../components/DragDropSortable";


const relpath = '/items';
const path = `/sortable${relpath}`;

export const sortableRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <DragDropSortable path={path}/> ))
  .post(
    relpath, 
    ({body:{item}}) => {
      return (<Items values={item}/>);
    },
    {
      body: t.Object({
        item: t.Array(t.String())
      })
    }
  )
;
import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import Confirm, { Example1, Example2 } from "../../components/Confirm";


const relpaths = ['/example1','/example2','/confirmed'];
const path = (i:number, full:boolean = false ) => `${full ? '/confirm':''}${relpaths[i]}`;
const fpath = (i:number) => path(i, true);
const fpaths = relpaths.map((_,i) => fpath(i));

export const confirmRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <Confirm paths={fpaths}/> ))
  .get(path(0), ({html}) => html( <Example1 path={fpath(2)}/> ))
  .get(path(1), ({html}) => html( <Example2 path={fpath(2)}/> ))
  .get(path(2), () => 'Confirmed from server!!')
;
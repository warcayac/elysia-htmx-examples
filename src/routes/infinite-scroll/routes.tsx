import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

import InfiniteScroll, { RowList } from "../../components/InfiniteScroll";
import { checkQueryPage } from "../../utils/validators";


const relpath = '/contacts';
const path = `/infinite-scroll${relpath}`;

export const infinitescrollRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <InfiniteScroll path={path}/> ))
  .get(
    relpath, 
    ({query: {page}, html}) => {
      return html( <RowList path={path} multiplier={ parseInt(page) } /> );
    },
    checkQueryPage,
  )
;
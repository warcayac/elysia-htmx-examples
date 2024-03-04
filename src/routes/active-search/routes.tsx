import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";

import ActiveSearch, { RowList } from "../../components/ActiveSearch";
import { getLongSampleUsers } from "../../utils/samples";


const relpath = '/search';
const path = `/active-search${relpath}`;
const data = getLongSampleUsers();

export const activesearchRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <ActiveSearch path={path}/> ))
  .post(
    relpath, 
    ({html, body:{search}}) => {
      if (search.length > 0) {
        const users = data.filter(user => {
          const { id, ...other } = user;
          const values = Object.values(other).join('::');
          
          return values.includes(search)
        });

        return html( <RowList {...{users}}/> );
      }
      return ('');
    },
    {
      body: t.Object({
        search: t.String()
      })
    }
  )
;
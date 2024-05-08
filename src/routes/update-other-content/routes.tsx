import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";

import 
  UpdatingOtherContent, 
  { 
    Row,
    Solution1, Solution2, Solution3, Solution4,
  } 
  from "../../components/UpdatingOtherContent";
import { getSampleUsers } from "../../utils/samples";


const relpaths = [
  '/solution-1','/solution-2','/solution-3','/solution-4',
  '/contacts-1','/contacts-2','/contacts-3','/contacts-4',
];
const path = (i:number, full:boolean = false) => `${full ? '/update-other-content':''}${relpaths[i]}`;
const fpath = (i:number) => path(i, true);
const fullPaths = relpaths.map((_,i) => fpath(i));
const checkBody = {
  body: t.Object({
    name: t.String({minLength: 3, maxLength: 50, error: 'Name must be between 3 and 50 characters'}),
    email: t.String({format: 'email', error: 'Invalid email format'}),
  })
};
const users = getSampleUsers().map( (m) => ({name:m.name, email:m.email}));

export const updateothercontentRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html(<UpdatingOtherContent paths={fullPaths}/>))
  .get(path(0), ({html}) => html(<Solution1 path={fpath(4)}/>))
  .get(path(1), ({html}) => html(<Solution2 path={fpath(5)}/>))
  .get(path(2), ({html}) => html(<Solution3 path={fpath(6)}/>))
  .get(path(3), ({html}) => html(<Solution4 path={fpath(7)}/>))
  
  .post(
    path(4), 
    ({body:{name,email}, set}) => {
      set['status'] = 201;
      return (<Row user={{name,email}}/>);
    },
    checkBody,
  )
  .post(
    path(5), 
    ({body:{name,email}, set, html}) => {
      set['status'] = 201;
      // Es necesario encerrar el componente Row con el elemento TBODY, para que la fila
      // se agregue a la tabla como tal, caso contrario el elemento TR es eliminado. 
      // Véase: https://github.com/bigskysoftware/htmx/issues/2364
      return html(<tbody hx-swap-oob="beforebegin:#swaprow"><Row user={{name,email}}/></tbody>);
    },
    checkBody,
  )
  .post(
    path(6), 
    ({body:{name,email}, set}) => {
      set['status'] = 201;
      set.headers['hx-trigger'] = 'newContact';
      users.push({name,email});
      return '';
    },
    checkBody,
  )
  .get(
    `${path(6)}/table`, 
    ({html}) => {
      return html(<>{ users.map((user) => <Row user={user}/>) }</>);
    },
  )
  .post(
    path(7), 
    ({body:{name,email}, set}) => {
      set['status'] = 201;
      users.push({name,email});
      return '';
    },
    checkBody,
  )
  .get(
    `${path(7)}/table`, 
    ({html}) => {
      return html(<>{ users.map((user) => <Row user={user}/>) }</>);
    },
  )
;

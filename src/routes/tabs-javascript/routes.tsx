import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

import TabsUsingJS from "../../components/TabsUsingJS";
import { contents } from "../../utils/samples";


const relpath = '/tab';
const basePath = `/tabs-javascript${relpath}`;
const path = (i:number) => `${relpath}${i}`;
const props = (i:number) => ({basePath, curTab: i});

export const tabsjavascriptRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <TabsUsingJS  {...props(1)}/> ))
  .get(path(1), () => (<p>{contents[0]}</p>))
  .get(path(2), () => (<p>{contents[1]}</p>))
  .get(path(3), () => (<p>{contents[2]}</p>))
;
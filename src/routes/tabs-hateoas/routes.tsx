import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import TabsUsingHateOAS, { Tab } from "../../components/TabsUsingHateOAS";


const relpath = '/tab';
const basePath = `/tabs-hateoas${relpath}`;
const path = (i:number) => `${relpath}${i}`;
const props = (i:number) => ({basePath, curTab: i});

export const tabshateoasRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <TabsUsingHateOAS {...props(1)}/> ))
  .get(path(1), () => (<Tab {...props(1)}/>))
  .get(path(2), () => (<Tab {...props(2)}/>))
  .get(path(3), () => (<Tab {...props(3)}/>))
;
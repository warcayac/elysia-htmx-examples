import Elysia from "elysia";
import cors from "@elysiajs/cors";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";

import { httpResponse } from "./@warcayac/const-elysia";
import wlogger from "./@warcayac/wlogger";

import Home from "./components/Home";
import * as e from "./imports";


export const app = new Elysia();

app
  .use(html())
  .use(staticPlugin())
  .use(cors({methods: '*'}))
  .use(wlogger(true))
  .get('/', ({html}) => html( <Home /> ))
  .group('/click-to-edit', app => app.use(e.click2editRoutes))
  .group('/bulk-update', app => app.use(e.bulkupdateRoutes))
  .group('/click-to-load', app => app.use(e.click2loadRoutes))
  .group('/delete-row', app => app.use(e.deleterowRoutes))
  .group('/edit-row', app => app.use(e.editrowRoutes))
  .group('/lazy-load', app => app.use(e.lazyloadRoutes))
  .group('/inline-validation', app => app.use(e.inlinevalidationRoutes))
  .group('/infinite-scroll', app => app.use(e.infinitescrollRoutes))
  .group('/active-search', app => app.use(e.activesearchRoutes))
  .group('/progress-bar', app => app.use(e.progressbarRoutes))
  .group('/value-select', app => app.use(e.valueselectRoutes))
  .group('/animations', app => app.use(e.animationsRoutes))
  .group('/file-upload', app => app.use(e.fileuploadRoutes))
  .group('/file-upload-input', app => app.use(e.fileuploadinputRoutes))
  .group('/dialogs', app => app.use(e.dialogsRoutes))
  .group('/modal-uikit', app => app.use(e.modaluikitRoutes))
  .group('/modal-bootstrap', app => app.use(e.modalbootstrapRoutes))
  .group('/modal-custom', app => app.use(e.modalcustomRoutes))
  .group('/tabs-hateoas', app => app.use(e.tabshateoasRoutes))
  .group('/tabs-javascript', app => app.use(e.tabsjavascriptRoutes))
  .group('/keyboard-shortcuts', app => app.use(e.keyboardshortcutsRoutes))
  .group('/sortable', app => app.use(e.sortableRoutes))
  .group('/update-other-content', app => app.use(e.updateothercontentRoutes))
  .group('/confirm', app => app.use(e.confirmRoutes))
  .group('/async-auth', app => app.use(e.asyncauthRoutes))
  .all('*', () => httpResponse[404]('Path name not found'))
  .listen(
    process.env.PORT || 3001,
    () => console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
  )
;

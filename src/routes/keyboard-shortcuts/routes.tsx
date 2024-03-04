import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import KeyboardShortcuts from "../../components/KeyboardShortcuts";


const relpath = '/doit';
const path = `/keyboard-shortcuts${relpath}`;

export const keyboardshortcutsRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <KeyboardShortcuts path={path}/> ))
  .post(relpath, () => ('Did it!'))
;
import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import FileUploadInput from "../../components/FileUploadInput";


const relpath = '/';
const path = `/file-upload-input${relpath}`;

export const fileuploadinputRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <FileUploadInput path={path}/> ))
;
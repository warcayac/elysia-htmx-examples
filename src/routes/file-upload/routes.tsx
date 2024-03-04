import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import { nanoid } from "nanoid";

import FileUpload, { HSversion, JSversion, Upload } from "../../components/FileUpload";


const baseDir = './uploads/';
const relpaths = ['/', '/js-version', '/hs-version', '/upload'];
const path = (i: number, full: boolean = false) => `${full ? '/file-upload':''}${relpaths[i]}`;
const fpath = (i: number) => path(i, true);

// https://medium.com/deno-the-complete-reference/bun-vs-python-file-uploads-performance-comparison-f0e2c707b69c
export const fileuploadRoutes = new Elysia()
  .use(html())
  .get(path(0), ({html}) => html(<FileUpload paths={[fpath(1),fpath(2)]}/>))
  .get(path(1), ({html}) => html(<JSversion path={fpath(3)}/>))
  .get(path(2), ({html}) => html(<HSversion path={fpath(3)}/>))
  .post(
    path(3), 
    async ({html, body:{file}}) => {
      console.log(`name: ${file.name}`);
      console.log(`size: ${file.size} bytes (${(file.size/1024).toFixed(1)} KiB)`);
      console.log(`type: ${file.type}`);
      const filePath = `${baseDir}${file.name.length > 3 ? file.name : nanoid()}`;
      await Bun.write(Bun.file(filePath), file)
      return html(<div>Success!</div>);
    },
    {
      body: t.Object({
        file: t.File({
          // maxSize: '1m', 
          type: [
            'image/jpeg', 'image/png', 'image/jpg', 'text/csv', 'application/pdf', 'application/json',
            'video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/x-ms-wmv', 'video/x-flv', 'video/webm', 'video/3gpp', 'video/3gpp2',
          ],
          error: 'Invalid file type or size.'
        })
      })
    }
  )
;
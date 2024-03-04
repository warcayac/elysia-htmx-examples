import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import ProgressBar, { JobDone, Progress, StartJob } from "../../components/ProgressBar";


const relpaths = ['/','/job', '/job/progress', '/start'];
const path = (i: number, full: boolean = false) => `${full ? '/progress-bar' : ''}${relpaths[i]}`;
const fpath = (i: number) => path(i, true);
const MAX_INCREMENT = 40;
let counter = 0;

export const progressbarRoutes = new Elysia()
  .use(html())
  .get(path(0), ({html}) => {
    counter = 0;
    return html( <ProgressBar path={fpath(3)}/> );
  })
  .get(path(1), ({html}) => html( <JobDone paths={[fpath(1),fpath(2),fpath(3)]}/> ))
  .get(path(2), ({html, set:{headers}}) => {
    counter += Math.floor(Math.random() * MAX_INCREMENT);

    // Esta cabecera será leída por HTMX indicando que ha recibido el evento 'done'
    if (counter > 100) headers['HX-Trigger'] = 'done';
    
    return html(<Progress value={counter}/>);
  })
  .post(path(3), ({html}) => {
    counter = 0;
    return html(<StartJob path={fpath(1)}/>);
  })
;
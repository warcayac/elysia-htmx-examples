import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

import Animations, { 
  ColorThrob, 
  Colors, 
  FadeInButton, 
  FadeInOnAddition, 
  FadeOutOnSwap, 
  NewContent, 
  OriginalContent, 
  RequestInFlightAnimation, 
  UsingClassToolsExtension,
  UsingViewTransitionAPI
} from "../../components/Animations";


const relpaths = [
  '/',
  '/color-throb','/color-throb/colors',
  '/fade-out-on-swap','/fade-out-on-swap/fade_out_demo',
  '/fade-in-on-addition','/fade-in-on-addition/fade_in_demo',
  '/request-in-flight-animation','/request-in-flight-animation/name',
  '/using-class-tools-extension',
  '/using-view-transition-api','/using-view-transition-api/new-content','/using-view-transition-api/original-content',
];
const path = (i: number, full: boolean = false) => `${full ? '/animations':''}${relpaths[i]}`;
const fpath = (i: number) => path(i, true);
const fpaths = relpaths.map((_,i) => fpath(i));

export const animationsRoutes = new Elysia()
  .use(html())
  .get(path(0), ({html}) => html( <Animations paths={fpaths}/> ))
  
  .get(path(1), ({html}) => html( <ColorThrob path={fpath(2)}/> ))
  .get(path(2), ({html}) => html( <Colors path={fpath(2)}/> ))

  .get(path(3), ({html}) => html( <FadeOutOnSwap path={fpath(4)}/> ))
  .delete(path(4), () => (''))

  .get(path(5), ({html}) => html( <FadeInOnAddition path={fpath(6)}/> ))
  .post(path(6), ({html}) => html( <FadeInButton path={fpath(6)}/> ))

  .get(path(7), ({html}) => html( <RequestInFlightAnimation path={fpath(8)}/> ))
  .post(path(8), async ({html}) => {
    await asyncPause(0.5);
    return html('Submitted!');
  })

  .get(path(9), ({html}) => html(<UsingClassToolsExtension />))

  .get(path(10), ({html}) => html(<UsingViewTransitionAPI path={fpath(11)}/>))
  .get(path(11), ({html}) => html(<NewContent path={fpath(12)}/>))
  .get(path(12), ({html}) => html(<OriginalContent path={fpath(11)}/>))

;

function asyncPause(seconds: number): Promise<void> {
  return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
  });
}
import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";

import ValueSelect, { Options } from "../../components/ValueSelect";
import { getMakes } from "../../utils/samples";


const relpath = '/models';
const path = `/value-select${relpath}`;
const makes = getMakes();

export const valueselectRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => {
    const values = Object.keys(makes);
    const names = Object.entries(makes).map(([k, v]) => v.name);
    return html( <ValueSelect {...{path, values, names}}/> );
  })
  .get(
    relpath, 
    ({html, query: {make}}) => {
      if (makes[make]) {
        const values = makes[make]!.models;
        const names = values;
        return html( <Options {...{values, names}}/> );
      }
    },
    {
      query: t.Object({
        make: t.String({minLength: 3})
      })
    }
  )
;

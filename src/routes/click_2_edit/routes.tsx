import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";

import Click2Edit, { Contact, EditContact } from "../../components/Click2Edit";
import { TContact } from "../../utils/types";


const relpath = '/contact/1';
const path = `/click-to-edit${relpath}`;
const user: TContact = {
  firstName: 'Joe',
  lastName: 'Blow',
  email: 'joe@blow'
}

export const click2editRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <Click2Edit /> ))
  .get(relpath, () => ( <Contact {...{path, user}}/> ))
  .get(`${relpath}/edit`, () => ( <EditContact {...{path, user}}/> ))
  .put(
    relpath, 
    ({html, body}) => {
      user.firstName = body.firstName;
      user.lastName = body.lastName;
      user.email = body.email;
      
      return html( <Click2Edit /> );
    },
    {
      body: t.Object({
        firstName: t.String({minLength: 2, maxLength: 20}),
        lastName: t.String({minLength: 2, maxLength: 20}),
        email: t.String({format: 'email'}),
      })
    }
  )
;

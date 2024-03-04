import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";

import EditRow, { Row, RowEditing } from "../../components/EditRow";
import { getSampleUsers } from "../../utils/samples";
import { checkParamID } from "../../utils/validators";


const relpath = '/contact';
const path = `/edit-row${relpath}`;
const users = getSampleUsers();

export const editrowRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <EditRow {...{path, users}}/> ))
  .get(
    `${relpath}/:id`, 
    ({html, params}) => {
      const id = parseInt(params.id);
      const userX = users.find((u) => u.id === id);

      if (userX) {
        const user = userX!;
        return html( <Row {...{user, path}}/> );
      }
    },
    checkParamID,
  )
  .get(
    `${relpath}/:id/edit`, 
    ({html, params}) => {
      const id = parseInt(params.id);
      const userX = users.find((u) => u.id === id);

      if (userX) {
        const user = userX!;
        return html( <RowEditing {...{user, path}}/> );
      }
    },
    checkParamID,
  )
  .put(
    `${relpath}/:id`, 
    ({html, params, body}) => {
      const id = parseInt(params.id);
      const userX = users.find((u) => u.id === id);

      if (userX) {
        const user = userX!;
        user.name = body.name;
        user.email = body.email;
        return html( <Row {...{user, path}}/> );
      }
    },
    {
      ...checkParamID,
      body: t.Object({
        name: t.String({minLength: 3, maxLength: 100}),
        email: t.String({format: 'email'}),
      })
    },
  )
;
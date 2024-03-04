import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";

import DeleteRow from "../../components/DeleteRow";
import { getSampleUsers } from "../../utils/samples";
import { checkParamID } from "../../utils/validators";


const relpath = '/contact';
const path = `/delete-row${relpath}`;
const users = getSampleUsers();

export const deleterowRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <DeleteRow {...{path, users}} /> ))
  .delete(
    `${relpath}/:id`, 
    ({params: {id}}) => {
      return '';
    },
    checkParamID,
  );
;

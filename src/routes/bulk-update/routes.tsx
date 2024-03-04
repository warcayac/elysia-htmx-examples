import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";

import { TJMap } from "../../@warcayac/types-common";

import BulkUpdate from "../../components/BulkUpdate";
import { getSampleUsers } from "../../utils/samples";


const relpath = '/users';
const path = `/bulk-update${relpath}`;
const users = getSampleUsers();


export const bulkupdateRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <BulkUpdate usersPath={path} users={users}/> ))
  .post(
    relpath, 
    ({body}) => {
      const emails = Object
        .keys(body as TJMap)
        .filter((key) => key.startsWith('active:'))
        .map((key) => key.split(':')[1])
      ;
      let activeCount = 0;
      users.forEach((user) => {
        const flag = emails.includes(user.email);
        if (flag) activeCount++;
        user.active = flag;
      });
      
      return ( <Toast active={activeCount} inactive={users.length - activeCount}/> );
    },
  )
;

function Toast({active, inactive}: {active: number, inactive: number}) {
  return (
    <span id="toast" aria-live="polite">Activated {active} and deactivated {inactive} users</span>
  )
}
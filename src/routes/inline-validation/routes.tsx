import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";
import InlineValidation, { Email } from "../../components/InlineValidation";


const relpath = '/contact';
const path = `/inline-validation${relpath}`;

export const inlinevalidationRoutes = new Elysia()
  .use(html())
  .get('/', ({html}) => html( <InlineValidation path={path}/> ))
  .post(
    `${relpath}/email`, 
    ({html, body: {email}}) => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      let msg: string | undefined;
      if (isValid) {
        msg = email !== 'test@test.com' 
          ? 'That email is already taken. Please enter another email.'
          : undefined
        ;
      } else {
        msg = 'Please enter a valid email address';
      }
      return html( <Email {...{path, msg, email}}/> );
    },
    {
      body: t.Object({
        email: t.String(),
        firstName: t.String(),
        lastName: t.String(),
      })
    }
  )
;
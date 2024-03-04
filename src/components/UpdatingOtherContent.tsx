import Layout from "../layouts/Layout";
import { getSampleUsers } from "../utils/samples";


type TProps = {
  paths: string[];
};

type TUser = {
  name: string;
  email: string;
};

type TSMap = Record<string, string>;

const users = getSampleUsers();

export default function UpdatingOtherContent({ paths }: TProps) {
  return (
    <Layout>
      <>
        <ContactsTable />
        <hr style="margin-top:2em;"/>
        <h2>Solutions</h2>
        <ul>
          <li><a href={paths[0]}>Solution 1</a></li>
          <li><a href={paths[1]}>Solution 2</a></li>
          <li><a href={paths[2]}>Solution 3</a></li>
          <li><a href={paths[3]}>Solution 4</a></li>
        </ul>
      </>
    </Layout>
  );
}

export function Row({ user, attributes = {} }: { user: TUser, attributes?: TSMap }) {
  return (
    <tr {...attributes}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button class="btn btn-danger">Edit</button>
      </td>
    </tr>
  )
}

function ContactsTable({ attribTable = {}, attribBody = {} }: { attribTable?: TSMap, attribBody?: TSMap }) {
  return (
    <>
      <h2>Contacts</h2>
      <table class="table" style="margin-top:1em;" {...attribTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="contacts-table" {...attribBody}>
          { 
            users.map((user,i) => <Row {...{user}} />) 
          }
          <tr id="swaprow" style="display:none;"></tr>
        </tbody>
      </table>
    </>
  )
}

function NewContact({ path, attributes = {} }: {path: string, attributes?: TSMap }) {
  return (
    <>
      <style>
        {`
        input {
          margin: 0em 1em;
        }
        `}
      </style>
      <hr style="margin-top:2em" />
      <h2>Add a Contact</h2>
      <form 
        hx-post={path} 
        _="on htmx:afterRequest reset() me"
        {...attributes}
      >
        <label>
          Name
          <input name="name" type="text" required/>  
        </label>
        <label>
          Email
          <input name="email" type="email" required/>  
        </label>
        <input type="submit" class="btn" style="margin:0px; padding:8px 12px;"/>
      </form>
    </>
  )
}

export function Solution1({ path }: {path: string}) {
  return (
    <Layout>
      <>
        <ContactsTable/>
        <NewContact path={path} attributes={{'hx-target':"#contacts-table", 'hx-swap':"beforeend"}}/>
      </>
    </Layout>
  );
}

export function Solution2({ path }: {path: string}) {
  return (
    <Layout>
      <>
        <script>
          {`
          htmx.config.useTemplateFragments = true;
          `}
        </script>

        <ContactsTable />
        <NewContact path={path} attributes={{'hx-swap':'none'}}/>
      </>
    </Layout>
  );
}

export function Solution3({ path }: {path: string}) {
  return (
    <Layout>
      <>
        <ContactsTable attribBody={{'hx-get':`${path}/table`, 'hx-trigger':"newContact from:body"}}/>
        <NewContact path={path} attributes={{'hx-swap':'none'}}/>
      </>
    </Layout>
  );
}

export function Solution4({ path }: {path: string}) {
  // EXPLICACIÓN: cuando el evento "path-deps" se produzca, producto de una petición no-GET 
  // (es decir: POST, PUT, DELETE, PATCH) a la ruta "/contacts" ($path), entonces se realizará una
  // petición GET a la ruta "/contacts/table" y se actualizará el contenido del elemento
  // contenedor de estos atributos.
  // Para que esto funcione, la biblioteca "path-deps.js" debe declarse antes de uso o referencia,
  // el atributo hx-ext="path-deps" debe declararse en un elemento contenedor de los elementos
  // que se verán afectados por el evento "path-deps", en nuestro caso serían: ContactsTable y NewContact.
  // No hay necesidad de establecer alguna cabecera especial a la respuesta de la solicitud no-GET.
  const attributes = {
    'hx-get': `${path}/table`,
    'hx-trigger': "path-deps",
    'path-deps': `${path}`,
    'hx-swap': 'innerhtml',
  }

  return (
    <Layout>
      <>
      <script src="https://unpkg.com/htmx.org/dist/ext/path-deps.js"></script>
      <div hx-ext="path-deps">
        <ContactsTable attribBody={attributes} />
        <NewContact path={path} attributes={{'hx-swap':'none'}}/>
      </div>
      </>
    </Layout>
  );
}

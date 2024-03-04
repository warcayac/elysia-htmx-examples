import Layout from "../layouts/Layout";
import { TUser } from "../utils/types";


type TProps = {
  path: string;
  users: TUser[];
};

export default function DeleteRow({ path, users }: TProps) {
  return (
    <Layout>
      <>
        <style>
          {`
          tr.htmx-swapping td {
            opacity: 0;
            transition: opacity 1s ease-out;
          }
          `}
        </style>
        <table class="table delete-row-example">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody
            hx-confirm="Are you sure?"
            hx-target="closest tr"
            hx-swap="outerHTML swap:1s"
          >
            { 
              users.map((user) => <Row {...{user, path}} />) 
            }
          </tbody>
        </table>
      </>
    </Layout>
  );
}


function Row({user, path}: {user: TUser, path: string}) {
  return (
    <tr id={`user-${user.id}`}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{ user.active ? 'Active' : 'Inactive' }</td>
      <td>
        <button class="btn btn-danger" hx-delete={`${path}/${user.id}`}>
          Delete
        </button>
      </td>
    </tr>
  )
}
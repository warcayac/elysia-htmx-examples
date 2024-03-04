import Layout from "../layouts/Layout";
import { TUser } from "../utils/types";


type TProps = {
  usersPath: string;
  users: TUser[];
};


export default function BulkUpdate({usersPath, users}: TProps) {
  return (
    <Layout>
      <>
        <h3>Select Rows And Activate Or Deactivate Below</h3>
        <form id="checked-contacts"
          hx-post={usersPath}
          hx-swap="outerHTML settle:3s"
          hx-target="#toast"
        >
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Active</th>
            </tr>
            </thead>
            <tbody id="tbody">
              { 
                users.map((user) => <Row {...user} />) 
              }
            </tbody>
          </table>
          <input type="submit" value="Bulk Update" />
          <span id="toast"></span>
        </form>
      </>
    </Layout>
  )
}

function Row({id, name, email, active}: TUser) {
  return (
    <tr id={`user-${id}`}>
      <td>{name}</td>
      <td>{email}</td>
      <td><input type="checkbox" name={`active:${email}`} checked={active} /></td>
    </tr>
  )
}
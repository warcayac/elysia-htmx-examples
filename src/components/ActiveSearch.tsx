import Layout from "../layouts/Layout";
import { TUser2 } from "../utils/types";


type TProps = {
  path: string;
};


export default function ActiveSearch({ path }: TProps) {
  return (
    <Layout>
      <>
        <h3> 
          Search Contacts 
          <span class="htmx-indicator"> 
            <img src="/public/img/bars.svg"/> Searching... 
          </span> 
        </h3>
        <input 
          class="form-control" 
          type="search" 
          name="search" 
          placeholder="Begin Typing To Search Users..." 
          hx-post={path} 
          hx-trigger="input changed delay:500ms, search" 
          hx-target="#search-results" 
          hx-indicator=".htmx-indicator"
          style="margin-bottom:1em; width: 50%;"
        />
        <table class="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody id="search-results">
          </tbody>
        </table>
      </>
    </Layout>
  )
}

export function RowList({ users }: { users: TUser2[] }) {
  return (
    <>
      {
        users.map(user => (
          <tr>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        ))
      }
    </>
  )
}
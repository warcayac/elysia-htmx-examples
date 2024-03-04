import Layout from "../layouts/Layout";
import { TUser } from "../utils/types";


type TProps = {
  path: string;
  users: TUser[];
};

export default function EditRow({ path, users }: TProps) {
  return (
    <Layout>
      <>
        <table class="table delete-row-example">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody hx-target="closest tr" hx-swap="outerHTML">
            { 
              users.map((user) => <Row {...{user, path}} />) 
            }
          </tbody>
        </table>
      </>
    </Layout>
  );
}


export function Row({user, path}: {user: TUser, path: string}) {
  return (
    <tr id={`user-${user.id}`}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button 
          class="btn btn-danger"
          hx-get={`${path}/${user.id}/edit`}
          hx-trigger="edit"
          onclick={`
            let editing = document.querySelector('.editing')
            if(editing) {
              Swal
                .fire({
                  title: 'Already Editing',
                  showCancelButton: true,
                  confirmButtonText: 'Yep, Edit This Row!',
                  text:'Hey!  You are already editing a row!  Do you want to cancel that edit and continue?',
                  position: 'center',
                  icon: 'warning',
                })
                .then((result) => {
                  if(result.isConfirmed) {
                    htmx.trigger(editing, 'cancel')
                    htmx.trigger(this, 'edit')
                  }
                })
              ;
            } else {
              htmx.trigger(this, 'edit');
            }
          `}
        >
          Edit
        </button>
      </td>
    </tr>
  )
}

export function RowEditing({user, path}: {user: TUser, path: string}) {
  return (
    <tr hx-trigger='cancel' class='editing' hx-get={`${path}/${user.id}`}>
      <td><input name='name' value={user.name} /></td>
      <td><input name='email' value={user.email} /></td>
      <td>
        <button class="btn btn-danger" hx-get={`${path}/${user.id}`}>
          Cancel
        </button>
        <button class="btn btn-danger" hx-put={`${path}/${user.id}`} hx-include="closest tr">
          Save
        </button>
      </td>
    </tr>
  )
}
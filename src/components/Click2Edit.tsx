import Layout from "../layouts/Layout";
import { TContact } from "../utils/types";


type TProps = {
  path: string;
  user: TContact;
};

export default function Click2Edit() {
  return (
    <Layout>
      <>
        <style>
          {`
            input {
              margin-left: 1em;
            }
          `}
        </style>
        <div 
          hx-get="/click-to-edit/contact/1"
          hx-trigger="load"
          hx-swap="innerHTML"
          hx-target="this"
        ></div>
      </>
    </Layout>
  )
}

export function Contact({path, user} : TProps) {
  return (
    <div hx-target="this" hx-swap="outerHTML">
      <div><label>First Name</label>: {user.firstName}</div>
      <div><label>Last Name</label>: {user.lastName}</div>
      <div><label>Email</label>: {user.email}</div>
      <button hx-get={`${path}/edit`} class="btn btn-primary" style="margin-top:1em">
      Click To Edit
      </button>
    </div>    
  )
}

export function EditContact({path, user} : TProps) {
  return (
    <form hx-put={path} hx-target="this" hx-swap="outerHTML">
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={user.firstName} />
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" name="lastName" value={user.lastName}/>
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" name="email" value={user.email}/>
      </div>
      <button class="btn" style="margin-top:1em">Submit</button>
      <button class="btn" hx-get={path} style="margin-top:1em; margin-left:0.5em">Cancel</button>
    </form>
  )
}

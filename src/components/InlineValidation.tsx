import Layout from "../layouts/Layout";


type TProps = {
  path: string;
  msg?: string;
};


export default function InlineValidation({ path }: TProps) {
  return (
    <Layout>
      <>
        <style>
          {`
            div {
              padding-left: 0px;
            }
            .error-message {
              color:red;
            }
            .error input {
                box-shadow: 0 0 3px #CC0000;
            }
            .valid input {
                box-shadow: 0 0 3px #36cc00;
            }
            input {
              margin-left: 1em;
            }
          `}
        </style>
        <h3>Signup Form</h3>
        <p>Enter an email into the input below and on tab out it will be validated. Only "test@test.com" will pass.</p>
        <form hx-post={path}>
          <div hx-target="this" hx-swap="outerHTML">
            <label>Email Address</label>
            <input name="email" hx-post={`${path}/email`} hx-indicator="#ind" />
            <img id="ind" src="/public/img/bars.svg" class="htmx-indicator"/>
          </div>
          <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" name="firstName" />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" name="lastName" />
          </div>
          <button class="btn btn-default" disabled>Submit</button>
        </form>
      </>
    </Layout>
  )
}


export function Email({ path, msg, email }: TProps & { email: string }) {
  return (
    <div hx-target="this" hx-swap="outerHTML" class={!msg ? "valid" : "error"}>
      <label>Email Address</label>
      <input name="email" hx-post={`${path}/email`} hx-indicator="#ind" value={email} aria-invalid={msg ? "false" : "true"} />
      <img id="ind" src="/public/img/bars.svg" class="htmx-indicator"/>
      {
        msg ? (<div class='error-message' >{msg}</div>) : ('')
      }
    </div>
  )
}
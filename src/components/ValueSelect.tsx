import Layout from "../layouts/Layout";


type TProps = {
  path: string;
  values: string[];
  names: string[];
};


export default function ValueSelect({ path, values, names }: TProps) {
  return (
    <Layout>
      <>
        <style>
          {`
            select {
              margin-left: 1em;
            }
          `}
        </style>
        <div>
          <label >Make</label>
          <select name="make" hx-get={path} hx-target="#models" hx-indicator=".htmx-indicator">
            <option hidden disabled selected></option>
            <Options {...{values, names}} />
          </select>
        </div>
        <div>
          <label>Model</label>
          <select id="models" name="model">
          </select>
          <img class="htmx-indicator" width="20" src="/public/img/bars.svg" />
        </div>      
      </>
    </Layout>
  )
}

export function Options( {values, names}: Omit<TProps, 'path'> ) {
  return (
    <>
      {
        values.map((v, i) => (<option value={v}>{names[i]}</option>))
      }
    </>
  )
}
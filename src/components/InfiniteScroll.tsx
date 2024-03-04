import Layout from "../layouts/Layout";
import { generateID } from "../utils/functions";


type TProps = {
  path: string;
};


export default function InfiniteScroll({ path }: TProps) {
  return (
    <Layout>
      <>
        <table hx-indicator=".htmx-indicator">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            <RowList path={path} multiplier={1} />
          </tbody>
        </table>
        <div style="text-align:center">
          <img class="htmx-indicator" width="60" src="/public/img/bars.svg" />
        </div>
      </>
    </Layout>
  )
}

function Row({ id }: { id: number }) {
  return (
    <tr>
      <td>Agent Smith</td>
      <td>void{id}@null.org</td>
      <td>{ generateID() }</td>
    </tr>
  )
}


export function RowList({ path, multiplier }: { path: string, multiplier: number }) {
  const rows = Array.from({ length: 9 }, (_, i) => ( <Row id={i + 10 * multiplier} /> ));
  const id = 9 + 10 * multiplier;
  const nextPage = 1 + multiplier;

  return (
    <>
      { rows }
      <tr 
        hx-get={`${path}/?page=${nextPage}`}
        hx-trigger="revealed"
        hx-swap="afterend"
      >
      <td>Agent Smith</td>
      <td>void{id}@null.org</td>
      <td>{ generateID() }</td>
    </tr>
    </>
  )
}
import Layout from "../layouts/Layout";
import { generateID } from "../utils/functions";


type TProps = {
  path: string;
};

export default function Click2Load({ path }: TProps) {
  return (
    <Layout>
      <>
        <table>
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
      </>
    </Layout>
  );
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
  const rows = Array.from({ length: 10 }, (_, i) => ( <Row id={i + 10 * multiplier} /> ));

  return (
    <>
      { rows }
      <tr id="replaceMe">
        <td colspan="3" style="text-align:center">
          <button
            class="btn"
            hx-get={`${path}/?page=${multiplier + 1}`}
            hx-target="#replaceMe"
            hx-swap="outerHTML"
          >
            Load More Agents...{" "}
            <img class="htmx-indicator" src="/public/img/bars.svg" />
          </button>
        </td>
      </tr>
    </>
  )
}
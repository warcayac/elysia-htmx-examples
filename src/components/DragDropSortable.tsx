import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};

const values = ['1', '2', '3', '4', '5'];

export default function DragDropSortable({ path }: TProps) {
  return (
    <Layout>
      <>
        <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
        <script src="/public/scripts/sortable.js"></script>

        <form class="sortable" hx-post={path} hx-trigger="end">
          <Items values={values}/>
        </form>
      </>
    </Layout>
  )
}

function Cell({ i }: { i: string }) {
  return (
    <div 
      style="border:1px solid #DEDEDE; padding:12px; margin: 8px; width:200px; cursor: grab" 
      ondrag="this.style.cursor = 'grabbing'"
    >
      <input type="hidden" name="item" value={i}/>
      Item {i}
    </div>
  )
}

export function Items({ values }: { values: string[] }) {
  return (
    <>
      <div class="htmx-indicator" style="cursor: default">Updating...</div>
      { 
        values.map((i) => (<Cell i={i}/>)) 
      }
    </>
  )
}
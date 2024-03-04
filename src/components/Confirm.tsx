import Layout from "../layouts/Layout";


type TProps = {
  paths: string[];
};


export default function Confirm({ paths }: TProps) {
  return (
    <Layout>
      <>
      <ul>
        <li><a href={paths[0]}>Example 1</a></li>
        <li><a href={paths[1]}>Example 2</a></li>
      </ul>
      </>
    </Layout>
  )
}

export function Example1({path} : {path:string}) {
  return (
    <Layout>
      <>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

      <button 
        hx-get={path} 
        hx-trigger='confirmed' 
        _="on click
        call Swal.fire({title: 'Confirm', text:'Are you sure?'})
        if result.isConfirmed trigger confirmed"
      >
        Click Me
      </button>
      </>
    </Layout>
  )
}

export function Example2({path} : {path:string}) {
  return (
    <Layout>
      <>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="/public/scripts/confirm2.js"></script>
        
      <button hx-get={path} hx-confirm="Some confirm text here">
        Click Me
      </button>
      </>
    </Layout>
  )
}


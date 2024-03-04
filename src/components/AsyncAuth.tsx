import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};


export default function AsyncAuth({ path }: TProps) {
  return (
    <Layout>
      <>
      <script src="/public/scripts/async_auth.js"></script>
      
      <button hx-post={path} hx-target="next output">
        An htmx-Powered button
      </button>
      <br />
      <output>
        --
      </output>      
      </>
    </Layout>
  )
}

import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};


export default function DialogsBrowser({ path }: TProps) {
  return (
    <Layout>
      <>
      <div>
        <button 
          class="btn"
          hx-post={path}
          hx-prompt="Enter a string"
          hx-confirm="Are you sure?"
          hx-target="#response"
        >
          Prompt Submission
        </button>
        <div id="response" style="padding:0px;"></div>
      </div>
      </>
    </Layout>
  )
}

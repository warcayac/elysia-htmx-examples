import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};


export default function KeyboardShortcuts({ path }: TProps) {
  return (
    <Layout>
      <>
        <button 
          hx-trigger="click, keyup[altKey&&shiftKey&&key=='D'] from:body"
          hx-post={path}
          style="font-size:20pt;margin-top:1em;"
        >Do It! (alt-shift-D)</button>
      </>
    </Layout>
  )
}

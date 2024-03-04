import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};

const fileExts = ".jpeg,.png,.jpg,.csv,.pdf,.json,.mp4,.mov,.avi,.wmv,.flv,.webm,.3gp,.3g2";


export default function FileUpload({ paths }: { paths: string[] }) {
  return (
    <Layout>
      <>
        <ul>
          <li><a href={paths[0]}>Javascript version</a></li>
          <li><a href={paths[1]}>Hyperscript version</a></li>
        </ul>
      </>
    </Layout>
  )
}

export function JSversion({ path }: TProps) {
  return (
    <Layout>
      <>
        <form 
          id='form' 
          hx-encoding='multipart/form-data' 
          hx-post={path} 
          style="margin-top: 1em;"
        >
          <input type='file' name='file' accept={fileExts}/>
          <p/>
          <button>Upload</button>
          <progress id='progress' value='0' max='100'></progress>
        </form>
        <script>
          {`
          htmx.on(
            '#form',
            'htmx:xhr:progress', 
            function(evt) {
              htmx
                .find('#progress')
                .setAttribute('value', evt.detail.loaded/evt.detail.total * 100)
            }
          );
          `}
        </script>
      </>
    </Layout>
  )
}

/**
[HyperScript](https://hyperscript.org/) version
*/
export function HSversion({ path }: TProps) {
  return (
    <Layout>
      <>
        <form 
          hx-encoding='multipart/form-data' 
          hx-post={path}
          _='on htmx:xhr:progress(loaded, total) set #progress.value to (loaded/total)*100'
          style="margin-top: 1em;"
        >
          <input type='file' name='file' accept={fileExts}/>
          <p/>
          <button>Upload</button>
          <progress id='progress' value='0' max='100'></progress>
        </form>
      </>
    </Layout>
  )
}

export function Upload() {
  return (
    <>
    </>
  )
}
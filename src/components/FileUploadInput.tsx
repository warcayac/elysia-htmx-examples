import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};


export default function FileUploadInput({ path }: TProps) {
  return (
    <Layout>
      <>
        <h1>Preserving File Inputs after Form Errors</h1>
        <p>When using server-side error handling and validation with forms that include both primitive values and file inputs, the file input’s value is lost when the form returns with error messages. Consequently, users are required to re-upload the file, resulting in a less user-friendly experience.</p>
        <p>To overcome the problem of losing file input value in simple cases, you can adopt the following approach:</p>            
        <p>Before:</p>
        <pre data-lang="html" style="background-color: #1f2329; color: #abb2bf" class="language-html">
          <code class="language-html" data-lang="html">
            <span>&lt;</span><span style="color:#e06c75;">form </span><span style="color:#d19a66;">method</span><span>=</span><span style="color:#98c379;">"POST" </span><span style="color:#d19a66;">id</span><span>=</span><span style="color:#98c379;">"binaryForm" </span><span style="color:#d19a66;">enctype</span><span>=</span><span style="color:#98c379;">"multipart/form-data" </span><span style="color:#d19a66;">hx-swap</span><span>=</span><span style="color:#98c379;">"outerHTML" </span><span style="color:#d19a66;">hx-target</span><span>=</span><span style="color:#98c379;">"#binaryForm"</span><span>&gt;</span>
            <br />
            <span>    &lt;</span><span style="color:#e06c75;">input </span><span style="color:#d19a66;">type</span><span>=</span><span style="color:#98c379;">"file" </span><span style="color:#d19a66;">name</span><span>=</span><span style="color:#98c379;">"binaryFile"</span><span>/&gt;</span>
            <br />
            <span>    &lt;</span><span style="color:#e06c75;">button </span><span style="color:#d19a66;">type</span><span>=</span><span style="color:#98c379;">"submit"</span><span>&gt;Submit</span><span>&lt;</span><span>/</span><span style="color:#e06c75;">button</span><span>&gt;</span>
            <br />
            <span>&lt;</span><span>/</span><span style="color:#e06c75;">form</span><span>&gt;</span>
          </code>
        </pre>

        <p>After:</p>

        <input form="binaryForm" type="file" name="binaryFile" />

        <form method="POST" id="binaryForm" enctype="multipart/form-data" hx-swap="outerHTML" hx-target="#binaryForm">
          <button type="submit">Submit</button>
        </form>      
      </>
    </Layout>
  )
}

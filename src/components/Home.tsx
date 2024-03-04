import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <>
        <h1>htmx examples</h1>
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/click-to-edit">
                  Click To Edit
                </a>
              </td>
              <td>Demonstrates inline editing of a data object</td>
            </tr>
            <tr>
              <td>
                <a href="/bulk-update/">Bulk Update</a>
              </td>
              <td>Demonstrates bulk updating of multiple rows of data</td>
            </tr>
            <tr>
              <td>
                <a href="/click-to-load/">
                  Click To Load
                </a>
              </td>
              <td>Demonstrates clicking to load more rows in a table</td>
            </tr>
            <tr>
              <td>
                <a href="/delete-row/">Delete Row</a>
              </td>
              <td>Demonstrates row deletion in a table</td>
            </tr>
            <tr>
              <td>
                <a href="/edit-row/">Edit Row</a>
              </td>
              <td>Demonstrates how to edit rows in a table</td>
            </tr>
            <tr>
              <td>
                <a href="/lazy-load/">Lazy Loading</a>
              </td>
              <td>Demonstrates how to lazy load content</td>
            </tr>
            <tr>
              <td>
                <a href="/inline-validation/">
                  Inline Validation
                </a>
              </td>
              <td>Demonstrates how to do inline field validation</td>
            </tr>
            <tr>
              <td>
                <a href="/infinite-scroll/">
                  Infinite Scroll
                </a>
              </td>
              <td>Demonstrates infinite scrolling of a page</td>
            </tr>
            <tr>
              <td>
                <a href="/active-search/">
                  Active Search
                </a>
              </td>
              <td>Demonstrates the active search box pattern</td>
            </tr>
            <tr>
              <td>
                <a href="/progress-bar/">
                  Progress Bar
                </a>
              </td>
              <td>Demonstrates a job-runner like progress bar</td>
            </tr>
            <tr>
              <td>
                <a href="/value-select/">
                  Value Select
                </a>
              </td>
              <td>
                Demonstrates making the values of a select dependent on another
                select
              </td>
            </tr>
            <tr>
              <td>
                <a href="/animations/">Animations</a>
              </td>
              <td>Demonstrates various animation techniques</td>
            </tr>
            <tr>
              <td>
                <a href="/file-upload/">File Upload</a>
              </td>
              <td>
                Demonstrates how to upload a file via ajax with a progress bar
              </td>
            </tr>
            <tr>
              <td>
                <a href="/file-upload-input/">
                  Preserving File Inputs after Form Errors
                </a>
              </td>
              <td>
                Demonstrates how to preserve file inputs after form errors
              </td>
            </tr>
            <tr>
              <td>
                <a href="/dialogs/">
                  Dialogs - Browser
                </a>
              </td>
              <td>Demonstrates the prompt and confirm dialogs</td>
            </tr>
            <tr>
              <td>
                <a href="/modal-uikit/">
                  Dialogs - UIKit
                </a>
              </td>
              <td>Demonstrates modal dialogs using UIKit</td>
            </tr>
            <tr>
              <td>
                <a href="/modal-bootstrap/">
                  Dialogs - Bootstrap
                </a>
              </td>
              <td>Demonstrates modal dialogs using Bootstrap</td>
            </tr>
            <tr>
              <td>
                <a href="/modal-custom/">
                  Dialogs - Custom
                </a>
              </td>
              <td>Demonstrates modal dialogs from scratch</td>
            </tr>
            <tr>
              <td>
                <a href="/tabs-hateoas/">
                  Tabs (Using HATEOAS)
                </a>
              </td>
              <td>
                Demonstrates how to display and select tabs using HATEOAS
                principles
              </td>
            </tr>
            <tr>
              <td>
                <a href="/tabs-javascript/">
                  Tabs (Using JavaScript)
                </a>
              </td>
              <td>
                Demonstrates how to display and select tabs using JavaScript
              </td>
            </tr>
            <tr>
              <td>
                <a href="/keyboard-shortcuts/">
                  Keyboard Shortcuts
                </a>
              </td>
              <td>
                Demonstrates how to create keyboard shortcuts for htmx enabled
                elements
              </td>
            </tr>
            <tr>
              <td>
                <a href="/sortable/">
                  Drag &amp; Drop / Sortable
                </a>
              </td>
              <td>
                Demonstrates how to use htmx with the Sortable.js plugin to
                implement drag-and-drop reordering
              </td>
            </tr>
            <tr>
              <td>
                <a href="/update-other-content/">
                  Updating Other Content
                </a>
              </td>
              <td>
                Demonstrates how to update content beyond just the target
                elements
              </td>
            </tr>
            <tr>
              <td>
                <a href="/confirm/">Confirm</a>
              </td>
              <td>
                Demonstrates how to implement a custom confirmation dialog with
                htmx
              </td>
            </tr>
            <tr>
              <td>
                <a href="/async-auth/">
                  Async Authentication
                </a>
              </td>
              <td>
                Demonstrates how to handle async authentication tokens in htmx
              </td>
            </tr>
          </tbody>
        </table>
      </>
    </Layout>
  );
}

import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};


export default function DialogsUIKit({ path }: TProps) {
  return (
    <Layout>
      <>
        <style>
          @import "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.19.0/css/uikit-core.min.css";
        </style>

        <div style="margin-top:2em;">
          <button 
            id="showButton"
            hx-get={path}
            hx-target="#modals-here" 
            hx-trigger="click"
            class="uk-button uk-button-primary" 
            _="on htmx:afterOnLoad wait 10ms then add .uk-open to #modal"
          >Show Modal Dialog</button>

          <div id="modals-here"></div>
        </div>
      </>
    </Layout>
  )
}

export function Modal() {
  return (
    <div id="modal" class="uk-modal" style="display:block;">
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Modal Dialog</h2>
        <p>This modal dialog was loaded dynamically by HTMX.</p>

        <form _="on submit take .uk-open from #modal">
          <div class="uk-margin">
            <input class="uk-input" placeholder="What is Your Name?" />
          </div>
          <div class="uk-margin">
            <input class="uk-input" placeholder="What is Your Quest?" />
          </div>

          <div class="uk-margin">
            <input class="uk-input" placeholder="What is Your Favorite Color?" />
          </div>

          <button 
            type="button" 
            class="uk-button uk-button-primary" 
            _="on click call alert('submit to server and close dialog.')"
          >Save Changes</button>
          
          <button 
            id="cancelButton"
            type="button" 
            class="uk-button uk-button-default" 
            _="on click take .uk-open from #modal wait 200ms then remove #modal"
          >Close</button>
        </form>
      </div>
    </div>
  )
}
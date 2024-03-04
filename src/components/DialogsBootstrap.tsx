import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};


export default function DialogsBootstrap({ path }: TProps) {
  return (
    <Layout>
      <>
        <style>
          @import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.2/css/bootstrap.min.css";
        </style>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
        </script>

        <div style="margin-top:2em">
          <button 
            hx-get={path}
            hx-target="#modals-here" 
            hx-trigger="click" 
            data-bs-toggle="modal" 
            data-bs-target="#modals-here"
            class="btn btn-primary"
          >Open Modal</button>

          <div 
            id="modals-here"
            class="modal modal-blur fade"
            style="display: none"
            aria-hidden="false"
            tabindex="-1"
          >
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content"></div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export function Modal() {
  return (
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>    
  )
}

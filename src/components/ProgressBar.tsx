import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};


export default function ProgressBar({ path }: TProps) {
  return (
    <Layout>
      <>
        <style>
          {`
          .progress {
            height: 20px;
            margin-bottom: 20px;
            overflow: hidden;
            background-color: #f5f5f5;
            border-radius: 4px;
            box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
            padding: 0;
          }
          .progress-bar {
            float: left;
            width: 0%;
            height: 100%;
            font-size: 12px;
            line-height: 20px;
            color: #fff;
            text-align: center;
            background-color: #337ab7;
            -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
            box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
            -webkit-transition: width .6s ease;
            -o-transition: width .6s ease;
            transition: width .6s ease;
            padding: 0;
          }
          `}
        </style>
        <div hx-target="this" hx-swap="outerHTML">
          <h3>Start Progress</h3>
          <button class="btn" hx-post={path}>
            Start Job
          </button>
        </div>      
      </>
    </Layout>
  )
}

export function StartJob({ path }: TProps) {
  return (
    <div hx-trigger="done" hx-get={path} hx-swap="outerHTML" hx-target="this">
      <h3 role="status" id="pblabel" tabindex="-1">Running</h3>
      <div
        style="padding: 0;"
        hx-get={`${path}/progress`} 
        hx-trigger="every 600ms"
        hx-target="this"
        hx-swap="innerHTML"
      >
        <Progress value={0} />
      </div>
    </div>
  )
}

export function Progress({ value }: { value: number }) {
  return (
    <>
      <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value} aria-labelledby="pblabel">
        <div id="pb" class="progress-bar" style={`width:${value}%`} ></div>
      </div>
    </>
  )
}

export function JobDone({ paths }: { paths: string[] }) {
  return (
    <div hx-trigger="done" hx-get={paths[0]} hx-swap="outerHTML" hx-target="this">
      <h3 role="status" id="pblabel" tabindex="-1">Complete</h3>

      <div
        style="padding: 0;"
        hx-get={paths[1]}
        hx-trigger="none"
        hx-target="this"
        hx-swap="innerHTML"
      >
        <div 
          class="progress" 
          role="progressbar" 
          aria-valuemin="0" 
          aria-valuemax="100" 
          aria-valuenow="122" 
          aria-labelledby="pblabel"
        >
          <div id="pb" class="progress-bar" style="width:122%"></div>
        </div>
      </div>

      <button id="restart-btn" class="btn" hx-post={paths[2]} hx-ext="class-tools" classes="add show:600ms">
        Restart Job
      </button>
    </div>    
  )
}
import Layout from "../layouts/Layout";
import { contents } from "../utils/samples";


type TProps = {
  basePath: string;
  curTab: number;
};


export default function TabsUsingHateOAS({ basePath, curTab }: TProps) {
  return (
    <Layout>
      <>
        <style>
          {`
          #tabs > .tab-list {
            border-bottom: solid 3px #eee;
          } 
          #tabs > .tab-list button.selected {
            background-color: #eee;
          }
          #tabs > .tab-list button {
            border: none;
            display: inline-block;
            padding: 5px 10px;
            cursor: pointer;
            background-color: transparent;
          }
          div {
            padding: 0px;
          }
          #tabs {
            margin-top: 1em;
          }
          `}
        </style>

        <div 
          id="tabs" 
          hx-get={`${basePath}${curTab}`}
          hx-trigger="load delay:100ms" 
          hx-target="#tabs" 
          hx-swap="innerHTML"
        ></div>
      </>
    </Layout>
  )
}

export function Tab({basePath, curTab}: TProps) {
  return (
    <>
      <div class="tab-list" role="tablist">
        {
          [1, 2, 3].map(j => (
            <TabButton basePath={basePath} i={j} selected={curTab === j} />
          ))
        }
      </div>
      <div id="tab-content" role="tabpanel" class="tab-content">{contents[curTab-1]}</div>
    </>
  )
}

function TabButton({basePath, i, selected} : {basePath: string, i: number, selected: boolean}) {
  return selected === false
    ? (
      <button 
        hx-get={`${basePath}${i}`} 
        role="tab" 
        aria-controls="tab-content"
        aria-selected="false" 
      >Tab {i}</button>
    )
    : (
      <button 
        hx-get={`${basePath}${i}`} 
        role="tab" 
        aria-controls="tab-content"
        aria-selected="true" 
        class="selected" 
        autofocus="" 
      >Tab {i}</button>
    )
  ;
}

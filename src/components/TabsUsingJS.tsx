import Layout from "../layouts/Layout";


type TProps = {
  basePath: string;
  curTab: number;
};


export default function TabsUsingJS({ basePath, curTab }: TProps) {
  return (
    <Layout>
      <>
        <style>
          {`
          div {
            padding: 0px;
          }
          #tabs {
            margin-top: 1em;
          }
          #tabs {
            border-bottom: solid 3px #eee;
          }
          #tab-contents {
            padding: 10px;
          }
          #tabs > button {
            border: none;
            display: inline-block;
            padding: 5px 10px;
            cursor: pointer;
            background-color: transparent;
          }
          #tabs > button.selected {
            background-color: #eee;
          }
          p {
            margin: 0.5em 0;
          }
          `}
        </style>

        <div 
          id="tabs" 
          hx-target="#tab-contents" 
          role="tablist"
          hx-on:htmx-after-on-load={`
            let currentTab = document.querySelector("[aria-selected=true]");
            currentTab.setAttribute("aria-selected", "false");
            currentTab.classList.remove("selected");
            let newTab = event.target;
            newTab.setAttribute("aria-selected", "true");
            newTab.classList.add("selected");
          `}
        >
        {
          [1, 2, 3].map(j => (
            <TabButton basePath={basePath} i={j} selected={curTab === j} />
          ))
        }
        </div>

        <div id="tab-contents" role="tabpanel" hx-get={`${basePath}${curTab}`} hx-trigger="load"></div>
      </>
    </Layout>
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

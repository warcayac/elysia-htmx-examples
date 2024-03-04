import Layout from "../layouts/Layout";


type TProps = {
  path: string;
};


export default function LazyLoading({ path }: TProps) {
  return (
    <Layout>
      <>
        <style>
          {`
          .htmx-settling img {
            opacity: 0;
          }
          img {
           transition: opacity 300ms ease-in;
          }
          `}
        </style>
        <div hx-get={path} hx-trigger="load">
          <img alt="Result loading..." class="htmx-indicator" width="150" src="/public/img/bars.svg"/>
        </div>
      </>
    </Layout>
  )
}

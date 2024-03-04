import Layout from "../layouts/Layout";


export default function Animations({ paths }: { paths: string[] }) {
  return (
    <Layout>
      <>
        <ul>
          <li><a href={paths[1]}>Color Throb</a></li>
          <li>Smooth Progress Bar <i>(see: <a href="/progress-bar">Progress Bar</a>)</i></li>
          <li><a href={paths[3]}>Fade Out On Swap</a></li>
          <li><a href={paths[5]}>Fade In On Addition</a></li>
          <li><a href={paths[7]}>Request In Flight Animation</a></li>
          <li><a href={paths[9]}>Using the htmx class-tools Extension</a></li>
          <li><a href={paths[10]}>Using the View Transition API</a></li>
        </ul>
      </>
    </Layout>
  )
}

export function ColorThrob({ path }: { path: string }) {
  return (
    <Layout>
      <>
        <style>
          {`
          .smooth {
            transition: all 1s ease-in;
          }
          `}
        </style>
        <Colors path={path}/>
      </>
    </Layout>
  )
}

export function Colors({ path } : { path: string }) {
  // const randomColor = () => {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  const colors = ['orange', 'blue', 'green', 'red', 'purple', 'yellow', 'pink', 'brown'];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div 
      id="color-demo" 
      class="smooth" 
      style={`color:${randomColor()};`}
      hx-get={path} 
      hx-swap="outerHTML" 
      hx-trigger="every 1s"
    >
      Color Swap Demo
    </div>
  )
}

/**
La función de este componente es hacer que el botón desaparezca con una animación de fade out,
esta animación se aplica cuando el botón es reemplazado por el contenido que se obtiene de la petición
DELETE, el cual es un string vacío, y porque en el estilo aplicado al botón mediante la clase "fade-me-out",
se ha especificado la clase "htmx-swapping"
 */
export function FadeOutOnSwap({ path } : { path: string }) {
  return (
    <Layout>
      <>
        <style>
          {`
          .fade-me-out.htmx-swapping {
            opacity: 0;
            transition: opacity 1s ease-out;
          }
          `}
        </style>
        <button 
          class="fade-me-out"
          hx-delete={path}
          hx-swap="outerHTML swap:1s"
        >
          Fade Me Out
        </button>
      </>
    </Layout>
  )
}

/** 
Este componente es similar al componente FadeOutOnSwap, pero en lugar de desaparecer el botón, 
se hace que aparezca con una animación de fade in,
*/
export function FadeInOnAddition({ path } : { path: string }) {
  return (
    <Layout>
      <>
        <style>
          {`
          #fade-me-in.htmx-added {
            opacity: 0;
          }
          #fade-me-in {
            opacity: 1;
            transition: opacity 1s ease-out;
          }
          `}
        </style>
        <FadeInButton path={path}/>
      </>
    </Layout>
  )
}

export function FadeInButton({ path } : { path: string }) {
  return (
    <button 
      id="fade-me-in"
      hx-post={path}
      hx-swap="outerHTML settle:1s"
    >
      Fade Me In
    </button>
  )
}

export function RequestInFlightAnimation({ path } : { path: string }) {
  return (
    <Layout>
      <>
        <style>
          {`
          form {
            margin-top: 1em;
          }
          input {
            margin-left: 1em;
          }
          form.htmx-request {
            opacity: .5;
            transition: opacity 300ms linear;
          }
          `}
        </style>
        <form hx-post={path} hx-swap="outerHTML">
          <label>Name:</label><input name="name"/><br/>
          <button>Submit</button>
        </form>
      </>
    </Layout>
  )
}


export function UsingClassToolsExtension() {
  return (
    <Layout>
      <>
        <style>
          {`
          .demo.faded {
            opacity:.3;
          }
          .demo {
            opacity:1;
            transition: opacity ease-in 900ms;
          }
          `}
        </style>
        <div class="demo" hx-ext="class-tools" classes="toggle faded:1s">Toggle Demo</div>
      </>
    </Layout>
  )
}

export function UsingViewTransitionAPI({ path } : { path: string }) {
  return (
    <Layout>
      <>
        <style>
          {`
          @keyframes fade-in {
            from { opacity: 0; }
          }

          @keyframes fade-out {
            to { opacity: 0; }
          }

          @keyframes slide-from-right {
            from { transform: translateX(90px); }
          }

          @keyframes slide-to-left {
            to { transform: translateX(-90px); }
          }

          .slide-it {
            view-transition-name: slide-it;
          }

          ::view-transition-old(slide-it) {
            animation: 180ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
            600ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
          }
          ::view-transition-new(slide-it) {
            animation: 420ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
            600ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
          }
         `}
        </style>
        <div class="slide-it">
          <OriginalContent path={path}/>
        </div>
      </>
    </Layout>
  )
}

export function NewContent({ path } : { path: string }) {
  return (
    <>
      <h1>New Content</h1>
      <button hx-get={path} hx-swap="innerHTML transition:true" hx-target="closest div">
        Restore It!
      </button>
    </>
  )
}

export function OriginalContent({ path } : { path: string }) {
  return (
    <>
      <h1>Initial Content</h1>
      <button hx-get={path} hx-swap="innerHTML transition:true" hx-target="closest div">
        Swap It!
      </button>
    </>
  )
}
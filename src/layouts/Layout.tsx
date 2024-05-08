export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
          <script src="https://unpkg.com/htmx.org/dist/ext/class-tools.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
          <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
          
          <link rel="stylesheet" href="/public/style.css" />

          <title>HTMX examples</title>
        </head>

        <body class="c content">
          {children}        
        </body>
      </html>
    </>
  );
}


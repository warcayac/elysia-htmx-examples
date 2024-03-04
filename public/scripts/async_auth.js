// auth is a promise returned by our authentication system

// await the auth token and store it somewhere
let authToken = null;
auth.then((token) => {
  authToken = token
})

// gate htmx requests on the auth token
htmx.on("htmx:confirm", (e)=> {
  // if there is no auth token
  if(authToken == null) {
    // stop the regular request from being issued
    e.preventDefault() 
    // only issue it once the auth promise has resolved
    auth.then(() => e.detail.issueRequest()) 
  }
})

// add the auth token to the request as a header
htmx.on("htmx:configRequest", (e)=> {
  e.detail.headers["AUTH"] = authToken
})

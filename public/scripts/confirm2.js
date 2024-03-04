document.addEventListener("htmx:confirm", function(e) {
  e.preventDefault()
  Swal
    .fire({
      title: "Proceed?",
      text: `I ask you... ${e.detail.question}`
    })
    .then(function(result) {
      if(result.isConfirmed) e.detail.issueRequest(true) // use true to skip window.confirm
    })
})

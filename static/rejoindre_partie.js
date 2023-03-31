document.getElementById("bouton_rejoindre").addEventListener("click", () => {
  info = {
    id_partie:document.getElementById("input_id_partie").value
  }
  fetch('/rejoindre',{
      method:'POST',
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(info)
    })
    .then(
      window.location.replace('./yams.html')
      )
    
})
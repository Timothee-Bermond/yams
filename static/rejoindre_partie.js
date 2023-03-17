document.getElementById("bouton_rejoindre").addEventListener("click", () => {
    fetch('/rejoindre',{
        method:'POST',
        credentials: 'include',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(document.getElementById("input_id_partie").textContent)
      })
      .then(
        window.location.replace('./yams.html')
        )
    
  })
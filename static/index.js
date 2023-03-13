document.getElementById('btn_regles').addEventListener('click',() =>{
    document.getElementById('btn_regles').classList.add('hide');
    document.getElementById('btn_retour').classList.remove('hide');
    document.getElementById('regles').classList.remove('hide');
    document.getElementById('regles').classList.add('apparition');
    document.getElementById('regles').classList.remove('disparition');
})

document.getElementById('btn_retour').addEventListener('click',() =>{
    document.getElementById('btn_retour').classList.add('hide');
    document.getElementById('btn_regles').classList.remove('hide');
    document.getElementById('regles').classList.remove('apparition');
    document.getElementById('regles').classList.add('disparition');
    setTimeout(() => {
        document.getElementById('regles').classList.add('hide');
  },2800)
})

let bouton_add1 = document.getElementById("bouton_add1");
let bouton_add2 = document.getElementById("bouton_add2");
let bouton_add3 = document.getElementById("bouton_add3");
let bouton_supp2 = document.getElementById("bouton_supp2");
let bouton_supp3 = document.getElementById("bouton_supp3");
let bouton_supp4 = document.getElementById("bouton_supp4");
let div_choix2 = document.getElementById("div_choix2");
let div_choix3 = document.getElementById("div_choix3");
let div_choix4 = document.getElementById("div_choix4");
let nbr_players = 1;

bouton_add1.addEventListener("click", () => {
    div_choix2.style.display = "flex";
    bouton_add1.style.display = "none";
    nbr_players = 2;
})

bouton_add2.addEventListener("click", () => {
    div_choix3.style.display = "flex";
    bouton_add2.style.display = "none";
    bouton_supp2.style.display = "none";
    nbr_players = 3;
  })

  bouton_supp2.addEventListener("click", () => {
    div_choix2.style.display = "none";
    bouton_add1.style.display = "block";
    nbr_players = 1;
  })

bouton_add3.addEventListener("click", () => {
  div_choix4.style.display = "flex";
  bouton_add3.style.display = "none";
  bouton_supp3.style.display = "none";
  nbr_players = 4;
})

bouton_supp3.addEventListener("click", () => {
  div_choix3.style.display = "none";
  bouton_add2.style.display = "block";
  bouton_supp2.style.display = "block";
  nbr_players = 2;
})

bouton_supp4.addEventListener("click", () => {
  div_choix4.style.display = "none";
  bouton_add3.style.display = "block";
  bouton_supp3.style.display = "block";
  nbr_players = 3;
})






document.getElementById("bouton_suivant").addEventListener("click", () => {
    players = {
      nbrPlayers: nbr_players,
      player1: document.getElementById('text_choix1').value,
      player2: document.getElementById('text_choix2').value,
      player3: document.getElementById('text_choix3').value,
      player4: document.getElementById('text_choix4').value
    };
    fetch('/create',{
      method:'POST',
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(players)
    })
    .then(
      window.location.replace('./yams.html')
      )
})

function getCookie(name) {
    var cookie, c;
    cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        c = cookies[i].split('=');
        if (c[0] == name) {
            return c[1];
        }
    }
    return "";
}
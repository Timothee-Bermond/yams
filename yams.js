bonus_j1 =0
bonus_j2 = 0
bonus_j3 = 0
bonus_j4 = 0

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
    let text_choix1 = document.getElementById('text_choix1').value
    let text_choix2 = document.getElementById('text_choix2').value
    let text_choix3 = document.getElementById('text_choix3').value
    let text_choix4 = document.getElementById('text_choix4').value
    if(nbr_players == 1){
        if (text_choix1 != "") {
            document.getElementById('nom_j1').textContent = text_choix1
            document.getElementById('joueur1').classList.remove('hide')
            document.getElementById('btn_new_game').classList.remove('hide')
            document.getElementById('accueil').style.display = 'none'
          } else {
            alert("Entrez le nom du joueur")
          }
    }
    if (nbr_players == 2){
      if (text_choix1 != "" && text_choix2 != "") {
        document.getElementById('nom_j1').textContent = text_choix1
        document.getElementById('nom_j2').textContent = text_choix2
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('joueur2').classList.remove('hide')
        document.getElementById('btn_new_game').classList.remove('hide')
        document.getElementById('accueil').style.display = 'none'
      } else {
        alert("Entrez le nom des joueurs")
      }
  
    } else if (nbr_players == 3){
      
      if (text_choix1 != "" && text_choix2 != "" && text_choix3 != "") {
        document.getElementById('nom_j1').textContent = text_choix1
        document.getElementById('nom_j2').textContent = text_choix2
        document.getElementById('nom_j3').textContent = text_choix3
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('joueur2').classList.remove('hide')
        document.getElementById('joueur3').classList.remove('hide')
        document.getElementById('btn_new_game').classList.remove('hide')
        document.getElementById('accueil').style.display = 'none'
      } else {
        alert("Entrez le nom des joueurs")
      }
  
    } else if (nbr_players == 4){
      if (text_choix1 != "" && text_choix2 != "" && text_choix3 != "" && text_choix4 != "") {
        document.getElementById('nom_j1').textContent = text_choix1
        document.getElementById('nom_j2').textContent = text_choix2
        document.getElementById('nom_j3').textContent = text_choix3
        document.getElementById('nom_j4').textContent = text_choix4
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('joueur2').classList.remove('hide')
        document.getElementById('joueur3').classList.remove('hide')
        document.getElementById('joueur4').classList.remove('hide')
        document.getElementById('btn_new_game').classList.remove('hide')
        document.getElementById('accueil').style.display = 'none'
      } else {
        alert("Entrez le nom des joueurs")
      }
    }
      
  })
  

/* Joueur 1 */
bonus_j1 = 0
pts_fullj1 = 0
pts_psj1 = 0
pts_gsj1 = 0
pts_yamsj1 = 0
list_comb=['brelan','carre','full','ps','gs','yams','chance']
list_total = ['nombre1','nombre2','nombre3','nombre4','nombre5','nombre6','brelan','carre','full','ps','gs','yams','chance']


for (const element of list_comb) {
    document.getElementById(element+'j1').addEventListener('dblclick', () =>{
        document.getElementById('txt_'+element+'j1').classList.add('txt_barre');
        document.getElementById(element+'j1').classList.add('hide');
        document.getElementById('cancel_'+element+'j1').classList.remove('hide');
    })
    
    document.getElementById('cancel_'+element+'j1').addEventListener('click', ()=>{
        document.getElementById('txt_'+element+'j1').classList.remove('txt_barre');
        document.getElementById(element+'j1').classList.remove('hide');
        document.getElementById('cancel_'+element+'j1').classList.add('hide');
    })
}


for(const combi of list_total){
    document.getElementById(combi+'j1').onchange = function(){    
        list_result=[document.getElementById('nombre1j1').value, document.getElementById('nombre2j1').value, document.getElementById('nombre3j1').value, document.getElementById('nombre4j1').value, document.getElementById('nombre5j1').value, document.getElementById('nombre6j1').value]
        sommej1 = 0

        for (const element of list_result){
            if(element!=""){
                sommej1 += parseInt(element)
    
            }
        }
        if(sommej1 >= 63 && bonus_j1 == 0){
            sommej1 += 35
            bonus_j1 = 1
        }
        document.getElementById('pts_sommej1').textContent = sommej1

        if(document.getElementById('fullj1').checked){
            pts_fullj1 = 25
        } else {
            pts_fullj1 = 0
        }

        if(document.getElementById('psj1').checked){
            pts_psj1 = 30
        } else {
            pts_psj1 = 0
        }

        if(document.getElementById('gsj1').checked){
            pts_gsj1 = 40
        } else {
            pts_gsj1 = 0
        }

        if(document.getElementById('yamsj1').checked){
            pts_yamsj1 = 50
        } else {
            pts_yamsj1 = 0
        }
        totalj1 = sommej1 + pts_fullj1 + pts_psj1 + pts_gsj1 + pts_yamsj1 

        list_pts = [document.getElementById('brelanj1').value, document.getElementById('carrej1').value, document.getElementById('chancej1').value]
        for(const combinaison of list_pts){
            if(combinaison!=""){
                totalj1 += parseInt(combinaison)
            }
        }
        document.getElementById('pts_totalj1').textContent = totalj1
    }
}


/* Joueur 2 */

bonus_j2 = 0
pts_fullj2 = 0
pts_psj2 = 0
pts_gsj2 = 0
pts_yamsj2 = 0
list_comb=['brelan','carre','full','ps','gs','yams','chance']
list_total = ['nombre1','nombre2','nombre3','nombre4','nombre5','nombre6','brelan','carre','full','ps','gs','yams','chance']


for (const element of list_comb) {
    document.getElementById(element+'j2').addEventListener('dblclick', () =>{
        document.getElementById('txt_'+element+'j2').classList.add('txt_barre');
        document.getElementById(element+'j2').classList.add('hide');
        document.getElementById('cancel_'+element+'j2').classList.remove('hide');
    })
    
    document.getElementById('cancel_'+element+'j2').addEventListener('click', ()=>{
        document.getElementById('txt_'+element+'j2').classList.remove('txt_barre');
        document.getElementById(element+'j2').classList.remove('hide');
        document.getElementById('cancel_'+element+'j2').classList.add('hide');
    })
}


for(const combi of list_total){
    document.getElementById(combi+'j2').onchange = function(){    
        list_result=[document.getElementById('nombre1j2').value, document.getElementById('nombre2j2').value, document.getElementById('nombre3j2').value, document.getElementById('nombre4j2').value, document.getElementById('nombre5j2').value, document.getElementById('nombre6j2').value]
        sommej2 = 0

        for (const element of list_result){
            if(element!=""){
                sommej2 += parseInt(element)
    
            }
        }
        if(sommej2 >= 63 && bonus_j2 == 0){
            sommej2 += 35
            bonus_j2 = 1
        }
        document.getElementById('pts_sommej2').textContent = sommej2

        if(document.getElementById('fullj2').checked){
            pts_fullj2 = 25
        } else {
            pts_fullj2 = 0
        }

        if(document.getElementById('psj2').checked){
            pts_psj2 = 30
        } else {
            pts_psj2 = 0
        }

        if(document.getElementById('gsj2').checked){
            pts_gsj2 = 40
        } else {
            pts_gsj2 = 0
        }

        if(document.getElementById('yamsj2').checked){
            pts_yamsj2 = 50
        } else {
            pts_yamsj2 = 0
        }
        totalj2 = sommej2 + pts_fullj2 + pts_psj2 + pts_gsj2 + pts_yamsj2 

        list_pts = [document.getElementById('brelanj2').value, document.getElementById('carrej2').value, document.getElementById('chancej2').value]
        for(const combinaison of list_pts){
            if(combinaison!=""){
                totalj2 += parseInt(combinaison)
            }
        }
        document.getElementById('pts_totalj2').textContent = totalj2
    }
}

/* Joueur 3 */

bonus_j3 = 0
pts_fullj3 = 0
pts_psj3 = 0
pts_gsj3 = 0
pts_yamsj3 = 0
list_comb=['brelan','carre','full','ps','gs','yams','chance']
list_total = ['nombre1','nombre2','nombre3','nombre4','nombre5','nombre6','brelan','carre','full','ps','gs','yams','chance']


for (const element of list_comb) {
    document.getElementById(element+'j3').addEventListener('dblclick', () =>{
        document.getElementById('txt_'+element+'j3').classList.add('txt_barre');
        document.getElementById(element+'j3').classList.add('hide');
        document.getElementById('cancel_'+element+'j3').classList.remove('hide');
    })
    
    document.getElementById('cancel_'+element+'j3').addEventListener('click', ()=>{
        document.getElementById('txt_'+element+'j3').classList.remove('txt_barre');
        document.getElementById(element+'j3').classList.remove('hide');
        document.getElementById('cancel_'+element+'j3').classList.add('hide');
    })
}


for(const combi of list_total){
    document.getElementById(combi+'j3').onchange = function(){    
        list_result=[document.getElementById('nombre1j3').value, document.getElementById('nombre2j3').value, document.getElementById('nombre3j3').value, document.getElementById('nombre4j3').value, document.getElementById('nombre5j3').value, document.getElementById('nombre6j3').value]
        sommej3 = 0

        for (const element of list_result){
            if(element!=""){
                sommej3 += parseInt(element)
    
            }
        }
        if(sommej3 >= 63 && bonus_j3 == 0){
            sommej3 += 35
            bonus_j3 = 1
        }
        document.getElementById('pts_sommej3').textContent = sommej3

        if(document.getElementById('fullj3').checked){
            pts_fullj3 = 25
        } else {
            pts_fullj3 = 0
        }

        if(document.getElementById('psj3').checked){
            pts_psj3 = 30
        } else {
            pts_psj3 = 0
        }

        if(document.getElementById('gsj3').checked){
            pts_gsj3 = 40
        } else {
            pts_gsj3 = 0
        }

        if(document.getElementById('yamsj3').checked){
            pts_yamsj3 = 50
        } else {
            pts_yamsj3 = 0
        }
        totalj3 = sommej3 + pts_fullj3 + pts_psj3 + pts_gsj3 + pts_yamsj3 

        list_pts = [document.getElementById('brelanj3').value, document.getElementById('carrej3').value, document.getElementById('chancej3').value]
        for(const combinaison of list_pts){
            if(combinaison!=""){
                totalj3 += parseInt(combinaison)
            }
        }
        document.getElementById('pts_totalj3').textContent = totalj3
    }
}

/* Joueur 4 */

bonus_j4 = 0
pts_fullj4 = 0
pts_psj4 = 0
pts_gsj4 = 0
pts_yamsj4 = 0
list_comb=['brelan','carre','full','ps','gs','yams','chance']
list_total = ['nombre1','nombre2','nombre3','nombre4','nombre5','nombre6','brelan','carre','full','ps','gs','yams','chance']


for (const element of list_comb) {
    document.getElementById(element+'j4').addEventListener('dblclick', () =>{
        document.getElementById('txt_'+element+'j4').classList.add('txt_barre');
        document.getElementById(element+'j4').classList.add('hide');
        document.getElementById('cancel_'+element+'j4').classList.remove('hide');
    })
    
    document.getElementById('cancel_'+element+'j4').addEventListener('click', ()=>{
        document.getElementById('txt_'+element+'j4').classList.remove('txt_barre');
        document.getElementById(element+'j4').classList.remove('hide');
        document.getElementById('cancel_'+element+'j4').classList.add('hide');
    })
}


for(const combi of list_total){
    document.getElementById(combi+'j4').onchange = function(){    
        list_result=[document.getElementById('nombre1j4').value, document.getElementById('nombre2j4').value, document.getElementById('nombre3j4').value, document.getElementById('nombre4j4').value, document.getElementById('nombre5j4').value, document.getElementById('nombre6j4').value]
        sommej4 = 0

        for (const element of list_result){
            if(element!=""){
                sommej4 += parseInt(element)
    
            }
        }
        if(sommej4 >= 63 && bonus_j4 == 0){
            sommej4 += 35
            bonus_j4 = 1
        }
        document.getElementById('pts_sommej4').textContent = sommej4

        if(document.getElementById('fullj4').checked){
            pts_fullj4 = 25
        } else {
            pts_fullj4 = 0
        }

        if(document.getElementById('psj4').checked){
            pts_psj4 = 30
        } else {
            pts_psj4 = 0
        }

        if(document.getElementById('gsj4').checked){
            pts_gsj4 = 40
        } else {
            pts_gsj4 = 0
        }

        if(document.getElementById('yamsj4').checked){
            pts_yamsj4 = 50
        } else {
            pts_yamsj4 = 0
        }
        totalj4 = sommej4 + pts_fullj4 + pts_psj4 + pts_gsj4 + pts_yamsj4 

        list_pts = [document.getElementById('brelanj4').value, document.getElementById('carrej4').value, document.getElementById('chancej4').value]
        for(const combinaison of list_pts){
            if(combinaison!=""){
                totalj4 += parseInt(combinaison)
            }
        }
        document.getElementById('pts_totalj4').textContent = totalj4
    }
}

document.getElementById('btn_new_game').addEventListener("click", () => {
    if (window.confirm("Nouvelle partie?")){
        document.location.reload()
    }
})
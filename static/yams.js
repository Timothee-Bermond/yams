fetch('/initialisation')
.then(response => response.json())
.then(data => {
    if(data.nombreJoueurs == 1){
        document.getElementById('nom_j1').textContent = data.nameJ1.split('"')[1]
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('btn_new_game').classList.remove('hide')
    }
    else if(data.nombreJoueurs == 2){
        document.getElementById('nom_j1').textContent = data.nameJ1.split('"')[1]
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('nom_j2').textContent = data.nameJ2.split('"')[1]
        document.getElementById('joueur2').classList.remove('hide')
        document.getElementById('btn_new_game').classList.remove('hide')
    }
    else if(data.nombreJoueurs == 3){
        document.getElementById('nom_j1').textContent = data.nameJ1.split('"')[1]
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('nom_j2').textContent = data.nameJ2.split('"')[1]
        document.getElementById('joueur2').classList.remove('hide')
        document.getElementById('nom_j3').textContent = data.nameJ3.split('"')[1]
        document.getElementById('joueur3').classList.remove('hide')
        document.getElementById('btn_new_game').classList.remove('hide')
    }
    else if(data.nombreJoueurs == 4){
        document.getElementById('nom_j1').textContent = data.nameJ1.split('"')[1]
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('nom_j2').textContent = data.nameJ2.split('"')[1]
        document.getElementById('joueur2').classList.remove('hide')
        document.getElementById('nom_j3').textContent = data.nameJ3.split('"')[1]
        document.getElementById('joueur3').classList.remove('hide')
        document.getElementById('nom_j4').textContent = data.nameJ4.split('"')[1]
        document.getElementById('joueur4').classList.remove('hide')
        document.getElementById('btn_new_game').classList.remove('hide')
    }
        
})

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

list_nombre=['nombre1','nombre2','nombre3','nombre4','nombre5','nombre6','brelan','carre','chance']
list_comb=['brelan','carre','full','ps','gs','yams','chance']
list_total = ['nombre1','nombre2','nombre3','nombre4','nombre5','nombre6','brelan','carre','full','ps','gs','yams','chance','yams2','yams3']

/* Joueur 1 */

pts_fullj1 = 0
pts_psj1 = 0
pts_gsj1 = 0
pts_yamsj1 = 0
pts_yams2j1 = 0
pts_yams3j1 = 0


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
            document.getElementById('yams2j1').classList.remove('hide')
            if (document.getElementById('yams2j1').checked){
                pts_yams2j1 = 100
                document.getElementById('yams3j1').classList.remove('hide')
                if (document.getElementById('yams3j1').checked){
                    pts_yams3j1 = 100
                } else {
                    pts_yams3j1 = 0
                }
            } else {
                pts_yams2j1 = 0
                document.getElementById('yams3j1').classList.add('hide')
            }
        } else {
            pts_yamsj1 = 0
            document.getElementById('yams2j1').classList.add('hide')
        }

        pts_J1 = {
            nombre1J1 : document.getElementById('nombre1j1').value,
            nombre2J1 : document.getElementById('nombre2j1').value,
            nombre3J1 : document.getElementById('nombre3j1').value,
            nombre4J1 : document.getElementById('nombre4j1').value,
            nombre5J1 : document.getElementById('nombre5j1').value,
            nombre6J1 : document.getElementById('nombre6j1').value,
            brelanJ1 : document.getElementById('brelanj1').value,
            carreJ1 : document.getElementById('carrej1').value,
            fullJ1 : pts_fullj1,
            psJ1 : pts_psj1,
            gsJ1 : pts_gsj1,
            yamsJ1 : pts_yamsj1,
            yams2J1 : pts_yams2j1,
            yams3J1 : pts_yams3j1,
            chanceJ1 : document.getElementById('chancej1').value,
        }

        for (const pts in pts_J1){
            if(pts_J1[pts] == ''){
                pts_J1[pts] = 0
            } else if(typeof(pts_J1[pts]) == 'string') {
                pts_J1[pts] = parseInt(pts_J1[pts])
            }
        }
        console.log(pts_J1)
        fetch('/changeJ1',{
                method:'POST',
                headers:{
                  'Content-Type': 'application/json',
                  'Players':JSON.stringify(pts_J1)
                },
            }).then(response => response.json())
            .then(data => {
                document.getElementById('pts_sommej1').textContent = data.sommeJ1
                document.getElementById('pts_totalj1').textContent = data.totalJ1
            })
    }
}


/* Joueur 2 */

pts_fullj2 = 0
pts_psj2 = 0
pts_gsj2 = 0
pts_yamsj2 = 0
pts_yams2j2 = 0
pts_yams3j2 = 0

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
            document.getElementById('yams2j2').classList.remove('hide')
            if (document.getElementById('yams2j2').checked){
                pts_yams2j2 = 100
                document.getElementById('yams3j2').classList.remove('hide')
                if (document.getElementById('yams3j2').checked){
                    pts_yams3j2 = 100
                } else {
                    pts_yams3j2 = 0
                }
            } else {
                pts_yams2j2 = 0
                document.getElementById('yams3j2').classList.add('hide')
            }
        } else {
            pts_yamsj2 = 0
            document.getElementById('yams2j2').classList.add('hide')
        }
        
        pts_J2 = {
            nombre1J2 : document.getElementById('nombre1j2').value,
            nombre2J2 : document.getElementById('nombre2j2').value,
            nombre3J2 : document.getElementById('nombre3j2').value,
            nombre4J2 : document.getElementById('nombre4j2').value,
            nombre5J2 : document.getElementById('nombre5j2').value,
            nombre6J2 : document.getElementById('nombre6j2').value,
            brelanJ2 : document.getElementById('brelanj2').value,
            carreJ2 : document.getElementById('carrej2').value,
            fullJ2 : pts_fullj2,
            psJ2 : pts_psj2,
            gsJ2 : pts_gsj2,
            yamsJ2 : pts_yamsj2,
            yams2J2 : pts_yams2j2,
            yams3J2 : pts_yams3j2,
            chanceJ2 : document.getElementById('chancej2').value,
        }

        for (const pts in pts_J2){
            if(pts_J2[pts] == ''){
                pts_J2[pts] = 0
            } else if(typeof(pts_J2[pts]) == 'string') {
                pts_J2[pts] = parseInt(pts_J2[pts])
            }
        }
        fetch('/changeJ2',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
              'Players':JSON.stringify(pts_J2)
            },
        }).then(response => response.json())
        .then(data => {
            document.getElementById('pts_sommej2').textContent = data.sommeJ2
            document.getElementById('pts_totalj2').textContent = data.totalJ2
        })
    }
}

/* Joueur 3 */


pts_fullj3 = 0
pts_psj3 = 0
pts_gsj3 = 0
pts_yamsj3 = 0
pts_yams2j3 = 0
pts_yams3j3 = 0

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
            document.getElementById('yams2j3').classList.remove('hide')
            if (document.getElementById('yams2j3').checked){
                pts_yams2j3 = 100
                document.getElementById('yams3j3').classList.remove('hide')
                if (document.getElementById('yams3j3').checked){
                    pts_yams3j3 = 100
                } else {
                    pts_yams3j3 = 0
                }
            } else {
                pts_yams2j3 = 0
                document.getElementById('yams3j3').classList.add('hide')
            }
        } else {
            pts_yamsj3 = 0
            document.getElementById('yams2j3').classList.add('hide')
        }
        
        pts_J3 = {
            nombre1J3 : document.getElementById('nombre1j3').value,
            nombre2J3 : document.getElementById('nombre2j3').value,
            nombre3J3 : document.getElementById('nombre3j3').value,
            nombre4J3 : document.getElementById('nombre4j3').value,
            nombre5J3 : document.getElementById('nombre5j3').value,
            nombre6J3 : document.getElementById('nombre6j3').value,
            brelanJ3 : document.getElementById('brelanj3').value,
            carreJ3 : document.getElementById('carrej3').value,
            fullJ3 : pts_fullj3,
            psJ3 : pts_psj3,
            gsJ3 : pts_gsj3,
            yamsJ3 : pts_yamsj3,
            yams2J3 : pts_yams2j3,
            yams3J3 : pts_yams3j3,
            chanceJ3 : document.getElementById('chancej3').value,
        }

        for (const pts in pts_J3){
            if(pts_J3[pts] == ''){
                pts_J3[pts] = 0
            } else if(typeof(pts_J3[pts]) == 'string') {
                pts_J3[pts] = parseInt(pts_J3[pts])
            }
        }
        fetch('/changeJ3',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
              'Players':JSON.stringify(pts_J3)
            },
        }).then(response => response.json())
        .then(data => {
            document.getElementById('pts_sommej3').textContent = data.sommeJ3
            document.getElementById('pts_totalj3').textContent = data.totalJ3
        })
    }
}

/* Joueur 4 */

pts_fullj4 = 0
pts_psj4 = 0
pts_gsj4 = 0
pts_yamsj4 = 0
pts_yams2j4 = 0
pts_yams3j4 = 0

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
            document.getElementById('yams2j4').classList.remove('hide')
            if (document.getElementById('yams2j4').checked){
                pts_yams2j4 = 100
                document.getElementById('yams3j4').classList.remove('hide')
                if (document.getElementById('yams3j4').checked){
                    pts_yams3j4 = 100
                } else {
                    pts_yams3j4 = 0
                }
            } else {
                pts_yams2j4 = 0
                document.getElementById('yams3j4').classList.add('hide')
            }
        } else {
            pts_yamsj4 = 0
            document.getElementById('yams2j4').classList.add('hide')
        }
        
        pts_J4 = {
            nombre1J4 : document.getElementById('nombre1j4').value,
            nombre2J4 : document.getElementById('nombre2j4').value,
            nombre3J4 : document.getElementById('nombre3j4').value,
            nombre4J4 : document.getElementById('nombre4j4').value,
            nombre5J4 : document.getElementById('nombre5j4').value,
            nombre6J4 : document.getElementById('nombre6j4').value,
            brelanJ4 : document.getElementById('brelanj4').value,
            carreJ4 : document.getElementById('carrej4').value,
            fullJ4 : pts_fullj4,
            psJ4 : pts_psj4,
            gsJ4 : pts_gsj4,
            yamsJ4 : pts_yamsj4,
            yams2J4 : pts_yams2j4,
            yams3J4 : pts_yams3j4,
            chanceJ4 : document.getElementById('chancej4').value,
        }

        for (const pts in pts_J4){
            if(pts_J4[pts] == ''){
                pts_J4[pts] = 0
            } else if(typeof(pts_J4[pts]) == 'string') {
                pts_J4[pts] = parseInt(pts_J4[pts])
            }
        }
        fetch('/changeJ4',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
              'Players':JSON.stringify(pts_J4)
            },
        }).then(response => response.json())
        .then(data => {
            document.getElementById('pts_sommej4').textContent = data.sommeJ4
            document.getElementById('pts_totalj4').textContent = data.totalJ4
        })
    }
}

document.getElementById('btn_new_game').addEventListener("click", () => {
    if (window.confirm("Nouvelle partie?")){
        document.location.replace('./index.html')
    }
})
var id_partie = null

$(function () {
    const socket = io();
    $("input[type=text][name=score]").change(function () {
        reponse = {
            id_partie: id_partie,
            id: this.id,
            value: this.value
        }
        socket.emit("score", reponse)
    })

    $("input[type=checkbox][name=score]").change(function () {
        if (this.checked){
            reponse = {
                id_partie: id_partie,
                id: this.id,
                value: this.value
            }
        } else {
            reponse = {
                id_partie: id_partie,
                id: this.id,
                value: 0
            }
        }
        
        socket.emit("score", reponse)
    })

    socket.on("updateScore", function (data) {
        
        for (let key in data) {
            if (!(key == 'nombreJoueurs') && !(key.includes('name'))){
                if ( !(data[key] === null) && (document.getElementById(key).type == 'text') ) {
                    document.getElementById(key).value = data[key]
                } else if ( !(data[key] === null) && (document.getElementById(key).type == 'checkbox') ) {
                    if (data[key] == 0) {
                        document.getElementById(key).checked = false
                    } else {
                        document.getElementById(key).checked = true
                    }
                } else if ( !(data[key] === null) && (document.getElementById(key).type == null) ) {
                    document.getElementById(key).textContent = data[key]
                }
            }
            
        }
    })

    $("input[name=score]").dblclick(function () {
        socket.emit("barre", this.id)
    })

    socket.on("updateBarre", function (data) {
        for(let key in data){
            if(data[key] == 'barre'){
                document.getElementById('txt_'+key).classList.add('txt_barre');
                document.getElementById(key).classList.add('hide');
                document.getElementById('cancel_'+key).classList.remove('hide');
            } else if ( !(data[key] === null) && (document.getElementById(key).type == null) ) {
                document.getElementById(key).textContent = data[key]
            }
        }
        
    })

    $("img[name=img_indic]").click(function () {
        socket.emit("remet", this.id.split('_')[1])
    })

    socket.on("updateRemet", function(data){
        document.getElementById('txt_'+data).classList.remove('txt_barre');
        document.getElementById(data).classList.remove('hide');
        document.getElementById('cancel_'+data).classList.add('hide');
        document.getElementById(data).checked = false
    })
    
})

fetch('/initialisation')
.then(response => response.json())
.then(data => {
    console.log(data)
    id_partie = data.id
    document.getElementById('id_partie').textContent = 'Id de la partie : ' + data.id
    if(data.nombreJoueurs == 1){
        document.getElementById('nom_j1').textContent = data.nameJ1
        document.getElementById('joueur1').classList.remove('hide')
    }
    else if(data.nombreJoueurs == 2){
        document.getElementById('nom_j1').textContent = data.nameJ1
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('nom_j2').textContent = data.nameJ2
        document.getElementById('joueur2').classList.remove('hide')
    }
    else if(data.nombreJoueurs == 3){
        document.getElementById('nom_j1').textContent = data.nameJ1
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('nom_j2').textContent = data.nameJ2
        document.getElementById('joueur2').classList.remove('hide')
        document.getElementById('nom_j3').textContent = data.nameJ3
        document.getElementById('joueur3').classList.remove('hide')
    }
    else if(data.nombreJoueurs == 4){
        document.getElementById('nom_j1').textContent = data.nameJ1
        document.getElementById('joueur1').classList.remove('hide')
        document.getElementById('nom_j2').textContent = data.nameJ2
        document.getElementById('joueur2').classList.remove('hide')
        document.getElementById('nom_j3').textContent = data.nameJ3
        document.getElementById('joueur3').classList.remove('hide')
        document.getElementById('nom_j4').textContent = data.nameJ4
        document.getElementById('joueur4').classList.remove('hide')
    }
        
})


/* Bouton nouvelle partie */

document.getElementById('btn_new_game').addEventListener("click", () => {
    if (window.confirm("Nouvelle partie?")){
        document.location.replace('./index.html')
    }
})
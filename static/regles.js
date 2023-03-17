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
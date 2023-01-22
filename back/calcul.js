function somme(nombre1, nombre2, nombre3, nombre4, nombre5, nombre6) {
    var somme = 0
    somme = nombre1 + nombre2 + nombre3 + nombre4 + nombre5 + nombre6
    if(somme >= 63){
        somme += 35
    }
    return somme
}

function total(somme, brelan, carre, full, ps, gs, yams, yams2, yams3, chance) {
    var total = 0
    total = somme + brelan + carre + full + ps + gs + yams + yams2 + yams3 + chance
    return total
}

module.exports = {
    somme: somme,
    total: total
}
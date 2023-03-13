function calcul_score(points){
    var sommeJ1 = 0
    for (let key in points) {
        if ( !(points[key] == 'barre') && (key.includes('nombre')) && (key.includes('j1')) ) {
            sommeJ1 += points[key]
        }
    }
    if (sommeJ1 >= 63) {
        sommeJ1 += 35
    }
    points.sommej1 = sommeJ1
    var totalJ1 = 0
    for (let key in points) {
        if ( !(points[key] == 'barre') && !(key.includes('nombre')) && (key.includes('j1')) && !(key.includes('total')) ) {
            totalJ1 += points[key]
        }
    }
    points.totalj1 = totalJ1

/* -------------------------------------------------------------------------------------------------------------------------------------- */

    var sommeJ2 = 0
    for (let key in points) {
        if ( !(points[key] == 'barre') && (key.includes('nombre')) && (key.includes('j2')) ) {
            sommeJ2 += points[key]
        }
    }
    if (sommeJ2 >= 63) {
        sommeJ2 += 35
    }
    points.sommej2 = sommeJ2
    var totalJ2 = 0
    for (let key in points) {
        if ( !(points[key] == 'barre') && !(key.includes('nombre')) && (key.includes('j2')) && !(key.includes('total')) ) {
            totalJ2 += points[key]
        }
    }
    points.totalj2 = totalJ2

/* -------------------------------------------------------------------------------------------------------------------------------------- */

    var sommeJ3 = 0
    for (let key in points) {
        if ( !(points[key] == 'barre') && (key.includes('nombre')) && (key.includes('j3')) ) {
            sommeJ3 += points[key]
        }
    }
    if (sommeJ3 >= 63) {
        sommeJ3 += 35
    }
    points.sommej3 = sommeJ3
    var totalJ3 = 0
    for (let key in points) {
        if ( !(points[key] == 'barre') && !(key.includes('nombre')) && (key.includes('j3')) && !(key.includes('total')) ) {
            totalJ3 += points[key]
        }
    }
    points.totalj3 = totalJ3

/* -------------------------------------------------------------------------------------------------------------------------------------- */
var sommeJ4 = 0
    for (let key in points) {
        if ( !(points[key] == 'barre') && (key.includes('nombre')) && (key.includes('j4')) ) {
            sommeJ4 += points[key]
        }
    }
    if (sommeJ4 >= 63) {
        sommeJ4 += 35
    }
    points.sommej4 = sommeJ4
    var totalJ4 = 0
    for (let key in points) {
        if ( !(points[key] == 'barre') && !(key.includes('nombre')) && (key.includes('j4')) && !(key.includes('total')) ) {
            totalJ4 += points[key]
        }
    }
    points.totalj4 = totalJ4

/* -------------------------------------------------------------------------------------------------------------------------------------- */

    return points
}

module.exports = {
    calcul_score: calcul_score
}
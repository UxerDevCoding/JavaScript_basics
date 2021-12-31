// Objetos

let mascota = {
    nombre: 'Lucho',
    edad: 10,
    vivo: true,
    razas: ['peludo', 'negro']
}

console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);
console.log(mascota.razas[1]);

// Array de Objetos

let web = {
    nombre: 'bluuweb',
    links: {
        enlace: 'www.bluuweb.cl'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/bluuweb',
            nombre: 'bluuweb yt'
        }
    }
}

console.log(web.redesSociales.youtube.enlace);
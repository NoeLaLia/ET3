window.entidades = {}; // almacena las clases cargadas

async function cargarClase(nombre) {
    const archivo = `./app/${nombre}_Class.js`;

    const existe = await fetch(archivo).then(r => r.ok).catch(() => false);

    if (!existe) return false;

    try {
        const modulo = await import(archivo);
        window.entidades[nombre] = modulo.default;
        console.log(`Clase ${nombre} cargada correctamente`);
        return true;
    } catch (_) {
        return false;
    }
}



async function buscarEntidad() {
    const entidadIntroducida = document.getElementById('textoBuscador').value;

    const cargada = await cargarClase(entidadIntroducida);
    if (!cargada) {
        return new EntidadGeneral(entidadIntroducida);
    }
    // Instanciar dinámicamente
    return new window.entidades[entidadIntroducida]();
    console.log("Instancia creada:", instancia);
}
function cambiar_botones_especifico() {
    document.getElementById('botonADD').onclick = () => entidad.createForm_ADD();
    document.getElementById('botonSEARCH').onclick = () => entidad.createForm_SEARCH();
}
function cambiar_botones_general() {
    document.getElementById('botonADD').onclick = () => entidad.createForm('ADD');
    document.getElementById('botonSEARCH').onclick = () => entidad.createForm('SEARCH');
}
/*window.entidades = {}

function buscarEntidad() {
    let entidadIntroducida = document.getElementById('textoBuscador').value
    if (comprobar(entidadIntroducida)) {
        entidad = new entidadIntroducida()
    }
    alert(entidades[entidadIntroducida])
    entidad = new window.entidades[entidadIntroducida]()
    entidad = new EntidadGeneral(entidadIntroducida)
}
async function fileExists(filename) {
    const response = await fetch("./app/" + filename)
        .catch(() => null);

    return response && response.ok;
}
async function comprobar(entidadIntroducida) {
    const exists = await fileExists(entidadIntroducida + "_Class.js"); // o "alumno.txt", etc
    if (exists) {
        alert('Mish!')
        entidades.push([{ entidadIntroducida: entidadIntroducida }])
        return true
    } else {
        console.log('No tengo idea de como evitar este error de consola, odio todo')
        return false
    }
}*/
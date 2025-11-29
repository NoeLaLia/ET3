/**
 * funcion de idioma
 * Si no hay idioma establecido lo establece por defecto
 * crea la cookie del idioma seleccionado
 * carga la variable de traducciones correspondiente al idioma seleccionado
 * recorre todos los elementos buscando un class que exista en las traducciones
 * para aplicar el texto de idioma
 * 
 * @param {String} lang Indicación del idioma mediante dos letras (ES, EN, GA..)
 */
var lang
function setLang(lang = '') {

    if (lang == '') {
        if (getCookie('lang') != '') {
            lang = getCookie('lang');
        } else {
            lang = 'ES';
        }

    }
    window.lang = lang


    setCookie('lang', lang, 1);
    var traduccion;


    switch (lang) {
        case 'ES':
            traduccion = textos_ES;
            break;
        case 'EN':
            traduccion = textos_EN;
            break;
        default:
            traduccion = textos_ES;
            break;
    }

    /*
    En el soporte multiidioma se colocan automáticamente los valores de traducción en
    tiempo real (puesto que no se puede escribir ficheros desde JS) para textos de interfaz
    y en el caso de códigos de error se colocará el código de error seguido de -ES o -EN.
    */
    //alumnograduacion_login-min_size_KO-ES
    var codigoserror = document.querySelectorAll(`[class$="-${lang}"]`);
    for (var codigo of codigoserror) {
        let valores = codigo.classList.value.split("-")
        let atributo = valores[0]
        let subPartesError = valores[1].split(':')
        let error = subPartesError[0]
        let valorError = subPartesError[1]
        let labelError = subPartesError[2]
        let idioma = valores[2]
        var texto
        switch (error) {
            case 'min_size_KO':
                var min_size = entidad.estructura.attributes[atributo].rules.validations.ADD['min_size']
                texto = traduccion['min_size_KO'].replace('ATRIBUTO', atributo).replace('NUMERO', min_size);
                break
            case 'max_size_KO':
                var max_size = entidad.estructura.attributes[atributo].rules.validations.ADD['max_size']
                texto = traduccion['max_size_KO'].replace('ATRIBUTO', atributo).replace('NUMERO', max_size);
                break
            case 'format_KO':
                var exp_reg = entidad.estructura.attributes[atributo].rules.validations.ADD['exp_reg']
                texto = traduccion['format_KO'].replace('ATRIBUTO', atributo).replace('FORMATO', exp_reg);
                break
            case 'invalid_KO':
                var valoresselect = entidad.estructura.attributes[atributo].html.options
                texto = traduccion['invalid_KO'].replace('VALOR', valorError).replace('OPCION', labelError).replace('ATRIBUTO', atributo).replace('VALORES', valoresselect)
                break
            case 'max_size_file_KO':
                var max_size_file = entidad.estructura.attributes[atributo].rules.validations.ADD.max_size_file[0]['max_size_file']
                texto = traduccion['max_size_file_KO'].replace('ATRIBUTO', atributo).replace('NUMERO', max_size_file)
                break
            case 'type_file_KO':
                var type_file = entidad.estructura.attributes[atributo].rules.validations.ADD.type_file[1]['type_file']
                texto = traduccion['type_file_KO'].replace('ATRIBUTO', atributo).replace('TIPO', type_file)
                break
            case 'format_name_file_KO':
                var format_name_file = entidad.estructura.attributes[atributo].rules.validations.ADD.type_file[2]['format_name_file']
                texto = traduccion['format_name_file_KO'].replace('ATRIBUTO', atributo).replace('FORMATO', format_name_file)
                break
            case 'empty_file_KO':
                texto = traduccion['empty_file_KO'].replace('ATRIBUTO', atributo)
                break
            case 'checkbox_vacio_KO':
                texto = traduccion['checkbox_vacio_KO'].replace('ATRIBUTO', atributo)
                break
            case 'checkbox_value_KO':
                texto = traduccion['checkbox_value_KO'].replace('VALOR', valorError).replace('OPCION', labelError).replace('ATRIBUTO', atributo)
                break
        }
        document.getElementsByClassName(codigo.classList)[0].innerHTML = texto
    }

    //**Se recorre el array de traducciones buscando coincidencias una por una*/
    for (var clave in traduccion) {

        var elementos = document.getElementsByClassName(clave);
        var etiquetas = document.getElementsByTagName('label');
        var inputs = document.getElementsByTagName('input');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');

        for (var elem in elementos) {
            elementos[elem].innerHTML = traduccion[clave];
        }

        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                    inputs[i].title = traduccion[clave];
                }
            }
        }

        for (var i = 0; i < imgs.length; i++) {
            var list = imgs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave]; // texto alternativo si no se ve la imagen
                    imgs[i].title = traduccion[clave]; // texto superpuesto a la imagen al pasar sobre ella
                }
            }
        }

        for (var i = 0; i < options.length; i++) {
            if (options[i].className == clave) {
                options[i].label = traduccion[clave];
            }
        }
    }
}

/**Función para cambiar el idioma*/
function cambiarLang(lang) {

    setCookie('lang', lang, 5);
    window.location.reload(true);

}

/*Función para establecer el valor de la cookie*/
function setCookie(name, value, days) {

    var expires = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    document.cookie += "; Secure; SameSite=none; path=/";
}

/*Función para obtener el valor de la cookie*/
function getCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }

    return null;

}
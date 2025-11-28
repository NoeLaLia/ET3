class EntidadGeneral extends EntidadAbstracta {
    constructor(nombreentidad) {
        super()
        this.dom = new dom();
        this.validations = new Validations();
        this.nombreentidad = nombreentidad
        this.mostrarespecial = []
        this.columnasamostrar = []
        try {
            this.estructura = eval("estructura_" + nombreentidad);
            document.getElementById('span_error_textoBuscador').innerHTML = 'Mish! Esa si existe :)'
            this.atributosEstructura = this.getAtributos()
            this.mostrarInicio(nombreentidad)
            this.columnasamostrar.push(this.atributosEstructura[0])
            this.columnasamostrar.push(this.atributosEstructura[1])
            this.columnasamostrar.push(this.atributosEstructura[2])
        }
        catch (e) {
            document.getElementById('span_error_textoBuscador').innerHTML = 'La entidad introducida no existe'
        }
    }
    getAtributos() {
        let atributos = []
        Object.keys(this.estructura.attributes).forEach(attrName => {
            atributos.push(attrName);
        });
        return atributos
    }
    getAtributosAccion(accion) {
        let atributos = this.atributos

        let atributos_file = this.getEspeciales('file')
        switch (accion) {
            case 'ADD':
            case 'EDIT':
                //Quitar los files sin el nuevo
                atributos = atributos.filter(x => !atributos_file.includes(x))
                //Añadirlos con el nuevo
                atributos.push(...atributos_file.map(x => `nuevo_${x}`))
                break
            case 'SEARCH':
                //En principio no habría que hacer nada 
                //atributos = atributos.filter(x => !atributos_file.includes('nuevo_' + x))
                break
            default:
                return []
        }
        return atributos
    }
    manual_form_creation() {
        var form_content = ``
        form_content += `<form id = 'form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>`

        this.atributosEstructura.forEach(atributo => {
            let html = this.estructura.attributes[atributo]['html']
            let tag = html.tag
            let type = html['type']
            let component_visible_size = html['component_visible_size']
            form_content += `<label id='label_` + tag + `' class=label_` + tag + `>` + tag + `</label>`
            switch (type) {
                case 'input':
                    form_content += `<input type="text" id='` + tag + `' name='` + tag + `'></input>`
                    break;
                case 'select':
                    form_content += `<select id='` + tag + `' name='` + tag + `'></input>`
                    let valoresSelect = html['options']
                    for (let opcion of valoresSelect) {
                        form_content += `   <option value="` + opcion + `">` + opcion + `</option>`
                    }
                    form_content += `</select>`
                    break
                case 'textarea':
                    let rows = html['rows']
                    let cols = html['cols']
                    form_content += `<textarea rows="` + rows + `" cols="` + cols + `" id='` + tag + `' name='` + tag + `'></textarea>`
                    break
                case 'file':
                    form_content += `<input type='file' id='` + tag + `' name='` + tag + `'></input>`
                    let especial = tag.replace("nuevo_", '');

                    if (!this.mostrarespecial.some(
                        par => par[0] === especial && par[1] === 'file')) {
                        this.mostrarespecial.push([especial, 'file']);
                    }
                    break
            }
            form_content += `<span id=span_error_` + tag + `><a id="error_` + tag + `"></a></span>`
            form_content += `<br>`

        });
        form_content = this.colocarLinks(form_content)
        return form_content
        var form_content = `
			<form id = 'form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

			<label class="label_alumnograduacion_login">Login</label>
			<input type='text' id='alumnograduacion_login' name='alumnograduacion_login' "></input>
			<span id="span_error_alumnograduacion_login"><a id="error_alumnograduacion_login"></a></span>
			<br>
			
			<label class="label_alumnograduacion_password">Contraseña</label>
			<input type='text' id='alumnograduacion_password' name='alumnograduacion_password' "></input>
			<span id="span_error_alumnograduacion_password" ><a id="error_alumnograduacion_password"></a></span>
			<br>
			
			<label class="label_alumnograduacion_nombre">Nombre</label>
			<input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre' "></input>
			<span id="span_error_alumnograduacion_nombre" ><a id="error_alumnograduacion_nombre"></a></span>
			<br>
			
			<label class="label_alumnograduacion_apellidos">Apellidos</label>
			<input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos' "></input>
			<span id="span_error_alumnograduacion_apellidos" ><a id="error_alumnograduacion_apellidos"></a></span>
			
			<br>

			<label class="label_alumnograduacion_titulacion">Titulacion</label>
            <select id='alumnograduacion_titulacion' name='alumnograduacion_titulacion'></input>
                <option value="GREI">GREI</option>
                <option value="GRIA">GRIA</option>
                <option value="MEI">MEI</option>
                <option value="MIA">MIA</option>
                <option value="PCEO">PCEO</option>
            </select>
            <span id="span_error_alumnograduacion_titulacion" ><a id="error_alumnograduacion_titulacion"></a></span>
			<br>

			<label class="label_alumnograduacion_dni">DNI</label>
			<input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni'"></input>
			<span id="span_error_alumnograduacion_dni" ><a id="error_alumnograduacion_dni"></a></span>
			
			<br>
			<label class="label_alumnograduacion_telefono">Numero de telefono</label>
			<input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono' "></input>
			<span id="span_error_alumnograduacion_telefono" ><a id="error_alumnograduacion_telefono"></a></span>

			<br>

            <label class="label_alumnograduacion_direccion">Direccion</label>
			<textarea rows="5" cols="33" id='alumnograduacion_direccion' name='alumnograduacion_direccion'"></textarea>
			<span id="span_error_alumnograduacion_direccion" ><a id="error_alumnograduacion_direccion"></a></span>

			<br>

            <label class="label_alumnograduacion_email">Email</label>
			<input type='text' id='alumnograduacion_email' name='alumnograduacion_email'></input>
			<span id="span_error_alumnograduacion_email" ><a id="error_alumnograduacion_email"></a></span>

			<br>

			<label id="label_alumnograduacion_fotoacto" class="label_alumnograduacion_fotoacto">Foto alumno graduacion</label>
			<input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'></input>
			<span id="span_error_alumnograduacion_fotoacto"><a id="error_alumnograduacion_fotoacto"></a></span>
			<a id="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_alumnograduacion_fotoacto" class="label_nuevo_alumnograduacion_fotoacto">Nueva Foto alumno graduacion</label>
			<input type='file' id='nuevo_alumnograduacion_fotoacto' name='nuevo_alumnograduacion_fotoacto'></input>
			<span id="span_error_nuevo_alumnograduacion_fotoacto"><a id="error_nuevo_alumnograduacion_fotoacto"></a></span>
			<br>


		</form>
		`;
        return form_content;

    }
    createForm(accion, fila) {

        // poner titulo al formulario

        // limpiar y poner visible el formulario
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        if (accion != 'SHOWCURRENT') {
            this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_' + this.nombreentidad + '_' + accion);
        }

        // poner onsubmit
        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.' + accion + '_submit()');

        // poner action
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.' + accion + '();');

        // poner no visible el campo alumnograduacion_fotoacto (solo se puede subir fichero)
        //En las que no debe de aparecer la file se ocultaç
        switch (accion) {
            case 'ADD':
                this.dom.colocarvalidaciones('form_iu', accion);
                this.dom.colocarboton(accion);
                this.ocultarEnlaces()
                this.ocultarInsercionTextoFicheros()
                break
            case 'EDIT':
                this.dom.colocarvalidaciones('form_iu', accion);
                this.dom.colocarboton(accion);
                this.colocarReadOnly()
                this.dom.rellenarvaloresform(fila);
                this.colocarEnlaceFicheros(fila)
                break
            case 'SEARCH':
                this.dom.colocarvalidaciones('form_iu', accion);
                this.dom.colocarboton(accion);
                this.ocultarInsercionFicheros()
                this.ocultarEnlaces()
                break
            case 'DELETE':
                this.dom.rellenarvaloresform(fila);
                this.dom.colocartodosreadonly('form_iu');
                this.dom.colocarboton(accion);
                this.colocarEnlaceFicheros(fila)
                break
            case 'SHOWCURRENT':
                this.dom.rellenarvaloresform(fila);
                this.dom.colocartodosreadonly('form_iu');
                this.colocarEnlaceFicheros(fila)
                break
        }
        /*if (accion === 'ADD' || accion === 'EDIT') {
            //Oculta los archivos y sus spans de error
            for (let par of this.mostrarespecial) {
                let atributo = par[0]
                let tipo = par[1]
                if (tipo === 'file') {
                    this.dom.hide_element_form(atributo);
                    document.getElementById('span_error_' + atributo).hidden = true;
                    //this.dom.hide_element('link_' + atributo);
                }
            }
        }
        else if(accion === 'SEARCH'){
            for (let par of this.mostrarespecial) {
                let atributo = 'nuevo_' + par[0]
                let tipo = par[1]
                if (tipo === 'file') {
                    this.dom.hide_element_form(atributo);
                    document.getElementById('span_error_' + atributo).hidden = true;
                    //this.dom.hide_element('link_' + atributo);
                }
            }
        }
        //En las que si se muestra
        else{
            for (let especial of this.mostrarespecial) {
                let atributo = especial[0]
                let tipo = especial[1]
                if (tipo === 'file') {
                    let texto = `<a id="link_` + atributo + `" href=http://193.147.87.202/ET2/filesuploaded/files_` + atributo + `/"<img src="./iconos/FILE.png/></a>`
                    //<a id="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/"><img src="./iconos/FILE.png" /></a>
                    document.getElementById("span_error_alumnograduacion_fotoacto")
                        .insertAdjacentHTML("afterend", texto);
                }
            }
        }*/


        // rellenar valores
        // en ADD no hay valores que rellenar

        // poner inactivos los campos correspondientes
        // en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria
        /*
            if (accion != 'SHOWCURRENT') {
                // colocar boton de submit
                this.dom.colocarboton(accion);
            }*/

        setLang();
    }
    colocarLinks(html) {

        // Crear DOM virtual
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");



        for (let atributo of this.getEspeciales('file')) {
            // Buscar el elemento por id
            const elem = doc.getElementById("span_error_" + atributo);

            // Crear el <a>
            let enlace = doc.createElement("a");

            enlace.id = "link_" + atributo
            enlace.href = "href=http://193.147.87.202/ET2/filesuploaded/files_` + atributo + `/"

            let imagen = document.createElement('img');
            imagen.src = './iconos/FILE.png';

            // Insertarlo después
            enlace.appendChild(imagen)
            elem.insertAdjacentElement("afterend", enlace);

            /*let texto = `<a id="link_` + atributo + `" href=http://193.147.87.202/ET2/filesuploaded/files_` + atributo + `/"<img src="./iconos/FILE.png/></a>`
            //<a id="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/"><img src="./iconos/FILE.png" /></a>
            document.getElementById("span_error_alumnograduacion_fotoacto")
                .insertAdjacentHTML("afterend", texto);
        */
        }
        // Convertir de vuelta a string
        html = doc.body.innerHTML;
        return html
    }
    getEspeciales(tipoespecial) {
        let especiales = []
        for (let par of this.mostrarespecial) {
            if (tipoespecial === tipoespecial) {
                especiales.push(par[0])
            }
        }
        return especiales
    }
    ocultarEnlaces() {
        for (let atributo of this.getEspeciales('file')) {
            this.dom.hide_element('link_' + atributo)
        }
    }
    ocultarInsercionTextoFicheros() {
        for (let atributo of this.getEspeciales('file')) {
            this.dom.hide_element_form(atributo);
            document.getElementById('span_error_' + atributo).hidden = true;
        }
    }
    ocultarInsercionFicheros() {
        for (let atributo of this.getEspeciales('file')) {
            atributo = 'nuevo_' + atributo
            this.dom.hide_element_form(atributo);
            document.getElementById('span_error_' + atributo).hidden = true;
        }
    }
    colocarEnlaceFicheros(fila) {
        for (let atributo of this.getEspeciales('file')) {
            this.dom.assign_property_value('link_' + atributo, 'href', 'http://193.147.87.202/ET2/filesuploaded/files_' + atributo + '/' + fila[atributo]);
            /*
            let texto = `<a id="link_` + atributo + `" href=http://193.147.87.202/ET2/filesuploaded/files_` + atributo + `/"<img src="./iconos/FILE.png/></a>`
            //<a id="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/"><img src="./iconos/FILE.png" /></a>
            document.getElementById("span_error_alumnograduacion_fotoacto")
                .insertAdjacentHTML("afterend", texto);*/
        }
    }
    colocarReadOnly() {
        for (let atributo of this.getEspeciales('file')) {
            this.dom.assign_property_value(atributo, 'readonly', 'true');
        }
    }
    ADD_validation(atributo) {
        return this.GENERIC_validation(atributo, 'ADD')
    }

    EDIT_validation(atributo) {
        return this.GENERIC_validation(atributo, 'EDIT')
    }
    SEARCH_validation(atributo) {
        return this.GENERIC_validation(atributo, 'SEARCH')
        /*
        let lang = window.lang
        let validaciones = this.estructura.attributes[atributo].rules.validations.ADD
        let max_size
        let exp_reg
        if ('max_size' in validaciones) {
            max_size = validaciones['max_size']
        } else {
            max_size = 0;
        }
        if ('exp_reg' in validaciones) {
            exp_reg = validaciones['exp_reg']
        } else {
            exp_reg = 0;
        }
        if (max_size && !this.validations.max_size(atributo, max_size)) {
            this.dom.mostrar_error_campo(atributo, atributo + '-max_size_KO-' + lang)
            return atributo + '-max_size_KO-' + lang
        }
        if (exp_reg && !this.validations.format(atributo, exp_reg)) {
            this.dom.mostrar_error_campo(atributo, atributo + '-format_KO-' + lang)
            return atributo + '-format_KO-' + lang
        }
        this.dom.mostrar_exito_campo(atributo)
        return true*/
    }
    /*
    Dado un atributo (por ejemplo alumnograduacion_login) aplica sus reglas de ADD correspondientes si
    estas existen, si no se las salta.
    Comprueba en orden min_size max_size y exp_reg
    */
    GENERIC_validation(atributo, accion) {
        let lang = window.lang
        let validaciones = this.estructura.attributes[atributo].rules.validations[accion]

        //Si no existen no hay nada que aplicar y se da el valor del
        //atributo directamente como válido
        if (!validaciones) {
            this.dom.mostrar_exito_campo(atributo)
            return true
        }
        let tag = this.estructura.attributes[atributo].html.type

        let func_min_size
        let func_max_size
        let func_format
        let func_max_size_file
        let func_format_file
        let func_no_file = () => { return false }

        let min_size
        let max_size
        let exp_reg
        let max_size_file
        let file_exp_reg
        let type_file
        let no_file = null

        let valoresselect
        switch (tag) {
            case 'input': {
                if ('min_size' in validaciones) {
                    min_size = validaciones['min_size']
                } else {
                    min_size = 0;
                }
                if ('max_size' in validaciones) {
                    max_size = validaciones['max_size']
                } else {
                    max_size = 0;
                }
                if ('exp_reg' in validaciones) {
                    exp_reg = validaciones['exp_reg']
                } else {
                    exp_reg = 0;
                }
                func_min_size = () => this.validations.min_size(atributo, min_size)
                func_max_size = () => this.validations.max_size(atributo, max_size)
                func_format = () => this.validations.format(atributo, exp_reg)

                //Al ponerle cero si el valor no existe (por ejemplo si min_size no está en el json)
                //pasa de largo del if, es decir, no comprueba el min_size ya que no existe

                break
            }
            case 'textarea': {
                if ('min_size' in validaciones) {
                    min_size = validaciones['min_size']
                } else {
                    min_size = 0;
                }
                if ('max_size' in validaciones) {
                    max_size = validaciones['max_size']
                } else {
                    max_size = 0;
                }
                if ('exp_reg' in validaciones) {
                    exp_reg = validaciones['exp_reg']
                } else {
                    exp_reg = 0;
                }
                func_min_size = () => this.validations.min_size_textarea(atributo, min_size);
                func_max_size = () => this.validations.max_size_textarea(atributo, max_size)
                func_format = () => this.validations.format_textarea(atributo, exp_reg)
                break
            }
            case 'file': {
                if ('min_size' in validaciones) {
                    min_size = validaciones['min_size']
                } else {
                    min_size = 0;
                }
                if ('max_size' in validaciones) {
                    max_size = validaciones['max_size']
                } else {
                    max_size = 0;
                }
                if ('no_file' in validaciones) {
                    no_file = validaciones['no_file']
                    if (no_file) {
                        func_no_file = () => this.validations.not_exist_file(atributo)
                    }
                } else {
                    no_file = false;
                }
                if ('max_size_file' in validaciones) {
                    max_size_file = validaciones.max_size_file[0]['max_size_file']
                }
                else {
                    max_size_file = 0;
                }
                if ('type_file' in validaciones) {
                    type_file = validaciones.type_file[1]['type_file']
                }
                else {
                    type_file = 0
                }
                if ('format_name_file' in validaciones) {
                    file_exp_reg = validaciones.format_name_file[2]['format_name_file']
                } else {
                    file_exp_reg = 0;
                }
                func_min_size = () => this.validations.format_name_file(atributo, '^.{' + min_size + ',}$')
                func_max_size = () => this.validations.format_name_file(atributo, '^.{0,' + max_size + '}$')
                func_no_file = () => this.validations.not_exist_file(atributo)
                break
            }
            case 'select':
                valoresselect = Object.values(this.estructura.attributes[atributo].html.options)
                break
            default:
                min_size = 0
                max_size = 0
                exp_reg = 0

        }
        if (no_file != null && !func_no_file()) {
            if (!no_file) {
                this.dom.mostrar_exito_campo(atributo)
                return true
            }
            this.dom.mostrar_error_campo(atributo, atributo + '-empty_file_KO-' + lang)
            return atributo + '-empty_file_KO-' + lang
        }
        if (min_size && !func_min_size()) {
            this.dom.mostrar_error_campo(atributo, atributo + '-min_size_KO-' + lang)
            return atributo + '-min_size_KO-' + lang
        }
        if (max_size && !func_max_size()) {
            this.dom.mostrar_error_campo(atributo, atributo + '-max_size_KO-' + lang)
            return atributo + '-max_size_KO-' + lang
        }
        if (exp_reg && !func_format()) {
            this.dom.mostrar_error_campo(atributo, atributo + '-format_KO-' + lang)
            return atributo + '-format_KO-' + lang
        }
        if (valoresselect && !valoresselect.includes(document.getElementById(atributo).value)) {
            this.dom.mostrar_error_campo(atributo, atributo + '-invalid_KO-' + lang)
            return atributo + '-invalid-KO-' + lang
        }
        if (max_size_file && !this.validations.max_size_file(atributo, max_size_file)) {
            this.dom.mostrar_error_campo(atributo, atributo + '-max_size_file_KO-' + lang)
            return atributo + '-max_size_file_KO-' + lang
        }
        if (type_file && !this.validations.type_file(atributo, [type_file])) {
            this.dom.mostrar_error_campo(atributo, atributo + '-type_file_KO-' + lang)
            return atributo + '-type_file_KO-' + lang
        }
        if (file_exp_reg && !this.validations.format_name_file(atributo, file_exp_reg)) {
            this.dom.mostrar_error_campo(atributo, atributo + '-format_name_file_KO-' + lang)
            return atributo + '-format_name_file_KO-' + lang
        }
        this.dom.mostrar_exito_campo(atributo)
        return true
    }
    ADD_submit() {
        let result = true
        for (let atributo of this.getAtributosAccion('ADD')) {
            result &= this.ADD_validation(atributo)
        }
        result = Boolean(result);

        return result
    }
    EDIT_submit() {
        let result = true
        for (let atributo of this.getAtributosAccion('EDIT')) {
            result &= this.EDIT_validation(atributo)
        }
        result = Boolean(result);
        return result
    }
    SEARCH_submit() {
        let result = true
        for (let atributo of this.getAtributosAccion('SEARCH')) {
            result &= this.SEARCH_validation(atributo)
        }
        result = Boolean(result);

        return result
    }
    DELETE_submit() {
        return true
    }
    mostrarcambioatributo(tipocambio, atributo, valorentrada) {
        switch (tipocambio) {
            case 'file':
                var link = 'error';
                if (valorentrada !== '') {
                    link = valorentrada + `  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/` + valorentrada + `"><img src="./iconos/FILE.png" /></a>`;
                }
                return link;
                break;
        }
        /*switch (atributo){
            case 'alumnograduacion_password':
                //No tiene mucho sentido porque se puede ver la contraseña 
                //con el f12 viendo la respuesta del servidor pero prefiero
                //dejarlo así
                return '*'.repeat(10)
            case 'alumnograduacion_fotoacto':
                var link = 'error';
                if (valorentrada !== ''){
                    link = valorentrada+`  <a class="link_alumnograduacion_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
                }
                return link;
                break;
            case 'default':
                alert('no existe mostrar especial para ese atributo');
                break;
        }*/

    }
}
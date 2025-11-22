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
            this.atributos = this.getAtributos()
            this.mostrarInicio(nombreentidad)
            this.columnasamostrar.push(this.atributos[0])
            this.columnasamostrar.push(this.atributos[1])
            this.columnasamostrar.push(this.atributos[2])
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
    manual_form_creation() {
        var form_content = ``
        form_content += `<form id = 'form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>`

        this.atributos.forEach(atributo => {
            let html = this.estructura.attributes[atributo]['html']
            let tag = html.tag
            let type = html['type']
            let component_visible_size = html['component_visible_size']
            form_content += `<label class=label_` + tag + `></label>`
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

            }
            form_content += `<span id=span_error_` + tag + `><a id="error_` + tag + `"></a></span>`
            form_content += `<br>`
        });
        for (let atributo in this.atributos) {
            form_content += `<label class=label_` + atributo + `</label>`
        }
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
        //this.dom.hide_element_form('alumnograduacion_fotoacto');
        //this.dom.hide_element('link_alumnograduacion_fotoacto');

        // rellenar valores
        // en ADD no hay valores que rellenar

        // poner las validaciones
        if (accion === 'ADD' || accion === 'EDIT' || accion === 'SEARCH') {
            this.dom.colocarvalidaciones('form_iu', accion);
        }

        // poner inactivos los campos correspondientes
        // en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

        if (accion === 'EDIT' || accion === 'DELETE' || accion === 'SHOWCURRENT') {
            this.dom.rellenarvaloresform(fila);
        }
        if (accion === 'DELETE' || accion === 'SHOWCURRENT') {
            this.dom.colocartodosreadonly('form_iu');
        }
        if (accion != 'SHOWCURRENT') {
            // colocar boton de submit
            this.dom.colocarboton(accion);
        }

        setLang();
    }
    /*
    Dado un atributo (por ejemplo alumnograduacion_login) aplica sus reglas de ADD correspondientes si
    estas existen, si no se las salta.
    Comprueba en orden min_size max_size y exp_reg
    */
    ADD_validation(atributo) {
        let validaciones
        try {
            validaciones = this.estructura.attributes[atributo].rules.validations.ADD
        }
        catch (e) {
            //Si falla es porque no tiene validaciones
            this.dom.mostrar_exito_campo(atributo)
            return true
        }
        let min_size;
        let max_size
        let exp_reg
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
        /*
        Al ponerle cero si el valor no existe (por ejemplo si min_size no está en el json)
        pasa de largo del if, es decir, no comprueba el min_size ya que no existe
        */
        if (min_size && !this.validations.min_size(atributo, min_size)) {
            this.dom.mostrar_error_campo(atributo, atributo + '_min_size_KO')
            return atributo + '_min_size_KO'
        }
        if (max_size && !this.validations.max_size(atributo, max_size)) {
            this.dom.mostrar_error_campo(atributo, atributo + '_max_size_KO')
            return atributo + '_max_size_KO'
        }
        if (exp_reg && !this.validations.format(atributo, exp_reg)) {
            this.dom.mostrar_error_campo(atributo, atributo + '_format_KO')
            return atributo + '_format_KO'
        }
        this.dom.mostrar_exito_campo(atributo)
        return true
    }
    EDIT_validation(atributo) {
        return this.ADD_validation(atributo)
    }
    SEARCH_validation(atributo) {
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
            this.dom.mostrar_error_campo(atributo, atributo + '_max_size_KO')
            return atributo + '_max_size_KO'
        }
        if (exp_reg && !this.validations.format(atributo, exp_reg)) {
            this.dom.mostrar_error_campo(atributo, atributo + '_format_KO')
            return atributo + '_format_KO'
        }
        this.dom.mostrar_exito_campo(atributo)
        return true
    }
    ADD_submit() {
        let result = true
        for (let atributo of this.atributos) {
            result &= this.ADD_validation(atributo)
        }
        result = Boolean(result);

        return result
    }
    EDIT_submit() {
        let result
        for (let atributo of this.atributos) {
            result &= this.EDIT_validation(atributo)
        }
        result = Boolean(result);
        return result
    }
    SEARCH_submit() {
        let result
        for (let atributo of this.atributos) {
            result &= this.SEARCH_validation(atributo)
        }
        result = Boolean(result);

        return result
    }
    DELETE_submit() {
        return true
    }
}
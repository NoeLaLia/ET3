class articulo extends EntidadAbstracta{

	constructor(esTest){
		super();

		this.estadosA = ['Enviado', 'Revision', 'Publicado']

		/*Dado que la página de inicio debe de ser siempre menor o igual a la de fin estas dos
		variables se utilizan para saber cuando alguna de las dos es correcta.
		Esto sirve para ejemplos como:
		Los datos se introdujeron en orden: PagFin = 5 PagIni = 10
		Sale un error de que la Página de inicio es mayor a la de fin en el label PagIni
		Ahora se cambia PagFin y se le añade un cero a la derecha pasando a ser 50, entonces debe
		de arreglarse el error en un label que no le corresponde. Por lo que en la función se incluye
		una comprobación al valor de la otra página, en este caso la de inicio, al ver que es incorrecta ejecuta
		su validación para comprobar si el cambio en la página de fin puede solucionar su error.
		Se cambia el error aunque no sea su label

		PagIni = 10 EROR No puede ser mayor a la de fin
		PagFin = 5 ✔

		-----------------

		PagIni = 10 ✔
		PagFin = 50 ✔

		Si no fuera por eso habría que pulsar explícitamente en PagIni y luego descentrarse
		en él para que desaparezca el error que ya debería de haber desaparecido
		*/

		this.pagIniCorrecto = null
		this.pagFinCorrecto = null
		

		//definicion de atributos a mostrarn en la tabla de muestra de tuplas al entrar en la gestion de la entidad
		this.columnasamostrar = ['CodigoA', 'ISSN','AutoresA','TituloA', 'FechaPublicacionR'];
		//definicion de atributos a cambiar su visualización
		this.mostrarespecial = ['FechaPublicacionR', 'FicheropdfA'];
		
		// definicion de los atributos del formulario (Necesario para test de unidad)
		this.attributes = [  'CodigoA',
                                'AutoresA',
                                'TituloA',
                                'TituloR',
                                'ISSN',
                                'VolumenR',
                                'PagIniA',
                                'PagFinA',
                                'FechaPublicacionR',
								'FicheropdfA',
								'EstadoA'
                            ];

	}	

	/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation(){
		var form_content = `
			<form id = 'form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

			<label id="label_CodigoA" class="label_CodigoA">Codigo articulo</label>
			<input type='text' id='CodigoA' name='CodigoA'></input>
			<span id="span_error_CodigoA"><a id="error_CodigoA"></a></span>
			<br>
			
			<label class="label_AutoresA">Autores articulo</label>
			<input type='text' id='AutoresA' name='AutoresA' ></input>
			<span id="span_error_AutoresA" ><a id="error_AutoresA"></a></span>
			<br>
			
			<label class="label_TituloA">Titulo articulo</label>
			<input type='text' id='TituloA' name='TituloA'></input>
			<span id="span_error_TituloA" ><a id="error_TituloA"></a></span>
			<br>
			
			<label class="label_TituloR">Titulo revista</label>
			<input type='text' id='TituloR' name='TituloR'></input>
			<span id="span_error_TituloR" ><a id="error_TituloR"></a></span>
			
			<br>

			<label class="label_ISSN">ISSN</label>
			<input type='text' id='ISSN' name='ISSN'></input>
			<span id="span_error_ISSN" ><a id="error_ISSN"></a></span>
			
			<br>


			<label class="label_VolumenR">Volumen revista</label>
			<input type='text' id='VolumenR' name='VolumenR'></input>
			<span id="span_error_VolumenR" ><a id="error_VolumenR"></a></span>
			
			<br>
			<label class="label_PagIniA">Pagina inicio articulo</label>
			<input type='text' id='PagIniA' name='PagIniA'></input>
			<span id="span_error_PagIniA" ><a id="error_PagIniA"></a></span>

			<br>

            <label class="label_PagFinA">Pagina fin articulo</label>
			<input type='text' id='PagFinA' name='PagFinA'></input>
			<span id="span_error_PagFinA" ><a id="error_PagFinA"></a></span>

			<br>

            <label class="label_FechaPublicacionR">Fecha publicacion revista</label>
			<input type='text' id='FechaPublicacionR' name='FechaPublicacionR'></input>
			<span id="span_error_FechaPublicacionR" ><a id="error_FechaPublicacionR"></a></span>
			
			<br>

			<label id="label_FicheropdfA" class="label_FicheropdfA">Pdf Articulo</label>
			<input type='text' id='FicheropdfA' name='FicheropdfA'></input>
			<span id="span_error_FicheropdfA"><a id="error_FicheropdfA"></a></span>
			<a id="link_FicheropdfA" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_FicheropdfA" class="label_nuevo_FicheropdfA">Nueva Pdf Articulo</label>
			<input type='file' id='nuevo_FicheropdfA' name='nuevo_FicheropdfA'></input>
			<span id="span_error_nuevo_FicheropdfA"><a id="error_nuevo_FicheropdfA"></a></span>
			<br>

			<label class="label_EstadoA">Titulación</label>
				<select id="EstadoA" name='EstadoA'>
					<option class="opcion_Enviado" value="Enviado">Enviado</option>
					<option class="opcion_Revision" value="Revision">Revision</option>
					<option class="opcion_Publicado" value="Publicado">Publicado</option>
				</select>
				<span id="span_error_EstadoA" ><a id="error_EstadoA"></a></span>



		</form>
		`;
		return form_content;
		
	}
	personalize_validate_comprobar_valor_EstadoA(id){
		let estado = document.getElementById(id).value
		if(!this.estadosA.includes(estado)){
			return false
		}
		return true
	}
	personalize_validate_comprobar_ISSN(ISSN) {
    	// Expresión regular para el formato ####-####
		let myISSN = document.getElementById(ISSN).value

    	const numeros = myISSN.replace('-', '').toUpperCase();

    	let suma = 0;
    	for (let i = 0; i < 7; i++) {
    	    suma += parseInt(numeros[i]) * (8 - i);
    	}

    	let resto = suma % 11;
    	let digitoControl = 11 - resto;
    	if (digitoControl === 10) digitoControl = 'X';
    	else if (digitoControl === 11) digitoControl = '0';

    	return numeros[7] === digitoControl.toString();
	}
	personalize_validate_es_vacio(id){
		let elemento = document.getElementById(id).value
		return elemento === ''
	}
	personalize_validate_substring(id, lista){
		let substr = document.getElementById(id).value.toLowerCase()
		if(lista.some(str => str.toLowerCase().includes(substr))){
			return true
		}
		return false
	}
	personalize_validate_formats(id, formatos) {
		for (let p of formatos) {
        	if (this.validations.format(id, p)) {
            return true;
			}
		}
		return false
    }
	/**
 * Recibe el id de un input de tipo text y lo reemplaza por un input de tipo date,
 * conservando su id, name y valor.
 * Se usa cuando se quiere restaurar el campo de fecha original.
 * 
 * @param {String} id El id del input text que se quiere reemplazar
 */
	replaceTextXDate(id) {
    var input = document.getElementById(id);
    if (!input) {
        console.error("No se encontró el elemento con id: " + id);
        return;
    }

    input.type = 'date';

    // Crear input oculto que se enviará al backend
    var hiddenInputId = id + "_hidden";
    var hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.id = hiddenInputId;
    hiddenInput.name = input.name; 

    // Insertar el input oculto en el DOM
    input.parentNode.insertBefore(hiddenInput, input.nextSibling);

    // Al enviar el formulario, actualizar el valor oculto en formato DD/MM/YYYY
    input.form.addEventListener('submit', function() {
        if(input.value) {
            var parts = input.value.split('-'); // ['YYYY','MM','DD']
            hiddenInput.value = parts[2] + '/' + parts[1] + '/' + parts[0]; // 'DD/MM/YYYY'
        }
    });
}
	limpiar_campo(id){
		document.getElementById('span_error_' + id).style.display = 'none';
		document.getElementById('error_' + id).className = '';
		if (document.getElementById(id) == null){
			document.getElementById('label_' + id).style.border = '';
		}
		else{
			document.getElementById(id).style.border = '';
		}
	}

	/**********************************************************************************************
		fields validations for ADD
	***********************************************************************************************/

    ADD_CodigoA_validation(){
		if(!this.validations.min_size('CodigoA', 1)){
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_min_size_KO')
			return 'CodigoA_min_size_KO'
		}
		if(!this.validations.max_size('CodigoA', 11)){
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO')
			return 'CodigoA_max_size_KO'
		}
		if(!this.validations.format('CodigoA', '^[0-9]{1,11}$')){
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO')
			return 'CodigoA_format_KO'
		}
		this.dom.mostrar_exito_campo('CodigoA')
        return true
    }
    ADD_AutoresA_validation(){
		if(!this.validations.min_size('AutoresA', 5)){
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_min_size_KO')
			return 'AutoresA_min_size_KO'
		}
		if(!this.validations.max_size('AutoresA', 200)){
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO')
			return 'AutoresA_max_size_KO'
		}
		if(!this.validations.format('AutoresA', '^[a-zA-ZñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ., ]*$')){
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO')
			return 'AutoresA_format_KO'
		}
		this.dom.mostrar_exito_campo('AutoresA')
        return true
    }
    ADD_TituloA_validation(){
		if(!this.validations.min_size('TituloA', 3)){
			this.dom.mostrar_error_campo('TituloA', 'TituloA_min_size_KO')
			return 'TituloA_min_size_KO'
		}
		if(!this.validations.max_size('TituloA', 100)){
			this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO')
			return 'TituloA_max_size_KO'
		}
		if(!this.validations.format('TituloA', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ., ]*$')){
			this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO')
			return 'TituloA_format_KO'
		}
		this.dom.mostrar_exito_campo('TituloA')
        return true
    }
    ADD_TituloR_validation(){
		if(!this.validations.min_size('TituloR', 3)){
			this.dom.mostrar_error_campo('TituloR', 'TituloR_min_size_KO')
			return 'TituloR_min_size_KO'
		}
		if(!this.validations.max_size('TituloR', 100)){
			this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO')
			return 'TituloR_max_size_KO'
		}
		if(!this.validations.format('TituloR', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ., ]*$')){
			this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO')
			return 'TituloR_format_KO'
		}
		this.dom.mostrar_exito_campo('TituloR')
        return true
    }
    ADD_ISSN_validation(){
		if(!this.validations.min_size('ISSN', 9) || !this.validations.max_size('ISSN', 9)){
			this.dom.mostrar_error_campo('ISSN', 'ISSN_size_KO')
			return 'ISSN_size_KO'
		}
		if(!this.validations.format('ISSN', '^[0-9]{4}-[0-9]{3}[0-9X]$')){
			this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO')
			return 'ISSN_format_KO'
		}
		if(!this.personalize_validate_comprobar_ISSN('ISSN')){
			this.dom.mostrar_error_campo('ISSN', 'ISSN_letra_control_KO')
			return 'ISSN_letra_control_KO'
		}
		this.dom.mostrar_exito_campo('ISSN')
        return true
    }
    ADD_VolumenR_validation(){
		if(!this.validations.min_size('VolumenR', 1)){
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_min_size_KO')
			return 'VolumenR_min_size_KO'
		}
		if(!this.validations.max_size('VolumenR', 4)){
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO')
			return 'VolumenR_max_size_KO'
		}
		if(!this.validations.format('VolumenR', '^[a-zA-Z0-9]*$')){
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO')
			return 'VolumenR_format_KO'
		}
		this.dom.mostrar_exito_campo('VolumenR')
        return true
    }
    ADD_PagIniA_validation(){
		this.pagIniCorrecto = false
		if(!this.validations.min_size('PagIniA', 1)){
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_min_size_KO')
			return 'PagIniA_min_size_KO'
		}
		if(!this.validations.max_size('PagIniA', 4)){
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO')
			return 'PagIniA_max_size_KO'
		}
		if(!this.validations.format('PagIniA', '^[0-9]*$')){
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO')
			return 'PagIniA_format_KO'
		}
		let PagFin = document.getElementById('PagFinA').value
		let PaginaFin = parseInt(PagFin)
		let PagIni = parseInt(document.getElementById('PagIniA').value)
		//Da igual que esté vacío porque el parseInt lo convierte a 0 y cualquier valor que
		//tome PagIniA siempre será mayor a 0 por lo que siempre lo pasará
		if(document.getElementById('PagIniA').value > PaginaFin){
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_mayor_PagFinA_KO')
			return 'PagIniA_mayor_PagFinA_KO'
		}
		this.pagIniCorrecto = true
		if(this.pagFinCorrecto === false){
			this.ADD_PagFinA_validation()
		}
		this.dom.mostrar_exito_campo('PagIniA')
        return true
    }
    ADD_PagFinA_validation(){
		this.pagFinCorrecto = false
		if(!this.validations.min_size('PagFinA', 1)){
			this.dom.mostrar_error_campo('PagFinA', 'PagFinA_min_size_KO')
			return 'PagFinA_min_size_KO'
		}
		if(!this.validations.max_size('PagFinA', 4)){
			this.dom.mostrar_error_campo('PagFinA', 'PagFinA_max_size_KO')
			return 'PagFinA_max_size_KO'
		}
		if(!this.validations.format('PagFinA', '^[0-9]*$')){
			this.dom.mostrar_error_campo('PagFinA', 'PagFinA_format_KO')
			return 'PagFinA_format_KO'
		}
		let PagFin = document.getElementById('PagFinA').value
		let PaginaFin = parseInt(PagFin)
		let PagIni = parseInt(document.getElementById('PagIniA').value)
		if(document.getElementById('PagIniA').value > PaginaFin){
			this.dom.mostrar_error_campo('PagFinA', 'PagFinA_menor_PagIniA_KO')
			return 'PagFinA_menor_PagIniA_KO'
		}
		this.pagFinCorrecto = true
		if(this.pagIniCorrecto === false){
			this.ADD_PagIniA_validation()
		}
		this.dom.mostrar_exito_campo('PagFinA')
        return true
    }
    ADD_FechaPublicacionR_validation(){
		//No se puede usar el min/max size en la fecha por lo que con una expresión regular
		//de este tipo es fácil comprobar si excede el límite o no
		if(!this.validations.format('FechaPublicacionR','^.{10}$')){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_size_KO')
			return 'FechaPublicacionR_size_KO'
		}
		if(!this.validations.format('FechaPublicacionR', '^[0-9]{4}-[0-9]{2}-[0-9]{2}$')){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO')
			return 'FechaPublicacionR_format_KO'
		}
		let fechaSeparada = document.getElementById('FechaPublicacionR').value.split('-')
		let dia = parseInt(fechaSeparada[2])
		let mes = parseInt(fechaSeparada[1])
		let anho = parseInt(fechaSeparada[0])
		if(!(mes > 0 && mes <= 12)){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_mes_invalido_KO')
			return 'FechaPublicacionR_mes_invalido_KO'
		}
		if(!(dia > 0 && dia <= 31)){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_dia_invalido_KO')
			return 'FechaPublicacionR_dia_invalido_KO'
		}
		let diaValido = true
		switch(mes){
			case 4:
			case 6:
			case 9:
			case 11:
				if(dia > 30){
					diaValido = false;
				}
				break;
			case 2:
				if(dia >= 30){
					diaValido = false
				}
				else if(dia == 29){
					if(!((anho % 4 === 0 && anho % 100 != 0) || anho % 400 === 0)){
						diaValido = false
					}
				}
				break;
		}
		if(!diaValido){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_dia_invalido_KO')
			return 'FechaPublicacionR_dia_invalido_KO'
		}
		this.dom.mostrar_exito_campo('FechaPublicacionR')
        return true
    }
	ADD_nuevo_FicheropdfA_validation(){
		if(!this.validations.not_exist_file('nuevo_FicheropdfA')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_empty_file_KO')
			return 'nuevo_FicheropdfA_empty_file_KO'
		}
		if(!this.validations.format_name_file('nuevo_FicheropdfA', '^.{7,}$')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_min_size_KO')
			return 'nuevo_FicheropdfA_name_min_size_KO'
		}
		if(this.validations.format_name_file('nuevo_FicheropdfA', '^.{21,}$')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_max_size_KO')
			return 'nuevo_FicheropdfA_name_max_size_KO'
		}
		if(this.validations.format('nuevo_FicheropdfA', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_acento_KO')
			return 'nuevo_FicheropdfA_name_format_acento_KO'
		}
		if(this.validations.format('nuevo_FicheropdfA', 'ñ|Ñ')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_enhe_KO')
			return 'nuevo_FicheropdfA_name_format_enhe_KO'
		}
		if(this.validations.format('nuevo_FicheropdfA', ' ')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_espacio_KO')
			return 'nuevo_FicheropdfA_name_format_espacio_KO'
		}
		if(!this.validations.format_name_file('nuevo_FicheropdfA', '^[a-zA-Z.]*$')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_KO')
			return 'nuevo_FicheropdfA_name_format_KO'
		}
		if(!this.validations.type_file('nuevo_FicheropdfA', ['application/pdf'])){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_KO')
			return 'nuevo_FicheropdfA_format_KO'
		}
		if(!this.validations.max_size_file('nuevo_FicheropdfA', 2000000)){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_KO')
			return 'nuevo_FicheropdfA_max_size_KO'
		}
		this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
		return true
	}
	
    ADD_FicheropdfA_validation(){
        return true
    }
    ADD_EstadoA_validation(){
		if(!this.personalize_validate_comprobar_valor_EstadoA('EstadoA')){
			this.dom.mostrar_error_campo('EstadoA', 'EstadoA_invalid_KO')
			return 'EstadoA_invalid_KO'
		}
		this.dom.mostrar_exito_campo('EstadoA')
        return true
    }




	


	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	ADD_submit_articulo(){

		let result = (
					(this.ADD_AutoresA_validation() &
					(this.ADD_TituloA_validation()) &
					(this.ADD_TituloR_validation()) &
					(this.ADD_ISSN_validation()) &
					(this.ADD_VolumenR_validation()) &
					(this.ADD_PagIniA_validation()) &
					(this.ADD_PagFinA_validation()) &
					(this.ADD_FechaPublicacionR_validation()) &
					(this.ADD_nuevo_FicheropdfA_validation()) &
					(this.ADD_FicheropdfA_validation()) &
					(this.ADD_EstadoA_validation()))
					)
		
		result = Boolean(result);

		return result;	


		}
	EDIT_CodigoA_validation(){
        return this.ADD_CodigoA_validation()
    }
    EDIT_AutoresA_validation(){
        return this.ADD_AutoresA_validation()
    }
    EDIT_TituloA_validation(){
        return this.ADD_TituloA_validation()
    }
    EDIT_TituloR_validation(){
        return this.ADD_TituloR_validation()
    }
    EDIT_ISSN_validation(){
        return this.ADD_ISSN_validation()
    }
    EDIT_VolumenR_validation(){
        return this.ADD_VolumenR_validation()
    }
    EDIT_PagIniA_validation(){
        return this.ADD_PagIniA_validation()
    }
    EDIT_PagFinA_validation(){
        return this.ADD_PagFinA_validation()
    }
    EDIT_FechaPublicacionR_validation(){
        return this.ADD_FechaPublicacionR_validation()
    }
    EDIT_FicheropdfA_validation(){
		return this.ADD_FicheropdfA_validation()
    }
	EDIT_nuevo_FicheropdfA_validation(){
		if(!this.validations.not_exist_file('nuevo_FicheropdfA')){
			this.dom.mostrar_exito_campo('nuevo_FicheropdfA')
			return true
		}
		if(!this.validations.format_name_file('nuevo_FicheropdfA', '^.{7,}$')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_min_size_KO')
			return 'nuevo_FicheropdfA_name_min_size_KO'
		}
		if(this.validations.format_name_file('nuevo_FicheropdfA', '^.{21,}$')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_max_size_KO')
			return 'nuevo_FicheropdfA_name_max_size_KO'
		}
		if(this.validations.format('nuevo_FicheropdfA', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_acento_KO')
			return 'nuevo_FicheropdfA_name_format_acento_KO'
		}
		if(this.validations.format('nuevo_FicheropdfA', 'ñ|Ñ')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_enhe_KO')
			return 'nuevo_FicheropdfA_name_format_enhe_KO'
		}
		if(this.validations.format('nuevo_FicheropdfA', ' ')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_espacio_KO')
			return 'nuevo_FicheropdfA_name_format_espacio_KO'
		}
		if(!this.validations.format_name_file('nuevo_FicheropdfA', '^[a-zA-Z.]*$')){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_name_format_KO')
			return 'nuevo_FicheropdfA_name_format_KO'
		}
		if(!this.validations.type_file('nuevo_FicheropdfA', ['application/pdf'])){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_format_KO')
			return 'nuevo_FicheropdfA_format_KO'
		}
		if(!this.validations.max_size_file('nuevo_FicheropdfA', 15000000)){
			this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'nuevo_FicheropdfA_max_size_KO')
			return 'nuevo_FicheropdfA_max_size_KO'
		}
		this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
		return true
	}
    EDIT_EstadoA_validation(){
        return this.ADD_EstadoA_validation()
    }
	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	EDIT_submit_articulo(){

		let result = (
					(this.EDIT_CodigoA_validation() &
					(this.EDIT_AutoresA_validation()) &
					(this.EDIT_TituloA_validation()) &
					(this.EDIT_TituloR_validation()) &
					(this.EDIT_ISSN_validation()) &
					(this.EDIT_VolumenR_validation()) &
					(this.EDIT_PagIniA_validation()) &
					(this.EDIT_PagFinA_validation()) &
					(this.EDIT_FechaPublicacionR_validation()) &
					(this.EDIT_FicheropdfA_validation()) &
					(this.EDIT_nuevo_FicheropdfA_validation()) &
					(this.EDIT_EstadoA_validation()))
					)
		
		result = Boolean(result);
		
		return result;	


	}
	SEARCH_CodigoA_validation(){
		if(this.personalize_validate_es_vacio('CodigoA')){
			this.limpiar_campo('CodigoA')
			return true
		}
		if(!this.validations.max_size('CodigoA', 11)){
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO')
			return 'CodigoA_max_size_KO'
		}
		if(!this.validations.format('CodigoA', '^[0-9]{1,11}$')){
			this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO')
			return 'CodigoA_format_KO'
		}
		this.dom.mostrar_exito_campo('CodigoA')
        return true
    }
    SEARCH_AutoresA_validation(){
		if(this.personalize_validate_es_vacio('AutoresA')){
			this.limpiar_campo('AutoresA')
			return true
		}
		if(!this.validations.max_size('AutoresA', 200)){
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO')
			return 'AutoresA_max_size_KO'
		}
		if(!this.validations.format('AutoresA', '^[a-zA-ZñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ., ]*$')){
			this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO')
			return 'AutoresA_format_KO'
		}
		this.dom.mostrar_exito_campo('AutoresA')
        return true
    }
    SEARCH_TituloA_validation(){
		if(this.personalize_validate_es_vacio('TituloA')){
			this.limpiar_campo('TituloA')
			return true
		}
		if(!this.validations.max_size('TituloA', 100)){
			this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO')
			return 'TituloA_max_size_KO'
		}
		if(!this.validations.format('TituloA', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ., ]*$')){
			this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO')
			return 'TituloA_format_KO'
		}
		this.dom.mostrar_exito_campo('TituloA')
        return true
    }
    SEARCH_TituloR_validation(){
		if(this.personalize_validate_es_vacio('TituloR')){
			this.limpiar_campo('TituloR')
			return true
		}
		if(!this.validations.max_size('TituloR', 100)){
			this.dom.mostrar_error_campo('TituloR', 'TituloR_max_size_KO')
			return 'TituloR_max_size_KO'
		}
		if(!this.validations.format('TituloR', '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ., ]*$')){
			this.dom.mostrar_error_campo('TituloR', 'TituloR_format_KO')
			return 'TituloR_format_KO'
		}
		this.dom.mostrar_exito_campo('TituloR')
        return true
    }
    SEARCH_ISSN_validation(){
		if(this.personalize_validate_es_vacio('ISSN')){
			this.limpiar_campo('ISSN')
			return true
		}
		if(!this.validations.max_size('ISSN', 9)){
			this.dom.mostrar_error_campo('ISSN', 'ISSN_size_KO')
			return 'ISSN_size_KO'
		}
		const patrones = [
    		'^[0-9]{0,4}-[0-9]{1,3}[0-9X]', //ISSNs Enteros o del tipo -123X -1234 1234 123-123 o -
			'^[0-9]{1,3}[0-9X]?$', //Los que no tienen guion, con o sin letra de control
			'^[0-9]{0,3}[0-9X]$'
  			];
		if(!this.personalize_validate_formats('ISSN', patrones)){
			this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO')
			return 'ISSN_format_KO'
		}
		let tam = document.getElementById('ISSN').value.length
		if(tam === 9){
			if(!this.personalize_validate_comprobar_ISSN('ISSN')){
				this.dom.mostrar_error_campo('ISSN', 'ISSN_letra_control_KO')
				return 'ISSN_letra_control_KO'
			}
		}
		this.dom.mostrar_exito_campo('ISSN')
        return true
    }
    SEARCH_VolumenR_validation(){
		if(this.personalize_validate_es_vacio('VolumenR')){
			this.limpiar_campo('VolumenR')
			return true
		}
		if(!this.validations.max_size('VolumenR', 4)){
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_max_size_KO')
			return 'VolumenR_max_size_KO'
		}
		if(!this.validations.format('VolumenR', '^[a-zA-Z0-9]*$')){
			this.dom.mostrar_error_campo('VolumenR', 'VolumenR_format_KO')
			return 'VolumenR_format_KO'
		}
		this.dom.mostrar_exito_campo('VolumenR')
        return true
    }
    SEARCH_PagIniA_validation(){
		this.pagIniCorrecto = false 
		if(this.personalize_validate_es_vacio('PagIniA')){
			this.limpiar_campo('PagIniA')
			return true
		}
		if(!this.validations.max_size('PagIniA', 4)){
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_max_size_KO')
			return 'PagIniA_max_size_KO'
		}
		if(!this.validations.format('PagIniA', '^[0-9]*$')){
			this.dom.mostrar_error_campo('PagIniA', 'PagIniA_format_KO')
			return 'PagIniA_format_KO'
		}
		let PaginaInicio = document.getElementById('PagIniA').value
		let PagFin = document.getElementById('PagFinA').value
		//Solo se debería de comprobar si ambos tienen el tamaño máximo ya que si
		//PagIniA = 3 y PagFinA = 2 podría ser inicio 300 y fin 2000
		//Solo puede asegurarse si se escribe 0003 y 0002 por ejemplo
		if(PaginaInicio.length === 4 && PagFin.length === 4){
			let PagIni = parseInt(PaginaInicio)
			let PaginaFin = parseInt(PagFin)
			if(document.getElementById('PagIniA').value > PaginaFin){
				this.dom.mostrar_error_campo('PagIniA', 'PagIniA_mayor_PagFinA_KO')
				return 'PagIniA_mayor_PagFinA_KO'
			}
		}
		this.pagIniCorrecto = true
		if(this.pagFinCorrecto === false){
			this.SEARCH_PagFinA_validation()
		}
		this.dom.mostrar_exito_campo('PagIniA')
        return true
    }
    SEARCH_PagFinA_validation(){
		this.pagFinCorrecto = false
		if(this.personalize_validate_es_vacio('PagFinA')){
			this.limpiar_campo('PagFinA')
			return true
		}
		if(!this.validations.max_size('PagFinA', 4)){
			this.dom.mostrar_error_campo('PagFinA', 'PagFinA_max_size_KO')
			return 'PagFinA_max_size_KO'
		}
		if(!this.validations.format('PagFinA', '^[0-9]*$')){
			this.dom.mostrar_error_campo('PagFinA', 'PagFinA_format_KO')
			return 'PagFinA_format_KO'
		}
		let PaginaInicio = document.getElementById('PagIniA').value
		let PagFin = document.getElementById('PagFinA').value
		if(PaginaInicio.length === 4 && PagFin.length === 4){
			let PagIni = parseInt(PaginaInicio)
			let PaginaFin = parseInt(PagFin)
			if(document.getElementById('PagIniA').value > PaginaFin){
				this.dom.mostrar_error_campo('PagFinA', 'PagFinA_menor_PagIniA_KO')
				return 'PagFinA_menor_PagIniA_KO'
			}
		}
		this.pagFinCorrecto = true
		if(this.pagIniCorrecto === false){
			this.SEARCH_PagIniA_validation()
		}
		this.dom.mostrar_exito_campo('PagFinA')
        return true
    }
    SEARCH_FechaPublicacionR_validation(){
		if(this.personalize_validate_es_vacio('FechaPublicacionR')){
			this.limpiar_campo('FechaPublicacionR')
			return true
		}
		if(!this.validations.max_size('FechaPublicacionR', 10)){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_size_KO')
			return 'FechaPublicacionR_size_KO'
		}
		let patrones = [
    		'^[0-9]{0,2}/[0-9]{0-2}$', //Fechas del estilo /00/00  00/ /00 o /
			'^[0-9]{0,2}/[0-9]{2}/[0-9]{0,4}$', //Fechas del estilo 00/00/0000  00/00  /00/0000 o /00/
			'^[0-9]{0,2}/[0-9]{0,4}$', //Fechas del estilo 00/00 00/0000 0/0 etc
			'^[0-9]{0,4}$',
  			];
		if(!this.personalize_validate_formats('FechaPublicacionR', patrones)){
			this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO')
			return 'FechaPublicacionR_format_KO'
		}
		let fecha = document.getElementById('FechaPublicacionR').value
		if(fecha.length === 10){
			if(!this.validations.format('FechaPublicacionR', '^[0-9]{2}/[0-9]{2}/[0-9]{4}$')){
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_format_KO')
				return 'FechaPublicacionR_format_KO'
			}
			let fechaSeparada = fecha.split('/')
			let dia = parseInt(fechaSeparada[0])
			let mes = parseInt(fechaSeparada[1])
			let anho = parseInt(fechaSeparada[2])
			if(!(mes > 0 && mes <= 12)){
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_mes_invalido_KO')
				return 'FechaPublicacionR_mes_invalido_KO'
			}
			if(!(dia > 0 && dia <= 31)){
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_dia_invalido_KO')
				return 'FechaPublicacionR_dia_invalido_KO'
			}
			let diaValido = true
			switch(mes){
				case 4:
				case 6:
				case 9:
				case 11:
					if(dia > 30){
						diaValido = false;
					}
					break;
				case 2:
					if(dia >= 30){
						diaValido = false
					}
					else if(dia == 29){
						if(!((anho % 4 === 0 && anho % 100 != 0) || anho % 400 === 0)){
							diaValido = false
						}
					}
					break;
			}
			if(!diaValido){
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_dia_invalido_KO')
				return 'FechaPublicacionR_dia_invalido_KO'
			}
		}
		else{
			//Caso especial no contempleado por el resto de condiciones
			if(this.validations.format('FechaPublicacionR', '^00/0{0,2}$')){
				this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_dia_invalido_KO')
				return 'FechaPublicacionR_dia_invalido_KO'
			}
			//Comprobar si el mes es válido, se puede saber cual es el mes si
			//1 Hay dos / por ejemplo /10/ 10 es el mes o 20/08/ 8 es el mes
			//2 Después de un / hay un número de más de 2 dígitos, entonces sabemos que ese es el
			//año y por ende el anterior es el mes
			if(this.validations.format('FechaPublicacionR', '^[0-9]{2}/[0-9]{3,4}$')){
				let mes = fecha.split('/')[0]
				if(!(mes > 0 && mes <= 12)){
					this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_mes_invalido_KO')
					return 'FechaPublicacionR_mes_invalido_KO'
				}
			}
			if(this.validations.format('FechaPublicacionR', '^[0-9]{0,2}/[0-9]{2}/[0-9]{0,4}$')){
				let mes = fecha.split('/')[1]
				if(!(mes > 0 && mes <= 12)){
					this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_mes_invalido_KO')
					return 'FechaPublicacionR_mes_invalido_KO'
				}
			}
			
			//Comprobar si el día es válido
			//Solo se puede saber el día con un substring si hay explícitamente dos / y el día está entero
			//Por ejemplo en 03/02/ El día es 3
			if(this.validations.format('FechaPublicacionR', '^[0-9]{2}/[0-9]{2}/[0-9]{0,4}$')){
				let valoresFecha = fecha.split('/')
				let dia = valoresFecha[0]
				let mes = valoresFecha[1]
				if(!(dia > 0 && dia <= 31)){
					this.dom.mostrar_error_campo('FechaPublicacionR', 'FechaPublicacionR_dia_invalido_KO')
					return 'FechaPublicacionR_dia_invalido_KO'
				}
				switch(mes){
					case 4:
					case 6:
					case 9:
					case 11:
						if(dia > 30){
							diaValido = false;
						}
						break;
					case 2:
						if(dia >= 30){
							diaValido = false
						}
						break;
				}
			}
		}
		
		this.dom.mostrar_exito_campo('FechaPublicacionR')
        return true
    }
	SEARCH_nuevo_FicheropdfA_validation(){
		return true
	}
	
    SEARCH_FicheropdfA_validation(){
		if(this.personalize_validate_es_vacio('FicheropdfA')){
			this.limpiar_campo('FicheropdfA')
			return true
		}
		if(!this.validations.max_size('FicheropdfA', 20)){
			this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_max_size_KO')
			return 'FicheropdfA_max_size_KO'
		}
		if(this.validations.format('FicheropdfA', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo('FicheropdfA', 'icheropdfA_format_acento_KO')
			return 'FicheropdfA_format_acento_KO'
		}
		if(this.validations.format('FicheropdfA', 'ñ|Ñ')){
			this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_format_enhe_KO')
			return 'FicheropdfA_format_enhe_KO'
		}
		if(this.validations.format('FicheropdfA', ' ')){
			this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_format_espacio_KO')
			return 'FicheropdfA_format_espacio_KO'
		}
		if(!this.validations.format('FicheropdfA', '^[a-zA-Z.]*$')){
			this.dom.mostrar_error_campo('FicheropdfA', 'FicheropdfA_format_KO')
			return 'FicheropdfA_format_KO'
		}
        return true
    }
    SEARCH_EstadoA_validation(){
		if(this.personalize_validate_es_vacio('EstadoA')){
			this.limpiar_campo('EstadoA')
			return true
		}
		if(!this.personalize_validate_substring('EstadoA', this.estadosA)){
			this.dom.mostrar_error_campo('EstadoA', 'EstadoA_invalid_KO')
			return 'EstadoA_invalid_KO'
		}
		this.dom.mostrar_exito_campo('EstadoA')
        return true
    }

	createForm_EDIT(fila){
		//Se reinician para que no interfieran entre formularios
		this.pagIniCorrecto = true
		this.pagFinCorrecto = true

		// limpiar poner titulo y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_EDIT');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.EDIT_submit_'+this.nombreentidad+'()');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
		
		// modificar presentacion (en este caso concreto para fecha)
		//fila.FechaPublicacionR = this.mostrarcambioatributo('FechaPublicacionR',fila.FechaPublicacionR);
		//Si la fecha es inválida no se mostrará
		//Por ejemplo con 2000-00-10 aparecerá vacía
		this.replaceTextXDate('FechaPublicacionR')

		// rellenar valores
		this.dom.rellenarvaloresform(fila);
		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');
		document.getElementById('FechaPublicacionR_hidden').removeAttribute('onblur');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('CodigoA','readonly','true');
		this.dom.assign_property_value('FicheropdfA','readonly','true');
		

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();

	}
	SEARCH_submit_articulo(){
		let result = (
					(this.SEARCH_CodigoA_validation() &
					(this.SEARCH_AutoresA_validation()) &
					(this.SEARCH_TituloA_validation()) &
					(this.SEARCH_TituloR_validation()) &
					(this.SEARCH_ISSN_validation()) &
					(this.SEARCH_VolumenR_validation()) &
					(this.SEARCH_PagIniA_validation()) &
					(this.SEARCH_PagFinA_validation()) &
					(this.SEARCH_FechaPublicacionR_validation()) &
					(this.SEARCH_FicheropdfA_validation()) &
					(this.SEARCH_nuevo_FicheropdfA_validation()) &
					(this.SEARCH_EstadoA_validation()))
					)
		
		result = Boolean(result);
		
		return result;	
	}
	//Existe porque hay gente que mete nulls en la BD
	DELETE_submit_articulo(){
		return true
	}
	createForm_DELETE(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
	
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_DELETE');

		// rellenar y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.DELETE_submit_'+this.nombreentidad+'()');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_FicheropdfA (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_FicheropdfA');
		this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
		
		// modificar presentacion (en este caso concreto para fecha)
		fila.FechaPublicacionR = this.mostrarcambioatributo('FechaPublicacionR',fila.FechaPublicacionR);

		//Le quitamos el onblur al hidden porque no tiene sentido
		//document.getElementById('FechaPublicacionR_hidden').removeAttribute('onblur');
		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

		setLang();
	}

	createForm_SHOWCURRENT(fila){
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SHOWCURRENT');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_FicheropdfA (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_FicheropdfA');
		this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/'+fila.FicheropdfA);
		
		// modificar presentacion (en este caso concreto para fecha)
		fila.FechaPublicacionR = this.mostrarcambioatributo('FechaPublicacionR',fila.FechaPublicacionR);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		//this.colocarboton('SHOWCURRENT');

		setLang();

	}

	createForm_ADD(){
		//Se reinician para que no interfieran entre formularios
		this.pagIniCorrecto = null
		this.pagFinCorrecto = null

		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_ADD');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.ADD_submit_'+this.nombreentidad+'()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
		
		//Ocultar CodigoA ya que lo asigna automáticamente la base de datos
		this.dom.hide_element_form('CodigoA');
	
		// poner no visible el campo FicheropdfA (solo se puede subir fichero)
		this.dom.hide_element_form('FicheropdfA');
		this.dom.hide_element('link_FicheropdfA');

		this.replaceTextXDate('FechaPublicacionR')

		// rellenar valores
		// en ADD no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');
		//Le quitamos el onblur al hidden porque no tiene sentido
		document.getElementById('FechaPublicacionR_hidden').removeAttribute('onblur');
		// poner inactivos los campos correspondientes
		// en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

		// colocar boton de submit
		this.dom.colocarboton('ADD');
		setLang();
	}

	createForm_SEARCH(){
		//Se reinician para que no interfieran entre formularios
		this.pagIniCorrecto = null
		this.pagFinCorrecto = null

		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SEARCH');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.SEARCH_submit_'+this.nombreentidad+'()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
		
		// poner no visible el campo FicheropdfA (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_FicheropdfA');
		this.dom.hide_element('link_FicheropdfA');

		// reemplazar enumerados por texto
		// EstadoA que es un select
		this.dom.replaceSelectXEmptyInput('EstadoA');
		// menu_persona que es un checkbox
		//this.dom.replaceEnumNameXEmptyInput('menu_persona');
		// genero_persona que es un radio
		//this.dom.replaceEnumNameXEmptyInput('genero_persona');
		
		// rellenar valores
		// en SEARCH no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','SEARCH');

		// colocar boton de submit
		this.dom.colocarboton('SEARCH');

		setLang();
		
	}

	/**
	 * modifica el formato de visualización de un atributo concreto y se devuelve el valor modificado
	 * en el caso de solicitar cambio de formato para un atributo no implementado se lanza una alerta
	 * 
	 * @param {String} atributo string con el nombre del atributo a modificar su valor
	 * @param {String} valorentrada string con el valor de entrada a modificar
	 * @returns 
	 */
	mostrarcambioatributo(atributo, valorentrada){
		
		switch (atributo){
			case 'FechaPublicacionR':
				var elementos = valorentrada.split('-');

				var day = elementos[2];
				var month = elementos[1];
				var year = elementos[0];
				
				return day+'/'+month+'/'+year;
				break;
			case 'FicheropdfA':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_FicheropdfA" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
			case 'default':
				alert('no existe mostrar especial para ese atributo');
				break;
		}

	}





	//
	//submits
	//

}
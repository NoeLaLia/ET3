export default class alumnograduacion extends EntidadAbstracta{

	constructor(esTest){
		super();
		
		this.titulaciones = ['PCEO', 'GREI', 'GRIA', 'MEI', 'MIA']
		//definicion de atributos a mostrarn en la tabla de muestra de tuplas al entrar en la gestion de la entidad
		this.columnasamostrar = ['alumnograduacion_dni','alumnograduacion_titulacion','alumnograduacion_nombre'];
		//definicion de atributos a cambiar su visualización
		this.mostrarespecial = ['alumnograduacion_password', 'alumnograduacion_fotoacto'];
		
		// definicion de los atributos del formulario (Necesario para test de unidad)
		this.attributes = [  'alumnograduacion_login',
                                'alumnograduacion_password',
                                'alumnograduacion_nombre',
                                'alumnograduacion_apellidos',
                                'alumnograduacion_titulacion',
                                'alumnograduacion_dni',
                                'alumnograduacion_telefono',
                                'alumnograduacion_direccion',
                                'alumnograduacion_email',
								'alumnograduacion_fotoacto',
								'nuevo_alumnograduacion_fotoacto'
                            ];
							
	}	

	/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation(){
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
	personalize_validate_comprobar_valor_titulacion(id){
		let titulacion = document.getElementById(id).value
		if(!this.titulaciones.includes(titulacion)){
			return false
		}
		return true
	}
	/*El min_size no funciona con textarea*/
	personalize_validate_min_size_textarea(id, minsize){
	let elemento = document.getElementById(id);
	
	if(elemento.tagName === 'TEXTAREA'){
		let valorelemento = elemento.value.trim();
		return valorelemento.length >= minsize;
	}

	// Por si acaso
	return this.validations.min_size(id, minsize);
	}
	personalize_validate_max_size_textarea(id, maxsize){
	let elemento = document.getElementById(id);

	if (elemento.tagName === 'TEXTAREA') {
		let valorelemento = elemento.value.trim();
		return valorelemento.length <= maxsize;
	}

	// Por si acaso
	return this.validations.max_size(id, maxsize);
	}

	personalize_validate_format_textarea(id, exprreg){
	let elemento = document.getElementById(id);

	if (elemento.tagName === 'TEXTAREA') {
		let valor = elemento.value.trim();
		let expresionregular = new RegExp(exprreg);
		return expresionregular.test(valor);
	}

	// Por si acaso
	return this.validations.format(id, exprreg);
	}
	personalize_validate_es_vacio(id){
		let elemento = document.getElementById(id).value
		return elemento === ''
	}
	personalize_validate_substring(id, lista){
		let substr = document.getElementById(id).value.toUpperCase()
		if(lista.some(str => str.includes(substr))){
			return true
		}
		return false
	}
	personalize_validate_SubstringDeDNIoNIE(id) {
  		const patrones = [
    		'^[0-9]{0,8}[A-Z]?$',     // DNI
			'^[XYZ]?[0-9]{1-7}[A-Z]?$',// NIE Evita valores como XZ
			'^[XYZ][0-9]{1,7}[A-Z]$', 
    		'^[XYZ]?[0-9]{1,7}[A-Z]$',
			'^[XYZ]$',
			'^[A-Z]$'
  			];
		for (let p of patrones) {
        	if (this.validations.format(id, p)) {
            return true;
        	}
    	}
		return false
	}
	/*
	Resetea el los códigos de error o de validez en los campos del id que se le pasa.
	Se utiliza en el search cuando está vacío.
	Aunque un valor vacío en un search es técnicamente correcto esto implica que habría que marcar
	todos los valores del search en verde nada más introducir el cuestionario ya que serían correctos
	y no tendría mucho sentido llenar de colores un cuestionario vacío así que para mantener la
	coherencia de que los valores vacíos no tienen color se resetea el valor cuando ocurre esto en vez
	de simplenente dejarlo en verde
	*/
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

	ADD_alumnograduacion_login_validation(){
        if(!this.validations.min_size('alumnograduacion_login', 4)){
            this.dom.mostrar_error_campo('alumnograduacion_login','alumnograduacion_login_min_size_KO');
            return 'alumnograduacion_login_min_size_KO'
        }
		if(!this.validations.max_size('alumnograduacion_login', 15)){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return 'alumnograduacion_login_max_size_KO';
		}
		if(this.validations.format('alumnograduacion_login', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_acento_KO')
			return 'alumnograduacion_login_format_acento_KO'
		}
		if(this.validations.format('alumnograduacion_login', 'ñ|Ñ')){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_enhe_KO')
			return 'alumnograduacion_login_format_enhe_KO'
		}
		if (!(this.validations.format('alumnograduacion_login', '^[A-Za-z]*$'))){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_KO')
			return 'alumnograduacion_login_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true
    }
	/*alfabéticos y espacios sin acentos ni ñ, min 8 max 100 */
	ADD_alumnograduacion_password_validation(){
		if(!this.validations.min_size('alumnograduacion_password', 8)){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_min_size_KO')
			return 'alumnograduacion_password_min_size_KO'
		}
		if(!this.validations.max_size('alumnograduacion_password', 64)){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO')
			return 'alumnograduacion_password_max_size_KO'
		}
		if(this.validations.format('alumnograduacion_password', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_acento_KO')
			return 'alumnograduacion_password_format_acento_KO'
		}
		if(this.validations.format('alumnograduacion_password', 'ñ|Ñ')){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_enhe_KO')
			return 'alumnograduacion_password_format_enhe_KO'
		}
		if (!(this.validations.format('alumnograduacion_password', '^[A-Za-z ]*$'))){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_KO')
			return 'alumnograduacion_password_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_password');
		return true
	}
	/*alfabéticos con acentos, ñ y espacios, min 2 max 25*/
	ADD_alumnograduacion_nombre_validation(){
		if(!this.validations.min_size('alumnograduacion_nombre', 2)){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_min_size_KO')
			return 'alumnograduacion_nombre_min_size_KO'
		}
		if(!this.validations.max_size('alumnograduacion_nombre', 25)){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO')
			return 'alumnograduacion_nombre_max_size_KO'
		}
		if(!this.validations.format('alumnograduacion_nombre', '^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO')
			return 'alumnograduacion_nombre_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_nombre');
		return true
	}
	/*alfabéticos con acentos, ñ y espacios, min 2 max 35*/
	ADD_alumnograduacion_apellidos_validation(){
		if(!this.validations.min_size('alumnograduacion_apellidos', 2)){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_min_size_KO')
			return 'alumnograduacion_apellidos_min_size_KO'
		}
		if(!this.validations.max_size('alumnograduacion_apellidos', 35)){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO')
			return 'alumnograduacion_apellidos_max_size_KO'
		}
		if(!this.validations.format('alumnograduacion_apellidos', '^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO')
			return 'alumnograduacion_apellidos_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
		return true
	}
	/*valores posibles: 'GREI','GRIA','MEI','MIA','PCEO'*/
	ADD_alumnograduacion_titulacion_validation(){
		let titulacion = document.getElementById('alumnograduacion_titulacion').value
		if(titulacion.length < 3){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_min_size_KO')
			return 'alumnograduacion_titulacion_min_size_KO'
		}
		if(titulacion.length > 4){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_max_size_KO')
			return 'alumnograduacion_titulacion_max_size_KO'
		}
		if(!this.personalize_validate_comprobar_valor_titulacion('alumnograduacion_titulacion')){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_invalid_KO')
			return 'alumnograduacion_titulacion_invalid_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_titulacion');
		return true
	}
	/*formato nif o nie con letras válidas para los números*/
	ADD_alumnograduacion_dni_validation(){
		if(!this.validations.min_size('alumnograduacion_dni', 9)){
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_min_size_KO')
			return 'alumnograduacion_dni_min_size_KO'
		}
		if(!this.validations.max_size('alumnograduacion_dni',9)){
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO')
			return 'alumnograduacion_dni_max_size_KO'
		}
		switch (this.personalize_dni_nie()) {
  			case 'dni_nie_format_KO':
    			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO')
    			return 'alumnograduacion_dni_format_KO'
  		case 'dni_validate_KO':
    			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_nif_letra_KO')
    			return 'alumnograduacion_dni_nif_letra_KO'
  		case 'nie_validate_KO':
    			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_nie_letra_KO')
    			return 'alumnograduacion_dni_nie_letra_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_dni');
		return true
	}
	/*9 dígitos (0-9)*/
	ADD_alumnograduacion_telefono_validation(){
		if(!this.validations.min_size('alumnograduacion_telefono', 9)){
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_min_size_KO');
			return 'alumnograduacion_telefono_min_size_KO'
		}
		if(!this.validations.max_size('alumnograduacion_telefono', 9)){
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
			return 'alumnograduacion_telefono_max_size_KO'
		}
		if(!this.validations.format('alumnograduacion_telefono', '^[0-9]{9}$')){
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO')
			return 'alumnograduacion_telefono_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_telefono');
		return true
	}
	/*alfanuméricos con acentos y ñ y espacios*/
	ADD_alumnograduacion_direccion_validation(){
		if(!this.personalize_validate_min_size_textarea('alumnograduacion_direccion', 5)){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_min_size_KO')
			return 'alumnograduacion_direccion_min_size_KO'
		}
		if(!this.personalize_validate_max_size_textarea('alumnograduacion_direccion', 100)){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO')
			return 'alumnograduacion_direccion_max_size_KO'
		}
		if(!this.personalize_validate_format_textarea('alumnograduacion_direccion', '^[a-zA-Z0-9áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛñÑÔ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO')
			return 'alumnograduacion_direccion_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_direccion');
		return true
	}
	/*formato email*/
	ADD_alumnograduacion_email_validation(){
		if(!this.validations.min_size('alumnograduacion_email', 5)){
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_min_size_KO')
			return 'alumnograduacion_email_min_size_KO'
		}
		if(!this.validations.max_size('alumnograduacion_email', 40)){
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO')
			return 'alumnograduacion_email_max_size_KO'
		}
		if(!this.validations.format('alumnograduacion_email', '^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-]{2,}\\.[a-zA-Z]{2,}$')){
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO')
			return 'alumnograduacion_email_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_email');
		return true
	}
	/*alfabéticos (sin acentos ni ñ ni espacios) y “.”. Min 7 max 100. Sólo jpg y tamaño de
	fichero menor de 2.000.000 bytes.*/
	ADD_alumnograduacion_fotoacto_validation(){
		return true
	}
	ADD_nuevo_alumnograduacion_fotoacto_validation(){
		if(!this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto')){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_empty_file_KO')
			return 'nuevo_alumnograduacion_fotoacto_empty_file_KO'
		}
		if(!this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^.{7,}$')){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_min_size_KO')
			return 'nuevo_alumnograduacion_fotoacto_name_min_size_KO'
		}
		if(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^.{41,}$')){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_max_size_KO')
			return 'nuevo_alumnograduacion_fotoacto_name_max_size_KO'
		}
		if(this.validations.format('nuevo_alumnograduacion_fotoacto', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_acento_KO')
			return 'nuevo_alumnograduacion_fotoacto_name_format_acento_KO'
		}
		if(this.validations.format('nuevo_alumnograduacion_fotoacto', 'ñ|Ñ')){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_enhe_KO')
			return 'nuevo_alumnograduacion_fotoacto_name_format_enhe_KO'
		}
		if(this.validations.format('nuevo_alumnograduacion_fotoacto', ' ')){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_espacio_KO')
			return 'nuevo_alumnograduacion_fotoacto_name_format_espacio_KO'
		}
		if(!this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z.]*$')){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_KO')
			return 'nuevo_alumnograduacion_fotoacto_name_format_KO'
		}
		if(!this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg'])){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_KO')
			return 'nuevo_alumnograduacion_fotoacto_format_KO'
		}
		if(!this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000)){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_KO')
			return 'nuevo_alumnograduacion_fotoacto_max_size_KO'
		}
		this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
		return true
	}


	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	ADD_submit_alumnograduacion(){

		let result = (
					(this.ADD_alumnograduacion_login_validation() &
					(this.ADD_alumnograduacion_password_validation()) &
					(this.ADD_alumnograduacion_nombre_validation()) &
					(this.ADD_alumnograduacion_apellidos_validation()) &
					(this.ADD_alumnograduacion_titulacion_validation()) &
					(this.ADD_alumnograduacion_dni_validation()) &
					(this.ADD_alumnograduacion_telefono_validation()) &
					(this.ADD_alumnograduacion_direccion_validation()) &
					(this.ADD_alumnograduacion_email_validation()) &
					(this.ADD_alumnograduacion_fotoacto_validation()) &
					(this.ADD_nuevo_alumnograduacion_fotoacto_validation()))
					)
		
		result = Boolean(result);

		
		return result;	


		}
		EDIT_alumnograduacion_login_validation(){
			return this.ADD_alumnograduacion_login_validation()
		}
		EDIT_alumnograduacion_password_validation(){
			return this.ADD_alumnograduacion_password_validation()
		}
		EDIT_alumnograduacion_nombre_validation(){
			return this.ADD_alumnograduacion_nombre_validation()
		}
		EDIT_alumnograduacion_apellidos_validation(){
			return this.ADD_alumnograduacion_apellidos_validation()
		}
		EDIT_alumnograduacion_titulacion_validation(){
			return this.ADD_alumnograduacion_titulacion_validation()
		}
		EDIT_alumnograduacion_dni_validation(){
			return this.ADD_alumnograduacion_dni_validation()
		}
		EDIT_alumnograduacion_telefono_validation(){
			return this.ADD_alumnograduacion_telefono_validation()
		}
		EDIT_alumnograduacion_direccion_validation(){
			return this.ADD_alumnograduacion_direccion_validation()
		}
		EDIT_alumnograduacion_email_validation(){
			return this.ADD_alumnograduacion_email_validation()
		}
		EDIT_alumnograduacion_fotoacto_validation(){
			return this.ADD_alumnograduacion_fotoacto_validation()
		}
		EDIT_nuevo_alumnograduacion_fotoacto_validation(){
			if(!this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto')){
				this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto')
				return true
			}
			if(!this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^.{7,}$')){
				this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_min_size_KO')
				return 'nuevo_alumnograduacion_fotoacto_name_min_size_KO'
			}
			if(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^.{41,}$')){
				this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_max_size_KO')
				return 'nuevo_alumnograduacion_fotoacto_name_max_size_KO'
			}
			if(this.validations.format('nuevo_alumnograduacion_fotoacto', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
				this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_acento_KO')
				return 'nuevo_alumnograduacion_fotoacto_name_format_acento_KO'
			}
			if(this.validations.format('nuevo_alumnograduacion_fotoacto', 'ñ|Ñ')){
				this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_enhe_KO')
				return 'nuevo_alumnograduacion_fotoacto_name_format_enhe_KO'
			}
			if(this.validations.format('nuevo_alumnograduacion_fotoacto', ' ')){
				this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_espacio_KO')
				return 'nuevo_alumnograduacion_fotoacto_name_format_espacio_KO'
			}
			if(!this.validations.format_name_file('nuevo_alumnograduacion_fotoacto', '^[a-zA-Z.]*$')){
				this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_name_format_KO')
				return 'nuevo_alumnograduacion_fotoacto_name_format_KO'
			}
			if(!this.validations.type_file('nuevo_alumnograduacion_fotoacto', ['image/jpeg'])){
				this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_format_KO')
				return 'nuevo_alumnograduacion_fotoacto_format_KO'
			}
			if(!this.validations.max_size_file('nuevo_alumnograduacion_fotoacto', 2000000)){
				this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto', 'nuevo_alumnograduacion_fotoacto_max_size_KO')
				return 'nuevo_alumnograduacion_fotoacto_max_size_KO'
			}
			this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
			return true
		}

/*
	EDIT_nuevo_alumnograduacion_fotoacto_validation(){

		if (!(this.validations.not_exist_file('nuevo_alumnograduacion_fotoacto'))){
			this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
			return true;
		}
		if (!(this.validations.max_size_file('nuevo_alumnograduacion_fotoacto',2000))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_max_size_file_KO');
			return "nuevo_alumnograduacion_fotoacto_max_size_file_KO";
		}
		if (!(this.validations.type_file('nuevo_alumnograduacion_fotoacto',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_type_file_KO');
			return "nuevo_alumnograduacion_fotoacto_type_file_KO";
		}
		if (!(this.validations.format_name_file('nuevo_alumnograduacion_fotoacto','[a-zA-Z.]'))){
			this.dom.mostrar_error_campo('nuevo_alumnograduacion_fotoacto','nuevo_alumnograduacion_fotoacto_format_name_file_KO');
			return "nuevo_alumnograduacion_fotoacto_format_name_file_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_alumnograduacion_fotoacto');
		return true;


	}
*/
	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	EDIT_submit_alumnograduacion(){

		let result = (
					(this.EDIT_alumnograduacion_login_validation() &
					(this.EDIT_alumnograduacion_password_validation()) &
					(this.EDIT_alumnograduacion_nombre_validation()) &
					(this.EDIT_alumnograduacion_apellidos_validation()) &
					(this.EDIT_alumnograduacion_titulacion_validation()) &
					(this.EDIT_alumnograduacion_dni_validation()) &
					(this.EDIT_alumnograduacion_telefono_validation()) &
					(this.EDIT_alumnograduacion_direccion_validation()) &
					(this.EDIT_alumnograduacion_email_validation()) &
					(this.EDIT_alumnograduacion_fotoacto_validation()) &
					(this.EDIT_nuevo_alumnograduacion_fotoacto_validation()))
					)
		
		result = Boolean(result);
		return result;	


	}
	SEARCH_alumnograduacion_login_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_login')){
			this.limpiar_campo('alumnograduacion_login')
			return true
		}
		if(!this.validations.max_size('alumnograduacion_login', 15)){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_max_size_KO');
			return 'alumnograduacion_login_max_size_KO';
		}
		if(this.validations.format('alumnograduacion_login', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_acento_KO')
			return 'alumnograduacion_login_format_acento_KO'
		}
		if(this.validations.format('alumnograduacion_login', 'ñ')){
			this.dom.mostrar_error_campo('alumnograduacion_login', 'alumnograduacion_login_format_enhe_KO')
			return 'alumnograduacion_login_format_enhe_KO'
		}
		if (!(this.validations.format('alumnograduacion_login', '^[A-Za-z]*$'))){
			return 'alumnograduacion_login_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_login');
        return true
    }
	/*alfabéticos y espacios sin acentos ni ñ, min 8 max 100 */
	SEARCH_alumnograduacion_password_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_password')){
			this.limpiar_campo('alumnograduacion_password')
			return true
		}
		if(!this.validations.max_size('alumnograduacion_password', 64)){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_max_size_KO')
			return 'alumnograduacion_password_max_size_KO'
		}
		if(this.validations.format('alumnograduacion_password', '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_acento_KO')
			return 'alumnograduacion_password_format_acento_KO'
		}
		if(this.validations.format('alumnograduacion_password', 'ñ|Ñ')){
			this.dom.mostrar_error_campo('alumnograduacion_password', 'alumnograduacion_password_format_enhe_KO')
			return 'alumnograduacion_password_format_enhe_KO'
		}
		if (!(this.validations.format('alumnograduacion_password', '^[A-Za-z ]*$'))){
			return 'alumnograduacion_password_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_password');
		return true
	}
	/*alfabéticos con acentos, ñ y espacios, min 2 max 25*/
	SEARCH_alumnograduacion_nombre_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_nombre')){
			this.limpiar_campo('alumnograduacion_nombre')
			return true
		}
		if(!this.validations.max_size('alumnograduacion_nombre', 25)){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_max_size_KO')
			return 'alumnograduacion_nombre_max_size_KO'
		}
		if(!this.validations.format('alumnograduacion_nombre', '^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_nombre', 'alumnograduacion_nombre_format_KO')
			return 'alumnograduacion_nombre_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_nombre');
		return true
	}
	/*alfabéticos con acentos, ñ y espacios, min 2 max 35*/
	SEARCH_alumnograduacion_apellidos_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_apellidos')){
			this.limpiar_campo('alumnograduacion_apellidos')
			return true
		}
		if(!this.validations.max_size('alumnograduacion_apellidos', 35)){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_max_size_KO')
			return 'alumnograduacion_apellidos_max_size_KO'
		}
		if(!this.validations.format('alumnograduacion_apellidos', '^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_apellidos', 'alumnograduacion_apellidos_format_KO')
			return 'alumnograduacion_apellidos_format_KO'
		}

		this.dom.mostrar_exito_campo('alumnograduacion_apellidos');
		return true
	}
	/*valores posibles: 'GREI','GRIA','MEI','MIA','PCEO'*/
	SEARCH_alumnograduacion_titulacion_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_titulacion')){
			this.limpiar_campo('alumnograduacion_titulacion')
			return true
		}
		let titulacion = document.getElementById('alumnograduacion_titulacion').value
		if(titulacion.length > 4){
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_max_size_KO')
			return 'alumnograduacion_titulacion_max_size_KO'
		}
		if(this.personalize_validate_substring('alumnograduacion_titulacion', this.titulaciones)){
			this.dom.mostrar_exito_campo('alumnograduacion_titulacion')
			return true
		}
		else{
			this.dom.mostrar_error_campo('alumnograduacion_titulacion', 'alumnograduacion_titulacion_invalid_KO')
			return 'alumnograduacion_titulacion_invalid_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_titulacion')
		return true
	}
	/*formato nif o nie con letras válidas para los números*/
	SEARCH_alumnograduacion_dni_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_dni')){
			this.limpiar_campo('alumnograduacion_dni')
			return true
		}
		if(!this.validations.max_size('alumnograduacion_dni',9)){
			this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_max_size_KO')
			return 'alumnograduacion_dni_max_size_KO'
		}
		if(document.getElementById('alumnograduacion_dni').value.length != 9){
			if(this.personalize_validate_SubstringDeDNIoNIE('alumnograduacion_dni')){
				this.dom.mostrar_exito_campo('alumnograduacion_dni')
				return true
			}
			else{
				this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO')
				return 'alumnograduacion_dni_format_KO'
			}
		}
		else{
			switch (this.personalize_dni_nie()) {
  				case 'dni_nie_format_KO':
    				this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_format_KO')
    				return 'alumnograduacion_dni_format_KO'
  			case 'dni_validate_KO':
    				this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_nif_letra_KO')
    				return 'alumnograduacion_dni_nif_letra_KO'
  			case 'nie_validate_KO':
    				this.dom.mostrar_error_campo('alumnograduacion_dni', 'alumnograduacion_dni_nie_letra_KO')
    				return 'alumnograduacion_dni_nie_letra_KO'
			}
		}
		this.dom.mostrar_exito_campo('alumnograduacion_dni')
		return true
	}
	/*9 dígitos (0-9)*/
	SEARCH_alumnograduacion_telefono_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_telefono')){
			this.limpiar_campo('alumnograduacion_telefono')
			return true
		}
		if(!this.validations.max_size('alumnograduacion_telefono', 9)){
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_max_size_KO');
			return 'alumnograduacion_telefono_max_size_KO'
		}
		if(!this.validations.format('alumnograduacion_telefono', '^[0-9]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_telefono', 'alumnograduacion_telefono_format_KO')
			return 'alumnograduacion_telefono_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_telefono')
		return true
	}
	/*alfanuméricos con acentos y ñ y espacios*/
	SEARCH_alumnograduacion_direccion_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_direccion')){
			this.limpiar_campo('alumnograduacion_direccion')
			return true
		}
		if(!this.personalize_validate_max_size_textarea('alumnograduacion_direccion', 100)){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_max_size_KO')
			return 'alumnograduacion_direccion_max_size_KO'
		}
		if(!this.personalize_validate_format_textarea('alumnograduacion_direccion', '^[a-zA-Z0-9áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛñÑ ]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_direccion', 'alumnograduacion_direccion_format_KO')
			return 'alumnograduacion_direccion_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_direccion')
		return true
	}
	/*formato email*/
	SEARCH_alumnograduacion_email_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_email')){
			this.limpiar_campo('alumnograduacion_email')
			return true
		}
		if(!this.validations.max_size('alumnograduacion_email', 40)){
			this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_max_size_KO')
			return 'alumnograduacion_email_max_size_KO'
		}
		if((!this.validations.format('alumnograduacion_email', '^[a-zA-Z0-9-_]+@?$') && //XXX@ o XXX a secas noelia@ noelia@
			!this.validations.format('alumnograduacion_email', '^@$') && //Importante porque la expresión de abajo puede permitir más de un @ si están aislados. @@, @@@ etc
			!this.validations.format('alumnograduacion_email', '^@[a-zA-Z]+\\.?$') && //@XXX. o @XXX @uvigo. @uvigo
			!this.validations.format('alumnograduacion_email', '^@?[a-zA-Z]{2,}\\.[a-zA-Z]*$') && //@XXX.XXX o XXX.XXX @uvigo.es uvigo.es
			!this.validations.format('alumnograduacion_email', '^[a-zA-Z0-9-_]{2,}@[a-zA-Z]\\.?$') && //XXX@XXX o XXX@XXX.  noelia@uvigo noelia@uvigo.
			!this.validations.format('alumnograduacion_email', '^[a-zA-Z0-9-_]{2,}@[a-zA-Z]{2,}\\.[a-zA-Z]*$') && //XXX@XXX.XXX o XXX@XXX noelia@uvigo.es noelia@uvigo
			!this.validations.format('alumnograduacion_email', '^\\.?[a-zA-Z]+$'))){ //.XXX .com .es
				this.dom.mostrar_error_campo('alumnograduacion_email', 'alumnograduacion_email_format_KO')
				return 'alumnograduacion_email_format_KO'
			}
		else{
			this.dom.mostrar_exito_campo('alumnograduacion_email')
			return true
		}
		this.dom.mostrar_exito_campo('alumnograduacion_email')
		return true
	}
	SEARCH_alumnograduacion_fotoacto_validation(){
		if(this.personalize_validate_es_vacio('alumnograduacion_fotoacto')){
			this.limpiar_campo('alumnograduacion_fotoacto')
			return true
		}
		if(!this.validations.max_size('alumnograduacion_fotoacto', 40)){
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_max_size_KO')
			return 'alumnograduacion_fotoacto_max_size_KO'
		}
		if(this.validations.format('alumnograduacion_fotoacto', '[áéíóúÁÉÍÓÚàèòÀÈÒÔ]')){
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_acento_KO')
			return 'alumnograduacion_fotoacto_format_acento_KO'
		}
		if(this.validations.format('alumnograduacion_fotoacto', 'ñ|Ñ')){
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_enhe_KO')
			return 'alumnograduacion_fotoacto_format_enhe_KO'
		}
		if(this.validations.format('alumnograduacion_fotoacto', ' ')){
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_espacio_KO')
			return 'alumnograduacion_fotoacto_format_espacio_KO'
		}
		if(!this.validations.format('alumnograduacion_fotoacto', '^[a-zA-Z.]*$')){
			this.dom.mostrar_error_campo('alumnograduacion_fotoacto', 'alumnograduacion_fotoacto_format_KO')
			return 'alumnograduacion_fotoacto_format_KO'
		}
		this.dom.mostrar_exito_campo('alumnograduacion_fotoacto')
		return true
	}
	SEARCH_nuevo_alumnograduacion_fotoacto_validation(){
		return true
	}
	SEARCH_submit_alumnograduacion(){
		let result = (
					(this.SEARCH_alumnograduacion_login_validation() &
					(this.SEARCH_alumnograduacion_password_validation()) &
					(this.SEARCH_alumnograduacion_nombre_validation()) &
					(this.SEARCH_alumnograduacion_apellidos_validation()) &
					(this.SEARCH_alumnograduacion_titulacion_validation()) &
					(this.SEARCH_alumnograduacion_dni_validation()) &
					(this.SEARCH_alumnograduacion_telefono_validation()) &
					(this.SEARCH_alumnograduacion_direccion_validation()) &
					(this.SEARCH_alumnograduacion_email_validation()) &
					(this.SEARCH_alumnograduacion_fotoacto_validation()))
					)
		
		result = Boolean(result);
		return result;	
	}

	/**
	 * 
	 * test dni format in the regular expression
	 * @param {string} 
	 * @return {bool} true is regular expression is satified false otherwise  
	 * */ 

	personalize_dni_nie(){
		
		var midni = document.getElementById('alumnograduacion_dni').value;
		if (this.personalize_dni_format() == true){
			if (!(this.personalize_validate_dni(midni))){
				return "dni_validate_KO";
			}
		}
		else{
			if (this.personalize_nie_format() === true){
					if (!(this.personalize_validate_nie(midni))){
						return "nie_validate_KO";
					}
			}
			else{
				return "dni_nie_format_KO";
			}
		}

		return true;

	}
	/**
	 * get dni as parameter, split letter and numbers, calculate
	 * %23 from number to obtain corresponding letter and compares with letter in dni value
	 * 
	 * @param dni value
	 * @returns true if dni is valid false otherwise
	 */
	personalize_dni_format(){
		
		if (!(this.validations.format('alumnograduacion_dni', '[0-9]{8}[A-Z]'))){
			return "dni_format_KO";
		}
		return true;

	}

	personalize_nie_format(){
		if (!(this.validations.format('alumnograduacion_dni', '[XYZ][0-9]{7}[A-Z]'))){
			return "nie_format_KO";
		}
		return true;
	}
	personalize_validate_dni(dni){
		
		//var dni = document.getElementById('alumnograduacion_dni').value;
		var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    	var letter = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
		
    	return letter == dni.charAt(8);
	}

	/**
	 * get nie as parameter, split firts letter, calculate
	 * the number from this letter and create dni for validating in 
	 * personalizate method
	 * 
	 * @param nie value
	 * @returns true if nie is valid false otherwise
	 */
	personalize_validate_nie(nie){
		
		//var nie = document.getElementById('dni').value;
		// Change the initial letter for the corresponding number and validate as DNI
		var nie_prefix = nie.charAt( 0 );

		switch (nie_prefix) {
		case 'X': nie_prefix = 0; break;
		case 'Y': nie_prefix = 1; break;
		case 'Z': nie_prefix = 2; break;
		}

		return this.personalize_validate_dni( nie_prefix + nie.substr(1) );
	
	}

	createForm_EDIT(fila){

		// limpiar poner titulo y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_EDIT');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.EDIT_submit_'+this.nombreentidad+'()');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/'+fila.alumnograduacion_fotoacto);
		
		// modificar presentacion (en este caso concreto para fecha)
		//fila.fechaNacimiento_persona = this.mostrarcambioatributo('fechaNacimiento_persona',fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);
		
		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('alumnograduacion_login','readonly','true');
		this.dom.assign_property_value('alumnograduacion_dni','readonly','true');
		this.dom.assign_property_value('alumnograduacion_fotoacto','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();

	}
	DELETE_submit_alumnograduacion(){
		return true
	}
	createForm_DELETE(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
	
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_DELETE');

		// rellenar y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.DELETE_submit_'+this.nombreentidad+'()');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_alumnograduacion_fotoacto (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/'+fila.alumnograduacion_fotoacto);
		
		// modificar presentacion (en este caso concreto para fecha)
		//fila.fechaNacimiento_persona = this.mostrarcambioatributo('fechaNacimiento_persona',fila.fechaNacimiento_persona);

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_alumnograduacion_fotoacto (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.assign_property_value('link_alumnograduacion_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_alumnograduacion_fotoacto/'+fila.alumnograduacion_fotoacto);
		
		// modificar presentacion (en este caso concreto para fecha)
		//fila.fechaNacimiento_persona = this.mostrarcambioatributo('fechaNacimiento_persona',fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		//this.colocarboton('SHOWCURRENT');

		setLang();

	}

	createForm_ADD(){

		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_ADD');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.ADD_submit_'+this.nombreentidad+'()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
		
		// poner no visible el campo alumnograduacion_fotoacto (solo se puede subir fichero)
		this.dom.hide_element_form('alumnograduacion_fotoacto');
		this.dom.hide_element('link_alumnograduacion_fotoacto');

		// rellenar valores
		// en ADD no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');

		// poner inactivos los campos correspondientes
		// en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH(){

		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SEARCH');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.SEARCH_submit_'+this.nombreentidad+'()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
		
		// poner no visible el campo alumnograduacion_fotoacto (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_alumnograduacion_fotoacto');
		this.dom.hide_element('link_alumnograduacion_fotoacto');

		// reemplazar enumerados por texto
		// titulacion_persona que es un select
		this.dom.replaceSelectXEmptyInput('alumnograduacion_titulacion');
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
		}

	}


}

class ubicacion extends EntidadAbstracta{

	constructor(esTest){
		super();
        
        this.rangoLatitud = [-90.000000, 90.000000]
        this.rangoLongitud = [-180.000000, +180.000000]
		

		//definicion de atributos a mostrarn en la tabla de muestra de tuplas al entrar en la gestion de la entidad
		this.columnasamostrar = ['id_site', 'site_latitud','site_longitud','site_locality'];
		//definicion de atributos a cambiar su visualización
		this.mostrarespecial = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
		
		// definicion de los atributos del formulario (Necesario para test de unidad)
		this.attributes = [  'id_site',
                                'site_latitud',
                                'site_longitud',
                                'site_altitude',
                                'site_locality',
                                'site_provider_login',
                                'site_north_photo',
                                'nuevo_site_north_photo',
                                'site_south_photo',
                                'nuevo_site_south_photo',
                                'site_east_photo',
                                'nuevo_site_east_photo',
								'site_west_photo',
                                'nuevo_site_west_photo'
                            ];

	}	

	/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation(){
		var form_content = `
			<form id = 'form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

			<label id="label_id_site" class="label_id_site">ID ubicacion</label>
			<input type='text' id='id_site' name='id_site' ></input>
			<span id="span_error_id_site"><a id="error_id_site"></a></span>
			<br>
			
			<label class="label_site_latitud">Latitud</label>
			<input type='text' id='site_latitud' name='site_latitud' ></input>
			<span id="span_error_site_latitud" ><a id="error_site_latitud"></a></span>
			<br>
			
			<label class="label_site_longitud">Longitud</label>
			<input type='text' id='site_longitud' name='site_longitud'></input>
			<span id="span_error_site_longitud" ><a id="error_site_longitud"></a></span>
			<br>
			
			<label class="label_site_altitude">Altitud</label>
			<input type='text' id='site_altitude' name='site_altitude'></input>
			<span id="span_error_site_altitude" ><a id="error_site_altitude"></a></span>
			
			<br>

			<label class="label_site_locality">Localidad</label>
			<input type='text' id='site_locality' name='site_locality'></input>
			<span id="span_error_site_locality" ><a id="error_site_locality"></a></span>
			
			<br>


			<label class="label_site_provider_login">Login proveedor revista</label>
			<input type='text' id='site_provider_login' name='site_provider_login'></input>
			<span id="span_error_site_provider_login" ><a id="error_site_provider_login"></a></span>
			
			<br>

			<label id="label_site_north_photo" class="label_site_north_photo">Foto cara el norte</label>
			<input type='text' id='site_north_photo' name='site_north_photo'></input>
			<span id="span_error_site_north_photo"><a id="error_site_north_photo"></a></span>
			<a id="link_site_north_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_site_north_photo" class="label_nuevo_site_north_photo">Foto cara el norte</label>
			<input type='file' id='nuevo_site_north_photo' name='nuevo_site_north_photo'></input>
			<span id="span_error_nuevo_site_north_photo"><a id="error_nuevo_site_north_photo"></a></span>
			<br>



            <label id="label_site_south_photo" class="label_site_south_photo">Foto cara el sur</label>
			<input type='text' id='site_south_photo' name='site_south_photo'></input>
			<span id="span_error_site_south_photo"><a id="error_site_south_photo"></a></span>
			<a id="link_site_south_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_site_south_photo" class="label_nuevo_site_south_photo">Foto cara el sur</label>
			<input type='file' id='nuevo_site_south_photo' name='nuevo_site_south_photo'></input>
			<span id="span_error_nuevo_site_south_photo"><a id="error_nuevo_site_south_photo"></a></span>
			<br>



            <label id="label_site_east_photo" class="label_site_east_photo">Foto cara el este</label>
			<input type='text' id='site_east_photo' name='site_east_photo'></input>
			<span id="span_error_site_east_photo"><a id="error_site_east_photo"></a></span>
			<a id="link_site_east_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_site_east_photo" class="label_nuevo_site_east_photo">Foto cara el este</label>
			<input type='file' id='nuevo_site_east_photo' name='nuevo_site_east_photo'></input>
			<span id="span_error_nuevo_site_east_photo"><a id="error_nuevo_site_east_photo"></a></span>
			<br>



            <label id="label_site_west_photo" class="label_site_west_photo">Foto cara el oeste</label>
			<input type='text' id='site_west_photo' name='site_west_photo'></input>
			<span id="span_error_site_west_photo"><a id="error_site_west_photo"></a></span>
			<a id="link_site_west_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_site_west_photo" class="label_nuevo_site_west_photo">Foto cara el oeste</label>
			<input type='file' id='nuevo_site_west_photo' name='nuevo_site_west_photo'></input>
			<span id="span_error_nuevo_site_west_photo"><a id="error_nuevo_site_west_photo"></a></span>
			<br>


		</form>
		`;
		return form_content;
		
	}
	
    personalize_validate_rango_coordenadas(id, rango){
        let coordenada = parseFloat(document.getElementById(id).value)

        //Si es mayor (o igual) al mínimo y menor (o igual) al máximo está en el rango
        return coordenada >= rango[0] && coordenada <= rango[1]
    }
    personalize_validate_ADD_generico_ficheros(id){
        if(!this.validations.not_exist_file(id)){
			this.dom.mostrar_error_campo(id, id+'_empty_file_KO')
			return id+'_empty_file_KO'
		}
		if(!this.validations.format_name_file(id, '^.{7,}$')){
			this.dom.mostrar_error_campo(id, id+'_name_min_size_KO')
			return id+'_name_min_size_KO'
		}
		if(this.validations.format_name_file(id, '^.{21,}$')){
			this.dom.mostrar_error_campo(id, id+'_name_max_size_KO')
			return id+'_name_max_size_KO'
		}
		if(this.validations.format(id, '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo(id, id+'_name_format_acento_KO')
			return id+'_name_format_acento_KO'
		}
		if(this.validations.format(id, 'ñ|Ñ')){
			this.dom.mostrar_error_campo(id, id+'_name_format_enhe_KO')
			return id+'_name_format_enhe_KO'
		}
		if(this.validations.format(id, ' ')){
			this.dom.mostrar_error_campo(id, id+'_name_format_espacio_KO')
			return id+'_name_format_espacio_KO'
		}
		if(!this.validations.format_name_file(id, '^[a-zA-Z.]*$')){
			this.dom.mostrar_error_campo(id, id+'_name_format_KO')
			return id+'_name_format_KO'
		}
		if(!this.validations.type_file(id, ['image/jpeg'])){
			this.dom.mostrar_error_campo(id, id+'_format_KO')
			return id+'_format_KO'
		}
		if(!this.validations.max_size_file(id, 499999)){
			this.dom.mostrar_error_campo(id, id+'_max_size_KO')
			return id+'_max_size_KO'
		}
		this.dom.mostrar_exito_campo(id);
		return true
    }
	personalize_validate_EDIT_generico_ficheros(id){
		if(!this.validations.not_exist_file(id)){
			this.dom.mostrar_exito_campo(id)
			return true
		}
		if(!this.validations.format_name_file(id, '^.{7,}$')){
			this.dom.mostrar_error_campo(id, id+'_name_min_size_KO')
			return id+'_name_min_size_KO'
		}
		if(this.validations.format_name_file(id, '^.{21,}$')){
			this.dom.mostrar_error_campo(id, id+'_name_max_size_KO')
			return id+'_name_max_size_KO'
		}
		if(this.validations.format(id, '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo(id, id+'_name_format_acento_KO')
			return id+'_name_format_acento_KO'
		}
		if(this.validations.format(id, 'ñ|Ñ')){
			this.dom.mostrar_error_campo(id, id+'_name_format_enhe_KO')
			return id+'_name_format_enhe_KO'
		}
		if(this.validations.format(id, ' ')){
			this.dom.mostrar_error_campo(id, id+'_name_format_espacio_KO')
			return id+'_name_format_espacio_KO'
		}
		if(!this.validations.format_name_file(id, '^[a-zA-Z.]*$')){
			this.dom.mostrar_error_campo(id, id+'_name_format_KO')
			return id+'_name_format_KO'
		}
		if(!this.validations.type_file(id, ['image/jpeg'])){
			this.dom.mostrar_error_campo(id, id+'_format_KO')
			return id+'_format_KO'
		}
		if(!this.validations.max_size_file(id, 499999)){
			this.dom.mostrar_error_campo(id, id+'_max_size_KO')
			return id+'_max_size_KO'
		}
		this.dom.mostrar_exito_campo(id);
		return true
	}
	personalize_validate_SEARCH_generico_ficheros(id){
		if(this.personalize_validate_es_vacio(id)){
			this.limpiar_campo(id)
			return true
		}
		if(!this.validations.max_size(id, 50)){
			this.dom.mostrar_error_campo(id, id+'_max_size_KO')
			return id+'_max_size_KO'
		}
		if(this.validations.format(id, '[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]')){
			this.dom.mostrar_error_campo(id, id+'_format_acento_KO')
			return id+'_format_acento_KO'
		}
		if(this.validations.format(id, 'ñ|Ñ')){
			this.dom.mostrar_error_campo(id, id+'_format_enhe_KO')
			return id+'_format_enhe_KO'
		}
		if(this.validations.format(id, ' ')){
			this.dom.mostrar_error_campo(id, id+'_format_espacio_KO')
			return id+'_format_espacio_KO'
		}
		if(!this.validations.format(id, '^[a-zA-Z.]*$')){
			this.dom.mostrar_error_campo(id, id+'_format_KO')
			return id+'_format_KO'
		}
		this.dom.mostrar_exito_campo(id)
		return true
	}
	personalize_validate_es_vacio(id){
		let elemento = document.getElementById(id).value
		return elemento === ''
	}
	personalize_validate_formats(id, formatos) {
		for (let p of formatos) {
        	if (this.validations.format(id, p)) {
            return true;
			}
		}
		return false
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


    ADD_id_site_validation(){
        if(!this.validations.min_size('id_site', 1)){
            this.dom.mostrar_error_campo('id_site', 'id_site_min_size_KO')
            return 'id_site_min_size_KO'
        }
        if(!this.validations.max_size('id_site', 11)){
            this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO')
            return 'id_site_max_size_KO'
        }
        if(!this.validations.format('id_site', '^[0-9]*$')){
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO')
            return 'id_site_format_KO'
        }
        this.dom.mostrar_exito_campo('id_site')
        return true
    }
    ADD_site_latitud_validation(){
        //Es más cómodo validar el tamaño con una expresión regular que con 10 condicionales
        //de min_size y max_size    //0.000000                                          //+00.000000
        if(!this.validations.min_size('site_latitud', 8) || !this.validations.max_size('site_latitud', 10)){
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_size_KO')
            return 'site_latitud_size_KO'
        }
        if(!this.validations.format('site_latitud', '^[+-]?[0-9]{1,2}\\.[0-9]{6}$')){
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_format_KO')
            return 'site_latitud_format_KO'
        }
        if(!this.personalize_validate_rango_coordenadas('site_latitud', this.rangoLatitud)){
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_rango_KO')
            return 'site_latitud_rango_KO'
        }
        this.dom.mostrar_exito_campo('site_latitud')
        return true
    }
    ADD_site_longitud_validation(){
        if(!this.validations.min_size('site_longitud', 8) || !this.validations.max_size('site_longitud', 11)){
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_size_KO')
            return 'site_longitud_size_KO'
        }
        if(!this.validations.format('site_longitud', '^[+-]?[0-9]{1,3}\\.[0-9]{6}$')){
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_format_KO')
            return 'site_longitud_format_KO'
        }
        if(!this.personalize_validate_rango_coordenadas('site_longitud', this.rangoLongitud)){
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_rango_KO')
            return 'site_longitud_rango_KO'
        }
        this.dom.mostrar_exito_campo('site_longitud')
        return true
    }
    ADD_site_altitude_validation(){
        //Como el signo es opcional validamos el tamaño con una expresión reuglar
        if(!this.validations.min_size('site_altitude', 1)){
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_min_size_KO')
            return 'site_altitude_min_size_KO'
        }
        //Con o sin signo si no tiene entre uno y 4 caracteres excede el límite ya que ya se comprobó el mínimo
        if(!this.validations.format('site_altitude', '^[+-]?.{1,4}$')){
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_max_size_KO')
            return 'site_altitude_max_size_KO'
        }
        if(!this.validations.format('site_altitude', '^[+-]?[0-9]*$')){
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_format_KO')
            return 'site_altitude_format_KO'
        }
		let altitud = parseInt(document.getElementById('site_altitude').value)
		if(altitud < -432){
			this.dom.mostrar_error_campo('site_altitude', 'site_altitude_menor_minimo_KO')
			return 'site_altitude_menor_minimo_KO'
		}
		if(altitud > 8848){
			this.dom.mostrar_error_campo('site_altitude', 'site_altitude_mayor_maximo_KO')
			return 'site_altitude_mayor_maximo_KO'
		}
        this.dom.mostrar_exito_campo('site_altitude')
        return true
    }
    ADD_site_locality_validation(){
		if(!this.validations.min_size('site_locality', 1)){
            this.dom.mostrar_error_campo('site_locality', 'site_locality_min_size_KO')
            return 'site_locality_min_size_KO'
        }
        if(!this.validations.max_size('site_locality', 40)){
            this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO')
            return 'site_locality_max_size_KO'
        }
        if(!this.validations.format('site_locality', '^[a-zA-ZñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ ]*$')){
            this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO')
            return 'site_locality_format_KO'
        }
        this.dom.mostrar_exito_campo('site_locality')
        return true
    }
    ADD_site_provider_login_validation(){
        if(!this.validations.min_size('site_provider_login', 5)){
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_min_size_KO')
            return 'site_provider_login_min_size_KO'
        }
        if(!this.validations.max_size('site_provider_login', 30)){
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO')
            return 'site_provider_login_max_size_KO'
        }
        if(!this.validations.format('site_provider_login', '^[a-zA-Z0-9]*$')){
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO')
            return 'site_provider_login_format_KO'
        }
        this.dom.mostrar_exito_campo('site_provider_login')
        return true
    }
    ADD_nuevo_site_north_photo_validation(){
        return this.personalize_validate_ADD_generico_ficheros('nuevo_site_north_photo')
    }
    ADD_nuevo_site_south_photo_validation(){
        return this.personalize_validate_ADD_generico_ficheros('nuevo_site_south_photo')
    }
    ADD_nuevo_site_east_photo_validation(){
        return this.personalize_validate_ADD_generico_ficheros('nuevo_site_east_photo')
    }
    ADD_nuevo_site_west_photo_validation(){
        return this.personalize_validate_ADD_generico_ficheros('nuevo_site_west_photo')
    }
    ADD_site_north_photo_validation(){
        return true
    }
    ADD_site_south_photo_validation(){
        return true
    }
    ADD_site_east_photo_validation(){
        return true
    }
    ADD_site_west_photo_validation(){
        return true
    }
	


	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	ADD_submit_ubicacion(){

		let result = (
                    (this.ADD_site_latitud_validation() &
                    (this.ADD_site_longitud_validation()) &
                    (this.ADD_site_altitude_validation()) &
                    (this.ADD_site_locality_validation()) &
                    (this.ADD_site_provider_login_validation()) &
                    (this.ADD_nuevo_site_north_photo_validation()) &
                    (this.ADD_nuevo_site_south_photo_validation()) &
                    (this.ADD_nuevo_site_east_photo_validation()) &
                    (this.ADD_site_west_photo_validation()))
					)
		
		result = Boolean(result);

		
		return result;	


		}
    
    EDIT_id_site_validation(){
        return this.ADD_id_site_validation()
    }
    EDIT_site_latitud_validation(){
        return this.ADD_site_latitud_validation()
    }
    EDIT_site_longitud_validation(){
        return this.ADD_site_longitud_validation()
    }
    EDIT_site_altitude_validation(){
        return this.ADD_site_altitude_validation()
    }
    EDIT_site_locality_validation(){
        return this.ADD_site_locality_validation()
    }
    EDIT_site_provider_login_validation(){
        return this.ADD_site_provider_login_validation()
    }
   EDIT_nuevo_site_north_photo_validation(){
        return this.personalize_validate_EDIT_generico_ficheros('nuevo_site_north_photo')
    }
    EDIT_nuevo_site_south_photo_validation(){
        return this.personalize_validate_EDIT_generico_ficheros('nuevo_site_south_photo')
    }
    EDIT_nuevo_site_east_photo_validation(){
        return this.personalize_validate_EDIT_generico_ficheros('nuevo_site_east_photo')
    }
    EDIT_nuevo_site_west_photo_validation(){
        return this.personalize_validate_EDIT_generico_ficheros('nuevo_site_west_photo')
    }
    EDIT_site_north_photo_validation(){
        return true
    }
    EDIT_site_south_photo_validation(){
        return true
    }
    EDIT_site_east_photo_validation(){
        return true
    }
    EDIT_site_west_photo_validation(){
        return true
    }
	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	EDIT_submit_ubicacion(){

		let result = (
					(this.EDIT_id_site_validation() &
					(this.EDIT_site_latitud_validation()) &
					(this.EDIT_site_longitud_validation()) &
					(this.EDIT_site_altitude_validation()) &
					(this.EDIT_site_locality_validation()) &
					(this.EDIT_site_provider_login_validation()) &
					(this.EDIT_nuevo_site_north_photo_validation()) &
					(this.EDIT_nuevo_site_south_photo_validation()) &
					(this.EDIT_nuevo_site_east_photo_validation()) &
					(this.EDIT_nuevo_site_west_photo_validation()))
					)
		
		result = Boolean(result);
		
		return result;	


	}
    SEARCH_id_site_validation(){
		if(this.personalize_validate_es_vacio('id_site')){
			this.limpiar_campo('id_site')
			return true
		}
		if(!this.validations.max_size('id_site', 11)){
			this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO')
			return 'id_site_max_size_KO'
		}
		if(!this.validations.format('id_site', '^[0-9]*$')){
			this.dom.mostrar_error_campo('id_site', 'id_site_format_KO')
			return 'id_site_format_KO'
		}
		this.dom.mostrar_exito_campo('id_site')
        return true
    }
    SEARCH_site_latitud_validation(){
		if(this.personalize_validate_es_vacio('site_latitud')){
			this.limpiar_campo('site_latitud')
			return true
		}
		if(!this.validations.max_size('site_latitud', 10)){
			this.dom.mostrar_error_campo('site_latitud', 'site_latitud_size_KO')
			return 'site_latitud_size_KO'
		}
		let patrones = [
			'^[+-]?[0-9]{1,2}$',
			'^[0-9]{0,2}\\.[0-9]{0,6}$',
			'^[+-]?[0-9]{2}\\.[0-9]{0,6}$',
			'^[0-9]{1,6}$',
		]
		if(!this.personalize_validate_formats('site_latitud', patrones)){
			this.dom.mostrar_error_campo('site_latitud', 'site_latitud_format_KO')
			return 'site_latitud_format_KO'
		}
		//Si pasa esta expresión podemos saber el valor entero y por ende
		//podemos saber si es correcto
		patrones = [
			'^[+-]?[0-9]{2}\\.',
			'^[+-][0-9]{2}$'
			
		]
		if(this.personalize_validate_formats('site_latitud', patrones)){
			if(!this.personalize_validate_rango_coordenadas('site_latitud', this.rangoLatitud)){
				this.dom.mostrar_error_campo('site_latitud', 'site_latitud_rango_KO')
				return 'site_latitud_rango_KO'
			}
		}
		this.dom.mostrar_exito_campo('site_latitud')
        return true
    }
    SEARCH_site_longitud_validation(){
		if(this.personalize_validate_es_vacio('site_longitud')){
			this.limpiar_campo('site_longitud')
			return true
		}
		if(!this.validations.max_size('site_longitud', 11)){
			this.dom.mostrar_error_campo('site_longitud', 'site_longitud_size_KO')
			return 'site_longitud_size_KO'
		}
		let patrones = [
			'^[+-]?[0-9]{1,3}$',
			'^[0-9]{0,3}\\.[0-9]{0,6}$',
			'^[+-]?[0-9]{3}\\.[0-9]{0,6}$',
			'^[0-9]{1,6}$'
		]
		if(!this.personalize_validate_formats('site_longitud', patrones)){
			this.dom.mostrar_error_campo('site_longitud', 'site_longitud_format_KO')
			return 'site_longitud_format_KO'
		}
		//Si pasa alguna de estas expresiones podemos saber el valor entero y por ende
		//podemos saber si es correcto
		patrones = [
			'^[+-]?[0-9]{3}\\.',
			'^[+-][0-9]{3}$'
			
		]
		if(this.personalize_validate_formats('site_longitud', patrones)){
			if(!this.personalize_validate_rango_coordenadas('site_longitud', this.rangoLongitud)){
				this.dom.mostrar_error_campo('site_longitud', 'site_longitud_rango_KO')
				return 'site_longitud_rango_KO'
			}
		}
		//Si pasa alguno de estos patrones significa que la parte entera de la longitud
		//está parcialmente, pero aun así nos permite discriminar si es válida
		//Por ejemplo +2 es inválido porque haría referencia a un valor +2XX y el límite es +180
		patrones = [
			'^[+-]?[0-9]{1,2}\\.$',
			'^[+-][0-9]{1,2}$'
			
		]
		if(this.personalize_validate_formats('site_longitud', patrones)){
			let valorLongitud = document.getElementById('site_longitud').value
			let valorDecimalLongitud = parseInt(valorLongitud)
			valorLongitud = valorLongitud.replaceAll('+', '')
			valorLongitud = valorLongitud.replaceAll('-', '')
			//Hay dos dígitos
			if(valorLongitud.length === 2){
				if(!(valorDecimalLongitud >= -18 && valorDecimalLongitud <= 18)){
					this.dom.mostrar_error_campo('site_longitud', 'site_longitud_rango_KO')
					return 'site_longitud_rango_KO'
				}
			}
			else{
				if(!(valorDecimalLongitud >= 0 && valorDecimalLongitud <= 1)){
					this.dom.mostrar_error_campo('site_longitud', 'site_longitud_rango_KO')
					return 'site_longitud_rango_KO'
				}
			}
		}
		this.dom.mostrar_exito_campo('site_longitud')
        return true
    }
    SEARCH_site_altitude_validation(){
		if(this.personalize_validate_es_vacio('site_altitude')){
			this.limpiar_campo('site_altitude')
			return true
		}//Si tiene 5 dígitos o más y opcionalmente un signo excete el límite
		if(!this.validations.format('site_altitude', '^[+-]?.{1,4}$')){
			this.dom.mostrar_error_campo('site_altitude', 'site_altitude_max_size_KO')
			return 'site_altitude_max_size_KO'
		}
		if(!this.validations.format('site_altitude', '^[+-]?[0-9]*$')){
			this.dom.mostrar_error_campo('site_altitude', 'site_altitude_format_KO')
			return 'site_altitude_format_KO'
		}
		let altitud = parseInt(document.getElementById('site_altitude').value)
		if(altitud < -432){
			this.dom.mostrar_error_campo('site_altitude', 'site_altitude_menor_minimo_KO')
			return 'site_altitude_menor_minimo_KO'
		}
		if(altitud > 8848){
			this.dom.mostrar_error_campo('site_altitude', 'site_altitude_mayor_maximo_KO')
			return 'site_altitude_mayor_maximo_KO'
		}
		this.dom.mostrar_exito_campo('site_altitude')
        return true
    }
    SEARCH_site_locality_validation(){
		if(this.personalize_validate_es_vacio('site_locality')){
			this.limpiar_campo('site_locality')
			return true
		}
		if(!this.validations.max_size('site_locality', 40)){
			this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO')
			return 'site_locality_max_size_KO'
		}
		if(!this.validations.format('site_locality', '^[a-zA-ZñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ ]*$')){
			this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO')
			return 'site_locality_format_KO'
		}
		this.dom.mostrar_exito_campo('site_locality')
        return true
    }
    SEARCH_site_provider_login_validation(){
		if(this.personalize_validate_es_vacio('site_provider_login')){
			this.limpiar_campo('site_provider_login')
			return true
		}
		if(!this.validations.max_size('site_provider_login', 30)){
			this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO')
			return 'site_provider_login_max_size_KO'
		}
		if(!this.validations.format('site_provider_login', '^[a-zA-Z0-9]*$')){
			this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO')
			return 'site_provider_login_format_KO'
		}
		this.dom.mostrar_exito_campo('site_provider_login')
        return true
    }
    
    SEARCH_site_north_photo_validation(){
        return this.personalize_validate_SEARCH_generico_ficheros('site_north_photo')
    }
    SEARCH_site_south_photo_validation(){
        return this.personalize_validate_SEARCH_generico_ficheros('site_south_photo')
    }
    SEARCH_site_east_photo_validation(){
        return this.personalize_validate_SEARCH_generico_ficheros('site_east_photo')
    }
    SEARCH_site_west_photo_validation(){
        return this.personalize_validate_SEARCH_generico_ficheros('site_west_photo')
    }
    SEARCH_nuevo_site_north_photo_validation(){
        return this.ADD_nuevo_site_north_photo_validation()
    }
    SEARCH_nuevo_site_south_photo_validation(){
        return this.ADD_nuevo_site_south_photo_validation()
    }
    SEARCH_nuevo_site_east_photo_validation(){
        return this.ADD_nuevo_site_east_photo_validation()
    }
    SEARCH_nuevo_site_west_photo_validation(){
        return this.ADD_nuevo_site_west_photo_validation()
    }
	
    SEARCH_submit_ubicacion(){

		let result = (
					(this.SEARCH_id_site_validation() &
					(this.SEARCH_site_latitud_validation()) &
					(this.SEARCH_site_longitud_validation()) &
					(this.SEARCH_site_altitude_validation()) &
					(this.SEARCH_site_locality_validation()) &
					(this.SEARCH_site_provider_login_validation()) &
					(this.SEARCH_site_north_photo_validation()) &
					(this.SEARCH_site_south_photo_validation()) &
					(this.SEARCH_site_east_photo_validation()) &
					(this.SEARCH_site_west_photo_validation()))
					)
		
		result = Boolean(result);
		
		return result;	


	}

	createForm_EDIT(fila){

		// limpiar poner titulo y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_EDIT');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.EDIT_submit_'+this.nombreentidad+'()');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/'+fila.site_north_photo);
        this.dom.assign_property_value('link_site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/'+fila.site_south_photo);
		this.dom.assign_property_value('link_site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/'+fila.site_east_photo);
		this.dom.assign_property_value('link_site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/'+fila.site_west_photo);

		
		// rellenar valores
		this.dom.rellenarvaloresform(fila);
		
		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('id_site','readonly','true');

		this.dom.assign_property_value('site_north_photo','readonly','true');
        this.dom.assign_property_value('site_south_photo','readonly','true');
        this.dom.assign_property_value('site_east_photo','readonly','true');
        this.dom.assign_property_value('site_west_photo','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();

	}
	DELETE_submit_ubicacion(){
		return true
	}
	createForm_DELETE(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
	
		this.dom.show_element('Div_IU_form','block');
		this.dom.remove_class_value('class_contenido_titulo_form','text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_DELETE');

		// rellenar y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.DELETE_submit_'+this.nombreentidad+'()');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible los campos de fotos (solo se puede ver el nombre de fichero y el fichero)
		this.dom.hide_element_form('nuevo_site_north_photo');
		this.dom.hide_element_form('nuevo_site_south_photo');
		this.dom.hide_element_form('nuevo_site_east_photo');
		this.dom.hide_element_form('nuevo_site_west_photo');

		this.dom.assign_property_value('link_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/'+fila.site_north_photo);
		this.dom.assign_property_value('link_site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/'+fila.site_south_photo);
		this.dom.assign_property_value('link_site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/'+fila.site_east_photo);
		this.dom.assign_property_value('link_site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/'+fila.site_west_photo);

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SHOWCURRENT');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_site_north_photo (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_site_north_photo');
		this.dom.hide_element_form('nuevo_site_south_photo');
		this.dom.hide_element_form('nuevo_site_east_photo');
		this.dom.hide_element_form('nuevo_site_west_photo');

		this.dom.assign_property_value('link_site_north_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/'+fila.site_north_photo);
		this.dom.assign_property_value('link_site_south_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/'+fila.site_south_photo);
		this.dom.assign_property_value('link_site_east_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/'+fila.site_east_photo);
		this.dom.assign_property_value('link_site_west_photo', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/'+fila.site_west_photo);

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_ADD');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.ADD_submit_'+this.nombreentidad+'()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
		
		//Ocultar id_site ya que lo asigna la BD
		this.dom.hide_element_form('id_site');
		// poner no visible el campo site_north_photo (solo se puede subir fichero)
		this.dom.hide_element_form('site_north_photo');
		this.dom.hide_element('link_site_north_photo');

        this.dom.hide_element_form('site_south_photo');
		this.dom.hide_element('link_site_south_photo');

        this.dom.hide_element_form('site_east_photo');
		this.dom.hide_element('link_site_east_photo');

        this.dom.hide_element_form('site_west_photo');
		this.dom.hide_element('link_site_west_photo');

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
		this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_SEARCH');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.SEARCH_submit_'+this.nombreentidad+'()');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
		
		// poner no visible el campo site_north_photo (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_site_north_photo');
		this.dom.hide_element('link_site_north_photo');

        this.dom.hide_element_form('nuevo_site_south_photo');
		this.dom.hide_element('link_site_south_photo');

        this.dom.hide_element_form('nuevo_site_east_photo');
		this.dom.hide_element('link_site_east_photo');

        this.dom.hide_element_form('nuevo_site_west_photo');
		this.dom.hide_element('link_site_west_photo');

		// reemplazar enumerados por texto
		// EstadoA que es un select
		this.dom.replaceSelectXEmptyInput('site_locality');
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
			case 'site_north_photo':
            case 'site_south_photo':
            case 'site_east_photo':
            case 'site_west_photo':
				var link = 'error';
				if (valorentrada !== ''){
					link = valorentrada+`  <a class="link_`+atributo+`" href="http://193.147.87.202/ET2/filesuploaded/files_`+atributo+`/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
					//link = valorentrada+`  <a class="link_site_north_photo" href="http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/`+valorentrada+`"><img src="./iconos/FILE.png" /></a>`;
				}
				return link;
				break;
			case 'default':
				alert('no existe mostrar especial para ese atributo');
				break;
		}

	}

}
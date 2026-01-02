class Validations {

	constructor() {

	}

	//min_size()
	//@param id Id objeto dom
	//@param minsize tamaño minimo a validar

	min_size(id, minsize) {
		let elemento = document.getElementById(id);
		switch (elemento.tagName) {
			case 'INPUT':
				switch (elemento.type) {
					case 'number':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length < minsize) {
							return false;
						}
						else {
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;

				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	//max_size()
	//@param id Id objeto dom
	//@param minsize tamaño maximo a validar

	max_size(id, maxsize) {
		let elemento = document.getElementById(id);
		switch (elemento.tagName) {
			case 'INPUT':
				switch (elemento.type) {
					case 'number':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length > maxsize) {
							return false;
						}
						else {
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;

				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}
	es_vacio(id) {
		let elemento = document.getElementById(id).value
		return elemento === ''
	}

	/**
	@param {string} id of html element
	@param {string} regular expression to testing id html element value
	@return {bool} result of regular expression testing  
	*/
	format(id, exprreg) {
		let expresionregular = new RegExp(exprreg);
		let valor = document.getElementById(id).value;
		return expresionregular.test(valor);
	}
	min_size_textarea(id, minsize) {
		let elemento = document.getElementById(id);

		if (elemento.tagName === 'TEXTAREA') {
			let valorelemento = elemento.value.trim();
			return valorelemento.length >= minsize;
		}

		// Por si acaso
		return this.min_size(id, minsize);
	}
	max_size_textarea(id, maxsize) {
		let elemento = document.getElementById(id);

		if (elemento.tagName === 'TEXTAREA') {
			let valorelemento = elemento.value.trim();
			return valorelemento.length <= maxsize;
		}

		// Por si acaso
		return this.max_size(id, maxsize);
	}

	format_textarea(id, exprreg) {
		let elemento = document.getElementById(id);

		if (elemento.tagName === 'TEXTAREA') {
			let valor = elemento.value.trim();
			let expresionregular = new RegExp(exprreg);
			return expresionregular.test(valor);
		}

		// Por si acaso
		return this.format(id, exprreg);
	}

	/**
	 * 
	 */
	not_exist_file(id) {
		let objfile = document.getElementById(id);
		if (objfile.files.length == 0) {
			return false;
		}
		return true;
	}
	/**
	@param {string} id of html file element
	@param {number} maxsize max size allowed for fiel
	@return {bool} result of size comparison
	*/
	max_size_file(id, maxsize) {
		let objfile = document.getElementById(id);
		if (objfile.files[0].size > maxsize) {
			return false;
		}
		return true;
	}
	multiple_max_size_file(id, maxsize) {
		let result = true
		let valores = document.getElementById(id).files
		for (let file of valores) {
			let valor = file.size;
			result &= valor <= maxsize;
		}
		return result
	}

	type_file(id, array_tipos) {
		let objfile = document.getElementById(id);
		if (!(array_tipos.includes(objfile.files[0].type))) {
			return false;
		}
		return true;
	}
	multiple_type_file(id, array_tipos) {
		let result = true
		let valores = document.getElementById(id).files
		for (let file of valores) {
			let valor = file.type
			result &= array_tipos.includes(valor)
		}
		return result
	}

	format_name_file(id, exprreg) {
		let objfile = document.getElementById(id);
		let expresionregular = new RegExp(exprreg);
		let valor = objfile.files[0].name;
		return expresionregular.test(valor);
	}
	multiple_format_name_file(id, exprreg) {
		let result = true
		let expresionregular = new RegExp(exprreg);
		let valores = document.getElementById(id).files
		for (let file of valores) {
			let valor = file.name;
			result &= expresionregular.test(valor);
		}
		return result
	}
	validate_formats(id, formatos) {
		for (let p of formatos) {
			if (this.format(id, p)) {
				return true;
			}
		}
		return false
	}
	/*
	Dado el id de una fecha devuelve true si correspondeo a una fecha valida
	y si no devuelve el tipo de error por la que no es válida 
	*/
	validate_date(id, accion) {
		let valorFecha = document.getElementById(id).value
		//Descartamos vacíos desde el inicio
		if (valorFecha === '')
			if (accion === 'ADD' || accion === 'EDIT') {
				return 'empty_date_KO'
			}
			else {
				return true
			}
		let fechaSeparada
		if (accion === 'ADD' || accion === 'EDIT') {
			fechaSeparada = valorFecha.split('-')
		}
		else {
			fechaSeparada = valorFecha.split('/')
		}
		let patrones
		if (accion === 'ADD' || accion === 'EDIT') {
			patrones = '^[0-9]{2}-[0-9]{2}-[0-9]{4}' //Fecha estilo ADD o EDIT
		}
		else {
			patrones = [
				'^[0-9]{0,2}/[0-9]{0-2}$', //Fechas del estilo /00/00  00/ /00 o /
				'^[0-9]{0,2}/[0-9]{2}/[0-9]{0,4}$', //Fechas del estilo 00/00/0000  00/00  /00/0000 o /00/
				'^[0-9]{0,2}/[0-9]{0,4}$', //Fechas del estilo 00/00 00/0000 0/0 etc
				'^[0-9]{0,4}$',
			];
		}
		if (!this.validate_formats(id, patrones)) {
			return 'date_format_KO'
		}
		let fecha = valorFecha
		if (fecha.length === 10) {
			let exp_reg
			if (accion === 'ADD' || accion === 'EDIT') {
				exp_reg = '^[0-9]{4}-[0-9]{2}-[0-9]{2}'
			}
			else {
				exp_reg = '^[0-9]{2}/[0-9]{2}/[0-9]{4}$'
			}
			if (!this.format(id, exp_reg)) {
				return 'date_format_KO'
			}
			let dia
			let mes
			let anho
			if (accion === 'ADD' || accion === 'EDIT') {
				dia = parseInt(fechaSeparada[2])
				mes = parseInt(fechaSeparada[1])
				anho = parseInt(fechaSeparada[0])
			}
			else {
				dia = parseInt(fechaSeparada[0])
				mes = parseInt(fechaSeparada[1])
				anho = parseInt(fechaSeparada[2])
			}
			if (!(mes > 0 && mes <= 12)) {
				return 'mes_invalido_KO'
			}
			if (!(dia > 0 && dia <= 31)) {
				return 'dia_invalido_KO'
			}
			let diaValido = true
			switch (mes) {
				case 4:
				case 6:
				case 9:
				case 11:
					if (dia > 30) {
						diaValido = false;
					}
					break;
				case 2:
					if (dia >= 30) {
						diaValido = false
					}
					else if (dia == 29) {
						if (!((anho % 4 === 0 && anho % 100 != 0) || anho % 400 === 0)) {
							diaValido = false
						}
					}
					break;
			}
			if (!diaValido) {
				return 'dia_invalido_KO'
			}
		}
		else {
			//Caso especial no contempleado por el resto de condiciones
			if (this.format(id, '^00/0{0,2}$')) {
				return 'dia_invalido_KO'
			}
			//Comprobar si el mes es válido, se puede saber cual es el mes si
			//1 Hay dos / por ejemplo /10/ 10 es el mes o 20/08/ 8 es el mes
			//2 Después de un / hay un número de más de 2 dígitos, entonces sabemos que ese es el
			//año y por ende el anterior es el mes
			if (this.format(id, '^[0-9]{2}/[0-9]{3,4}$')) {
				//No hace falta comprobar si es add o edit ya que solo puede entrar aquí en un search
				let mes = fecha.split('/')[0]
				if (!(mes > 0 && mes <= 12)) {
					return 'mes_invalido_KO'
				}
			}
			if (this.format(id, '^[0-9]{0,2}/[0-9]{2}/[0-9]{0,4}$')) {
				let mes = fecha.split('/')[1]
				if (!(mes > 0 && mes <= 12)) {
					return 'mes_invalido_KO'
				}
			}

			//Comprobar si el día es válido
			//Solo se puede saber el día con un substring si hay explícitamente dos / y el día está entero
			//Por ejemplo en 03/02/ El día es 3
			if (this.format(id, '^[0-9]{2}/[0-9]{2}/[0-9]{0,4}$')) {
				let valoresFecha = fecha.split('/')
				let dia = valoresFecha[0]
				let mes = valoresFecha[1]
				let diaValido = true
				if (!(dia > 0 && dia <= 31)) {
					return 'dia_invalido_KO'
				}
				switch (mes) {
					case 4:
					case 6:
					case 9:
					case 11:
						if (dia > 30) {
							diaValido = false;
						}
						break;
					case 2:
						if (dia >= 30) {
							diaValido = false
						}
						break;
				}
				if (!diaValido) {
					return 'dia_invalido_KO'
				}
			}
		}
		return true
	}
	validate_radio(id, valoresPosibles) {
		var menu = document.getElementsByName(id);
		var contador = 0;

		for (var i = 0; i < menu.length; i++) {
			if (menu[i].checked) {
				if (valoresPosibles.includes(menu[i].value)) {
					contador++;
				}
				else {
					if (menu[i].value == '') { }
					else {
						return 'checkbox_value_KO:' + menu[i].value + ':' + menu[i].dataset['id']
					}
				}
			}
		}
		var codeerror = '';

		switch (contador) {
			case 1:
				return true;
			default:
				codeerror = 'checkbox_vacio_KO';
				break;
		}
		return codeerror;
	}
	validate_checkbox(id, valoresposibles) {
		var menu = document.getElementsByName('menu_persona');
		var contador = 0;
		var contadorNoChecks = 0
		for (var i = 0; i < menu.length; i++) {
			if (menu[i].checked) {
				if (valoresposibles.includes(menu[i].value)) {
					contador++;
				}
				else {
					if (menu[i].value == '') {
						return 'checkbox_vacio_KO';
					}
					else {
						console.log(menu[i])
						return 'checkbox_value_KO:' + menu[i].value + ':' + menu[i].dataset['id']
					}
				}
			}
			else {
				contadorNoChecks++
			}
		}
		if (contadorNoChecks === valoresposibles.length) {
			return 'checkbox_vacio_KO'
		}
		var codeerror = '';

		switch (contador) {
			case 0:
				codeerror = 'checkbox_value_KO';
				break;
			case 1:
				return true;
			default:
				return true
				//codeerror = 'menu_persona_max_size_KO';
				break;
		}

		return codeerror;

	}
}
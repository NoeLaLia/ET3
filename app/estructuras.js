const estructura_alumnograduacion ={
    entity : 'alumnograduacion',
    attributes:{
        alumnograduacion_login: {
            html: {
                tag: 'alumnograduacion_login',
                type: 'input',
                component_visible_size: '20',
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }
        },
        alumnograduacion_password : {
            html: {
                tag: 'alumnograduacion_password',
                type: 'input',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }
        },
        alumnograduacion_nombre : {
            html: {
                tag: 'alumnograduacion_nombre',
                type: 'input',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }

        },
        alumnograduacion_apellidos : {
            html: {
                tag: 'alumnograduacion_apellidos',
                type: 'input',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }
            
        },
        alumnograduacion_titulacion : {
            html: {
                tag: 'alumnograduacion_titulacion',
                type: 'select',
                options : ['GREI','GRIA','MEI','MIA','PCEO'],
                component_visible_size: 20
            },
           rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }

        },
        alumnograduacion_dni : {
            html: {
                tag: 'alumnograduacion_dni',
                type: 'input',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }

        },
        alumnograduacion_telefono : {
            html: {
                tag: 'alumnograduacion_telefono',
                type: 'input',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }

        },
        alumnograduacion_direccion : {
            html: {
                tag: 'alumnograduacion_direccion',
                type: 'textarea',
                rows: 5,
                columns: 33,
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }

        },
        alumnograduacion_email : {
            html: {
                tag: 'alumnograduacion_email',
                type: 'input',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }
            
        },
        alumnograduacion_fotoacto : {
            html: {
                tag: 'alumnograduacion_fotoacto',
                type: 'input',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }

        },
        nuevo_alumnograduacion_fotoacto : {
            html: {
                tag: 'nuevo_alumnograduacion_fotoacto',
                type: 'file',
            },
            rules: {
                validations: {
                    ADD: {
                        no_file : true,
                         min_size: 7,
                         max_size: 100,
                         max_size_file : [{ max_size_file: 2000000 }, { type_file: 'image/jpeg' }, { format_name_file:'^[a-zA-Z.]*$' }],
                         type_file : [{ max_size_file: 2000000 }, { type_file: 'image/jpeg' }, { format_name_file:'^[a-zA-Z.]*$' }],
                         format_name_file : [{ max_size_file: 2000000 }, { type_file: 'image/jpeg' }, { format_name_file:'^[a-zA-Z.]*$' }]
                    }
                }
            }
            
        }
        
    }
}
const estructura_mish ={
    entity : 'alumnograduacion',
    attributes:{
        alumnograduacion_login: {
            html: {
                tag: 'alumnograduacion_login',
                type: 'input',
                component_visible_size: '20',
            },
            rules: {
                validations: {
                    ADD: {
                         min_size: 5,
                         max_size: 15,
                         exp_reg: '^[0-9a-zA-Z]*$'
                    }
                }
            }
        }
        
    }
}
/*
const estructura_nombreentidad = {
    entity: 'nombredeentidad',
    // nombre de la entidad (obligatorio)
    attributes: {
        // conjunto de descripciones de atributos de la entidad (obligatorio)
        nombredeatributo: {
            //nombre del atributo(obligatorio)

            html: {
                tag: 'tag html',
                //tag html (select, input, textarea, .....)
                options: ['valor1', 'valor2'],
                // options de un tag select. array con las options (obligatorio con tag select)
                type: "",
                // atributo de tag input (file, text, data, number,.... ) obligatorio con tag input
                rows: 0,
                // atributo de tag textarea corresponde con las filas. Obligatorio con un textarea
                columns: 0,
                // atributo de tag textarea corresponde con las columnas. Obligatorio con un textarea
                multiple: true,
                // atributo de valores multiples (input file, select, chechbox, ...). Obligatorio si puede coger multiples valores el atributo
                component_visible_size: 7,
                // atributo de longitud fisica del campo del formulario. Obligatorio si se quiere que tenga su tamaño adecuado
            },

            rules: {
                // reglas de validacion (obligatorio)
                validations: {
                    // conjunto de validaciones que se aplican al atributo (obligatorio)
                    nombreaccion: {
                        // indicación de la accion. No obligatorio si para el campo no hay validacion.(ADD, EDIT,SEARCH)
                        min_size: 8,
                        // funcion atomica tamaño minimo, tiene el parametro de tamaño minimo del atributo (el que sea). No obligatorio sino se comprueba el tamaño minimo
                        max_size: 68,
                        // funcion atomica tamaño maximo, tiene el parametro de tamaño maximo del atributo (el que sea). No obligatorio sino se comprueba el tamaño maximo
                        exp_reg: expresionregular,
                        // funcion atomica para comprobar el formato del atributo, tiene el parametro de expresión regular del valor del atributo (el que sea). No obligatorio sino se comprueba el formato
                        no_file: true,
                        // funcion atomica no existe fichero. no obligatorio si no se tiene que comprobar vacio
                        max_size_file: [{ max_size_file: 2000000 }, { type_file: 'image/jpg' }, { format_name_file:'expresionregular' }],
                        // funcion atomica para comprobar el tamaño maximo del objeto fichero, tiene todos las propiedades del objeto fichero. No obligatorio sino se comprueba el tamaño maximo
                        type_file: [{ max_size_file: 2000000 }, { type_file: 'image/jpg' }, { format_name_file:'expresionregular' }],
                        // funcion atomica para comprobar el tipo mime del objeto fichero, tiene todos las propiedades del objeto fichero. No obligatorio sino se comprueba el tipo mime
                        format_name_file: [{ max_size_file: 2000000 }, { type_file: 'image/jpg' }, { format_name_file:'expresionregular' }],
                        // funcion atomica para comprobar el formato del nombre del fichero en el objeto fichero, tiene todos las propiedades del objeto fichero. No obligatorio sino se comprueba el formato del nombre
                        personalized: true, // funcion personalizada. Indica que hay un metodo en la clase entidad correspondiente con el nombre specialized_test_nombreatributo(). No obligatorio si no hay funciones de validacion personalizadas
                    } // fin nombreaccion 
                }  // fin validations
            } // fin rules
        }, // fin de este atributo y se rellena para los siguientes
    }, //fin attributes
} // fin estructura
*/
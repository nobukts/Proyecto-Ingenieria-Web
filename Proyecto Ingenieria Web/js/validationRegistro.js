$("#formRegistro").validate({

    rules: {

        inputNombreRegistro: {

            required: true,
            solo_letras:true

        },

        inputCorreoRegistro: {

            required: true,
            email: true

        },

        inputTelefonoRegistro: {

            required:true,
            digits:true

        },

        inputContraRegistro: {

            required:true

        },

        inputConfirmarContraRegistro: {

            required:true,
            equalTo: "#inputContraRegistro"

        }

    },

    messages: {

        inputNombreRegistro: {

            required: "Debe ingresar un nombre",
            solo_letras: "Ingrese solo letras"

        },

        inputCorreoRegistro: {

            required: "Debe ingresar un correo",
            email: "Ingrese un correo valido"

        },

        inputTelefonoRegistro: {

            required: "Debe ingresar un telefono",
            digits: "Ingrese solo numeros"

        },

        inputContraRegistro: {

            required: "Debe ingresar una contraseña",

        },

        inputConfirmarContraRegistro: {

            required: "Debe ingresar una contraseña",
            equalTo: "Las contraseñas deben ser iguales"

        }


    },

    submitHandler: function(form) {

        form.submit();
        alert("Registro valido")

    }

});

jQuery.validator.addMethod("solo_letras", function(value, element) {

    return /[a-z]/.test(value);

}, "Ingrese solo letras"); 
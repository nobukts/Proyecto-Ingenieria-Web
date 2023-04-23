$("#formInicioSesion").validate({

    rules: {

        inputCorreoInicioSesion: {

            required:true,
            email:true

        },

        inputContraInicioSesion: {

            required:true

        }

    },

    messages: {

        inputCorreoInicioSesion: {

            required: "Ingrese un correo",
            email: "Debe ingresar un correo valido"

        }, 

        inputContraInicioSesion: {

            required: "Ingrese una contraseña"

        }

    },

    submitHandler: function(form) {

        form.submit();
        alert("Ingreso Exitoso")

    }

});
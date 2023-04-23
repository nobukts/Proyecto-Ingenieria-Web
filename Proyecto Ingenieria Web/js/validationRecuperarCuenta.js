$("#formRecuperarCuenta").validate({

    rules: {

        inputCorreo: {

            required:true,
            email:true

        },

        codigo: {

            required:true,
            digits:true

        },

        inputContrasenia: {

            required:true

        },

        inputConfirmarContrasenia: {

            required:true,
            equalTo: "#inputContrasenia"

        }

    },

    messages: {

        inputCorreo: {

            required: "Ingrese un correo",
            email: "Debe ingresar un correo valido"

        },

        codigo: {

            required: "Ingrese el código",
            digits: "Sólo escriba numeros"
            
        },

        inputContrasenia: {

            required: "Ingrese la contraseña"

        },

        inputConfirmarContrasenia: {

            required: "Ingrese la contraseña",
            equalTo: "Las contraseñas deben ser iguales"

        }

    },

    submitHandler: function(form) {
        if(window.location.pathname == "/Proyecto%20Ingenieria%20Web/html/recuperarCuenta1.html"){
            window.location.href = "/Proyecto Ingenieria Web/html/recuperarCuenta2.html"
        }
        if(window.location.pathname == "/Proyecto%20Ingenieria%20Web/html/recuperarCuenta2.html"){
            window.location.href = "/Proyecto Ingenieria Web/html/recuperarCuenta3.html"
        }
        if(window.location.pathname == "/Proyecto%20Ingenieria%20Web/html/recuperarCuenta3.html"){
            form.submit();
            alert("Se ha cambiado la contraseña de forma correcta")
            window.location.href = "/Proyecto Ingenieria Web/html/inicioSesion.html"
        }
        

    }

});
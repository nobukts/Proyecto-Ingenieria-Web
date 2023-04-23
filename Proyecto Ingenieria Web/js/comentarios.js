$("#formCrearComentario").validate({

    rules: {

        areaTexto: {

            required:true

        }

    },

    messages: {

        areaTexto: {

            required: "Debe escribir un comentario para publicarlo"

        }

    },

    submitHandler: function(form) {
        crearComentario();

    }

});

function crearComentario(){
    var valorTexto = document.getElementById("areaTexto").value;
    var texto = document.createTextNode(valorTexto);
    var nuevoComentario = document.createElement("p")
    var etiquetaPadre = document.querySelector(".mostrar-comentarios")
    const usuario = document.createElement("h4")

    usuario.appendChild(document.createTextNode("Anonymus:"));
    nuevoComentario.appendChild(texto);
    etiquetaPadre.append(usuario,nuevoComentario);
}
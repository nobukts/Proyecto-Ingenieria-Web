$("#form-olla-comun").validate({
    rules:{
      nombreEvento:{
        required: true
      },
      nombreCalle:{
        required: true
      },
      fechaActividad:{
        required: true
      },
      descripcionEvento:{
        required: true
      }
    },
    messages:{
      nombreEvento:{
        required: "Ingrese un nombre."
      },
      nombreCalle:{
        required: "Ingrese una dirección."
      },
      fechaActividad:{
        required: "Ingrese una fecha."
      },
      descripcionEvento:{
        required: "Ingrese una descripción del evento.",
      }
    },
    submitHandler: function(form) {
      form.submit();
      alert("Se cargo correctamente la información!")
    }
});
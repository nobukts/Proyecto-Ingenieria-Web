$("#form-error").validate({
    rules:{
      nombreError:{
        required: true
      },
      descripcionError:{
        required: true
      }
    },
    messages:{
      nombreError:{
        required: "Ingrese un titulo para el error"
      },
      descripcionError:{
        required: "Ingrese una descripción del error.",
      }
    },
    submitHandler: function(form) {
      form.submit();
      alert("Se cargo correctamente la información!")
    }
});
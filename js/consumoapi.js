$(document).ready(function () {
  $("#formulario").validate({
    rules: {
      txt_rut: {
        required: true,
      },
      nombre: {
        required: true,
        minlength: 2,
      },
      celular: {
        required: true,
        minlength: 8,
      },
      pablabraMagica: {
        required: true,
        minlength: 5,
        equal:"palabra magica",
      },
      likek: {
        required: true,
      },
    },
    messages: {
      txt_rut: {
        required: "Por favor ingresa tu rut",
      },
      nombre: {
        required: "Por favor ingresa nombre",
        minlength:
          "El nombre no puede ser menos de 2 caracteres",
      },
      celular: {
        required: "Ingresa tu numero de celular",
        minlength:
          "El numero no puede ser menor a 8",
      },
      pablabraMagica:{
        required:"palabra magica",
      },
      likek: {
        required: "Por favor",
      },
    },
  });
});

$("#webS").click(function (event) {
  event.preventDefault();
  var url = "https://api.kanye.rest/";
  fetch(url)
      .then(response => response.json())
      .then(data => 
          {
              var $twitRandom = $('<p>').text(data.quote);
                // para limpiar el contedor antes de desplegar
              $("#info").empty();
              $('#info')
                  .append($twitRandom)
              })
              .catch(error => console.error(error));
          });
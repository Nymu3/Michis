// Aqui inicia las validaciones
$(document).ready(function () {
  $("#formulario").validate({
    rules: {
      txt_rut: {
        required: true,
        maxlength:9,
      },
      nombre: {
        required: true,
        minlength: 2,
      },
      celular: {
        required: true,
        number : true,
        minlength: 8,
        maxlength:8,
      },
      pablabraMagica: {
        required: true,
        minlength: 5,
      },
      likek: {
        required: true,
        maxlength:4,
      },
    },
    messages: {
      txt_rut: {
        required: "Por favor ingresa tu rut",
        maxlength:"Maximo 9 caracteres",
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
        number:"Solo se permite caracter tipo numero",
        maxlength:"Sobrepasa el numero de digitos",
      },
      pablabraMagica:{
        required:"palabra magica",
        minlength:"Minimo 5 caracteres",
      },
      likek: {
        required: "?????",
        maxlength:"Maximo 4 Caracteres"
      },
    },
  });
});
// Aqui se consige la informacion de una api
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
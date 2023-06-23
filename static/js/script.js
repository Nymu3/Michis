$("#formulario1").validate({
    rules: {
        txtEmail: {
            required: true,
            email: true,
        },
        txtContrasena: {
            required: true,
            minlength: 5,
        },
        txtRepetirContrasena: {
            required: true,
            equalTo: "#id_txtContrasena",
        },
    },
    messages: {
        txtEmail: {
            required: "Ingrese email!!!",
            email: "No cumple formato",
        },
        txtContrasena: {
            required: "Ingrese Password!!!",
            minlength: "Min. 5 caract",
        },
        txtRepetirContrasena: {
            required: "Repita el Password!!",
            equalTo: " deben ser iguales!!!!",
        },
    },
});
jQuery(document).ready(function () {
    $("#showpassword").on("click", function () {
        var pass = $("#id_txtContrasena");
        var pass2 = $("#id_txtRepetirContrasena");

        var fieldtype = pass.attr("type");
        var fieldtype2 = pass2.attr("type");

        if ((fieldtype == "password") & (fieldtype2 == "password")) {
            pass.attr("type", "text");
            pass2.attr("type", "text");
            $(this).text("Ocultar Password");
        } else {
            pass.attr("type", "password");
            pass2.attr("type", "password");
            $(this).text("Ver Password");
        }
    });
});


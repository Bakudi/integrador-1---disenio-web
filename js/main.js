document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elems);
});

function cambiarColor() {
  let caja = document.getElementById("caja");
  caja.style.background = "green";
}

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Completa todos los campos");
  } else {
    M.toast({html: 'Enviado correctamente'});
  }
}
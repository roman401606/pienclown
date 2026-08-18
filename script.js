// Validador simple para el formulario de contacto
(function(){
  const form = document.getElementById('form-contacto');
  if(!form) return;

  const nombre = document.getElementById('nombre');
  const correo = document.getElementById('correo');
  const mensaje = document.getElementById('mensaje');

  const errNombre = document.getElementById('error-nombre');
  const errCorreo = document.getElementById('error-correo');
  const errMensaje = document.getElementById('error-mensaje');
  const successBox = document.getElementById('form-success');

  function validarEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function limpiaErrores(){
    errNombre.textContent = '';
    errCorreo.textContent = '';
    errMensaje.textContent = '';
    successBox.textContent = '';
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    limpiaErrores();
    let valido = true;

    const vNombre = nombre.value.trim();
    const vCorreo = correo.value.trim();
    const vMensaje = mensaje.value.trim();

    if(vNombre.length < 3){
      errNombre.textContent = 'Ingresa al menos 3 caracteres en el nombre.';
      valido = false;
    }

    if(!validarEmail(vCorreo)){
      errCorreo.textContent = 'Introduce un correo electrónico válido.';
      valido = false;
    }

    if(vMensaje.length < 10){
      errMensaje.textContent = 'El mensaje debe tener al menos 10 caracteres.';
      valido = false;
    }

    if(!valido) return;

    // Simular envío exitoso
    successBox.textContent = 'Mensaje enviado correctamente. Gracias.';
    form.reset();

    // Opcional: ocultar el mensaje después de unos segundos
    setTimeout(()=>{ successBox.textContent = ''; }, 5000);
  });

  // Limpiar mensaje de error mientras el usuario escribe
  [nombre, correo, mensaje].forEach((el)=>{
    el.addEventListener('input', ()=>{
      switch(el.id){
        case 'nombre': errNombre.textContent=''; break;
        case 'correo': errCorreo.textContent=''; break;
        case 'mensaje': errMensaje.textContent=''; break;
      }
    });
  });
})();

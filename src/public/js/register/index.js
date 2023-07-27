document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');

  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var password = document.getElementById('password').value;

    var payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      age: age,
      password: password,
    };

    fetch('/api/sessions/useradmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(function (response) {
        if (response.ok) {
          swal('Usuario registrado', 'Ingresa con tu Email y Password', 'success').then(function () {
            window.location.href = 'http://localhost:8080/';
          });
        } else {
          response.json().then(function (data) {
            if (data.error && data.error === 'Ya existe un usuario con el mismo correo electrónico') {
              swal('Error', 'Ya existe un usuario con el mismo correo electrónico', 'error');
            } else {
              swal('Error', 'No se pudo registrar el usuario', 'error');
            }
          });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  });
});

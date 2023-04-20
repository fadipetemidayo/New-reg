const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (password !== confirmPassword) {
    Swal.fire({
      title: 'Error!',
      text: 'Passwords do not match',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return;
  }
  
  // Here you can add code to send the form data to a server for registration
  
  Swal.fire({
    title: 'Success!',
    text: 'Registration completed successfully',
    icon: 'success',
    confirmButtonText: 'Ok'
  }).then(() => {
    form.reset();
  });
});

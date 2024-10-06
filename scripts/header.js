document.getElementById('user-icon').addEventListener('click', function () {
  let loginContent = document.getElementById('login-content');
  if (loginContent.style.display === 'none' || loginContent.style.display === '') {
    loginContent.style.display = 'block';
  } else {
    loginContent.style.display = 'none';
  }
});

document.getElementById('login-tab').addEventListener('click', function () {
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('register-form').classList.add('hidden');
  this.classList.add('active');
  document.getElementById('register-tab').classList.remove('active');
});

document.getElementById('register-tab').addEventListener('click', function () {
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('login-form').classList.add('hidden');
  this.classList.add('active');
  document.getElementById('login-tab').classList.remove('active');
});

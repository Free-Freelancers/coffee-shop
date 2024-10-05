document.getElementById('login-tab').addEventListener('click', function() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    this.classList.add('active');
    this.classList.remove('inactive');
    document.getElementById('register-tab').classList.add('inactive');
    document.getElementById('register-tab').classList.remove('active');
});

document.getElementById('register-tab').addEventListener('click', function() {
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    this.classList.add('active');
    this.classList.remove('inactive');
    document.getElementById('login-tab').classList.add('inactive');
    document.getElementById('login-tab').classList.remove('active');
});
function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Dummy validation
  if (username === 'Rangga Pramudya' && password === 'rangga2005') {
      document.getElementById('login').style.display = 'none';
      document.getElementById('profile').style.display = 'block';
      document.getElementById('presensi').style.display = 'block';
      document.getElementById('nilai').style.display = 'block';

      // Set profile picture and welcome message
      document.getElementById('profile-picture').src = 'foto angga.jpg'; // Replace with the path to the profile picture
      document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
  } else {
      alert('Username atau password salah!');
  }
}

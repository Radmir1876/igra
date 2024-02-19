
document.addEventListener('DOMContentLoaded', function() {

  if (localStorage.getItem('registered') === 'true') {

    window.location.href = 'index.html';
  } else {

    var gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `
      <h1>Регистрация</h1>
      <form id="registerForm">
        <input type="text" id="username" placeholder="Введите ваше имя" required>
        <button type="submit">Зарегистрироваться</button>
      </form>
    `;

    document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var username = document.getElementById('username').value;

      localStorage.setItem('registered', 'true');

      window.location.href = 'index.html';
    });
  }
});
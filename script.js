const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Add this to your script.js or inside a <script> tag in login.html

// For Sign In
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // You can get the name/email if you want
    const nameInput = form.querySelector('input[placeholder="Name"]');
    const name = nameInput ? nameInput.value : "User";
    localStorage.setItem('fake_logged_in', 'true');
    localStorage.setItem('fake_user_name', name);
    // Redirect to home page
    window.location.href = "index.html";
  });
}); 
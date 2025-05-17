// Show current year in the footer
const dateElement = document.getElementById("date");
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = `© ${today.toLocaleDateString(undefined, options)} Abiodun Ajibola Williams`;

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate successful form submission
  document.getElementById('form-response').style.display = 'block';
  this.reset();
});

const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Toggle icon content
  toggleButton.innerHTML = navLinks.classList.contains('active') ? '&#9776; &lt;' : '&#9776;';
});

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clock.textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize immediately
updateClock();

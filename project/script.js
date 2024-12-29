// Image Slider Functionality
let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Automatically change images every 5 seconds
setInterval(nextImage, 5000);

// Initialize the first image
showImage(currentIndex);

// Form Validation and Submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const formMessage = document.getElementById('formMessage');

  if (name && email) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for reaching out!';
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill in both fields.';
  }
});

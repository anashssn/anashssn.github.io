// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation Bar on Scroll
window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Typewriting Effect for Hero Section
const typewriteText = (element, text, speed) => {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
};

window.onload = () => {
    typewriteText(document.getElementById("hero-title"), "Syed Anas Hussain", 100);
    setTimeout(() => {
        typewriteText(document.getElementById("hero-description"), "Hi! I'm a Data Scientist with a passion for solving real-world problems using data.", 50);
    }, 2000);
};

// Modal Popups for Project Details
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};

// Carousel Functionality for Project Showcase
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    const track = document.querySelector('.carousel-track');
    currentIndex = (currentIndex + 1) % track.children.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    const track = document.querySelector('.carousel-track');
    currentIndex = (currentIndex - 1 + track.children.length) % track.children.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Remove Loading Spinner After Page Load
window.onload = function () {
    document.getElementById('loading-spinner').style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
    const showHomeBtn = document.getElementById('show-home');
    const initialContent = document.getElementById('initial-content');
    const homeSection = document.getElementById('home-section');

    showHomeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        initialContent.style.display = 'none';
        homeSection.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const showHomeBtn = document.getElementById('show-home');
    const initialContent = document.getElementById('initial-content');
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about');
    const aboutLink = document.getElementById('about-link');
    const exploreBtn = document.getElementById('explore');
    const skillsButton = document.querySelector('.v-sign-btn');
    const skillsSection = document.querySelector('#Skills');

    showHomeBtn.addEventListener('click',function (event) {
        event.preventDefault();
        initialContent.style.display = 'none';
        homeSection.style.display  = 'block';
    })
    
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior
    const aboutContent = document.querySelector('.about-content p');
    const btnText = this.textContent.trim();

    if (btnText === 'Read More') {
        aboutContent.style.maxHeight = 'none'; // Show the full content
        this.textContent = 'Show Less'; // Change button text to 'Show Less'
    } else {
        aboutContent.style.maxHeight = '100px'; // Limit content height
        this.textContent = 'Read More'; // Change button text back
    }
});
})



  
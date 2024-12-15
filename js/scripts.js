// Scroll-to-Top Button Logic
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


    // Function to update the progress bar width
    window.addEventListener("scroll", () => {
        const progressBar = document.getElementById("scrollProgressBar");
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrolled + "%";
    });



// Dynamic Greeting Based on Time of Day
function getGreeting() {
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingMessage = "Good Afternoon!";
    } else if (currentHour >= 17 && currentHour < 21) {
        greetingMessage = "Good Evening!";
    } else {
        greetingMessage = "Hello, Welcome!";
    }

    document.getElementById("greeting").innerText = greetingMessage;
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", getGreeting);




    // Get the theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
        
        // Save the preference in localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    // Load theme from localStorage on page load
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️ Light Mode';
        }
    });

    // Event listener for the button
    themeToggle.addEventListener('click', toggleDarkMode);



    let searchPerformed = false; // Track if a search has been performed

    // Search Functionality
    document.getElementById('searchForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
    
        const query = document.getElementById('searchInput').value.toLowerCase(); // Get the search query
        const sections = document.querySelectorAll('section'); // Select all sections
    
        // If a search has already been performed, refresh the page
        if (searchPerformed) {
            window.location.reload();
            return;
        }
    
        let found = false; // Track if any matching section is found
    
        sections.forEach(section => {
            const sectionText = section.innerText.toLowerCase();
            if (sectionText.includes(query)) {
                section.style.display = 'block'; // Show matching section
                found = true;
                section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
            } else {
                section.style.display = 'none'; // Hide non-matching sections
            }
        });
    
        if (!found) {
            alert('No results found for: ' + query);
        }
    
        searchPerformed = true; // Mark search as performed
    });
    

    //Carousel
    const myCarouselElement = document.querySelector('#testimonialCarousel');

    // Setting the interval to 2000ms (2 seconds)
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000, // Slide change time
        ride: 'carousel'
    });
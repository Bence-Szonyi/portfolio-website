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
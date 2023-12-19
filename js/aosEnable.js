// JavaScript to conditionally add data-aos attribute for mobile view
document.addEventListener("DOMContentLoaded", function () {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;

  if (screenWidth <= 768) {
    var elements = document.querySelectorAll(".aos-init");
    elements.forEach(function (element) {
      element.setAttribute("data-aos", "fade-in");
    });

    // Initialize AOS for the newly added elements
    AOS.init({
      once: true, // Set to true if you want the animation to occur only once
    });
  }
});

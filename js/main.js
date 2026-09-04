// GLIGHTBOX
if (typeof GLightbox !== "undefined") {
    const lightbox = GLightbox();
}

// GALLERY CATEGORY FILTER
const filterButtons = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(function (button) {


button.addEventListener("click", function () {

    const filter = button.getAttribute("data-filter");


    // Update active button
    filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-outline-dark");
    });

    button.classList.add("active");
    button.classList.remove("btn-outline-dark");
    button.classList.add("btn-warning");


    // Filter gallery items
    galleryItems.forEach(function (item) {

        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

});

});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");


    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Reset validation
    name.classList.remove("is-invalid");
    email.classList.remove("is-invalid");
    phone.classList.remove("is-invalid");
    subject.classList.remove("is-invalid");
    message.classList.remove("is-invalid");


    let isValid = true;


    // Name validation
    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        isValid = false;
    }


    // Email validation
    if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
        email.classList.add("is-invalid");
        isValid = false;
    }


    // Phone validation
    if (phone.value.trim() === "") {
        phone.classList.add("is-invalid");
        isValid = false;
    }


    // Subject validation
    if (subject.value.trim() === "") {
        subject.classList.add("is-invalid");
        isValid = false;
    }


    // Message validation
    if (message.value.trim() === "") {
        message.classList.add("is-invalid");
        isValid = false;
    }


    // If all fields are valid
    if (isValid) {

        alert("Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    }

});

}

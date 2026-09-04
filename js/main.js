// GLIGHTBOX
const lightbox = GLightbox();


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
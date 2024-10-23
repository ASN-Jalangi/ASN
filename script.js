// Sample JavaScript to handle gallery images dynamically (if needed)

// This can be extended to fetch images from a database or to allow admin to upload images.
document.addEventListener("DOMContentLoaded", () => {
    // Example of dynamically loading images in the gallery
    const galleryGrid = document.querySelector(".gallery-grid");
    const images = [
        "images/gallery1.jpg",
        "images/gallery2.jpg",
        "images/gallery3.jpg",
        "images/gallery4.jpg"
    ];

    images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "School Event Image";
        galleryGrid.appendChild(img);
    });
});

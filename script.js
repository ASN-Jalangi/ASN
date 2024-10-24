// JavaScript for Notices Section
document.addEventListener('DOMContentLoaded', function() {
    // Example Notice Data
    const notices = [
        { title: "Annual Sports Day", date: "2024-10-01", status: "NEW" },
        { title: "Cultural Celebration Program", date: "2024-09-15", status: "NEW" }
    ];

    // Load Notices into Table
    const noticeBody = document.getElementById('notices-body');
    notices.forEach((notice, index) => {
        const row = document.createElement('tr');
        row.classList.add('notice-row');

        // Create Columns
        const titleCol = document.createElement('td');
        titleCol.innerText = notice.title;

        const dateCol = document.createElement('td');
        dateCol.innerText = notice.date;

        const statusCol = document.createElement('td');
        statusCol.innerText = notice.status;
        if (notice.status === 'NEW') {
            statusCol.style.color = 'red';
            statusCol.style.fontWeight = 'bold';
        }

        row.appendChild(titleCol);
        row.appendChild(dateCol);
        row.appendChild(statusCol);

        // Add Row Click Event for Viewing Notice
        row.addEventListener('click', () => {
            if (notice.status === 'NEW') {
                notice.status = ''; // Mark as viewed
                statusCol.innerText = '';
                row.classList.add('viewed');
            }
            // Open Notice as PDF (You'd link this to real notice data in your project)
            window.open(`notice.pdf`, '_blank');
        });

        noticeBody.appendChild(row);
    });
});

// JavaScript for Gallery Section
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = ["photo1.jpg", "photo2.jpg", "photo3.jpg"]; // Placeholder image paths

    const galleryGrid = document.querySelector('.gallery-grid');
    galleryImages.forEach((imageSrc, index) => {
        const imgThumb = document.createElement('img');
        imgThumb.src = imageSrc;
        imgThumb.classList.add('gallery-thumb');
        imgThumb.alt = `Gallery Image ${index + 1}`;

        imgThumb.addEventListener('click', () => {
            openImageModal(imageSrc);
        });

        galleryGrid.appendChild(imgThumb);
    });
});

function openImageModal(imageSrc) {
    // Create Modal Elements
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
    modalImage.classList.add('modal-image');

    // Append Elements to Body
    modalOverlay.appendChild(modalImage);
    document.body.appendChild(modalOverlay);

    // Close Modal on Click
    modalOverlay.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
    });
}

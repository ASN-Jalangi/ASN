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
    const galleryImages = ["ASN_Cover.jpg", "photo2.jpg", "photo3.jpg"]; // Placeholder image paths

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

// JavaScript for Gallery Pop-up Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("gallery-modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".gallery-image").forEach(image => {
        image.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when user clicks outside of the image
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});



// Function to generate a PDF for notices
function generateNoticePDF(noticeTitle, noticeContent) {
    const { jsPDF } = window.jspdf;

    // Create a new PDF document
    const doc = new jsPDF();

    // Add School Logo
    const imgData = 'data:image/png;base64,ASN_LOGO_BASE64'; // Replace with the actual base64 string of your logo
    doc.addImage(imgData, 'PNG', 15, 10, 30, 30);

    // Add School Name
    doc.setFontSize(20);
    doc.text("ADARSHA SHISHU NIKETAN", 60, 20);
    doc.setFontSize(12);
    doc.text("Sadikhan's Dearh, Jalangi, Murshidabad, West Bengal, 742303", 60, 27);

    // Add Notice Title
    doc.setFontSize(16);
    doc.text(`Notice: ${noticeTitle}`, 15, 50);

    // Add Notice Content
    doc.setFontSize(12);
    const splitContent = doc.splitTextToSize(noticeContent, 180);
    doc.text(splitContent, 15, 60);

    // Add Contact Details at Bottom
    doc.setFontSize(10);
    doc.text("Address: Sadikhan's Dearh, Jalangi, Murshidabad, West Bengal, 742303", 15, 270);
    doc.text("Contact: +91 9732408005 / +91 9775939062 / +91 8617535277", 15, 275);
    doc.text("Email: adarshashishuniketan.skd@gmail.com", 15, 280);

    // Save the PDF
    doc.save(`${noticeTitle}.pdf`);
}

// JavaScript to open notice in PDF
document.addEventListener('DOMContentLoaded', function() {
    const noticeLinks = document.querySelectorAll('.notice-link');
    noticeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const noticeTitle = link.dataset.title;
            const noticeContent = link.dataset.content;
            generateNoticePDF(noticeTitle, noticeContent);
        });
    });
});

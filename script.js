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

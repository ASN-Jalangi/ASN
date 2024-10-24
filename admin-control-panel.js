// Admin credentials (Hardcoded for now)
const adminUserId = "ToumikASN";
const adminPassword = "Toumik@786";

// Handle Admin Login
function handleAdminLogin(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId === adminUserId && password === adminPassword) {
        window.location.href = 'admin-control-panel.html'; // Redirect to the control panel
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

// Placeholder data for notices
let notices = [];

// Function to show different sections in ACP
function showSection(sectionId) {
    document.querySelectorAll('.admin-section').forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Function to add a new notice
function addNotice(event) {
    event.preventDefault();
    const title = document.getElementById('notice-title').value;
    const content = document.getElementById('notice-content').value;
    
    notices.push({ title, content, date: new Date().toLocaleDateString(), visited: false });
    document.getElementById('add-notice-form').reset();
    renderNotices();
}

// Function to render notices in the table
function renderNotices() {
    const noticeTable = document.getElementById('notice-table');
    noticeTable.innerHTML = ''; // Clear existing notices

    notices.forEach((notice, index) => {
        const row = document.createElement('tr');
        row.classList.add(notice.visited ? 'visited' : 'new');

        const titleCell = document.createElement('td');
        titleCell.textContent = notice.title;
        row.appendChild(titleCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = notice.date;
        row.appendChild(dateCell);

        const actionCell = document.createElement('td');

        // Create a Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            notices.splice(index, 1);
            renderNotices();
        };
        actionCell.appendChild(deleteButton);

        // Create a Download PDF button
        const pdfButton = document.createElement('button');
        pdfButton.textContent = "Download PDF";
        pdfButton.onclick = () => generatePDF(index);
        actionCell.appendChild(pdfButton);

        row.appendChild(actionCell);
        noticeTable.appendChild(row);
    });
}

// Function to generate PDF for a notice
function generatePDF(noticeIndex) {
    const notice = notices[noticeIndex];
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Adarsha Shishu Niketan", 20, 20);
    doc.setFontSize(16);
    doc.text("Notice Title: " + notice.title, 20, 40);
    doc.setFontSize(14);
    doc.text("Date: " + notice.date, 20, 50);
    doc.setFontSize(12);
    doc.text("Content: ", 20, 70);
    doc.text(notice.content, 20, 80);
    doc.text("Contact: +91 9732408005 | Email: adarshashishuniketan.skd@gmail.com", 20, 120);
    
    // Save the generated PDF
    doc.save(notice.title + ".pdf");
}

// Handle image uploads for the gallery
function uploadPhoto() {
    const fileInput = document.getElementById('upload-photo');
    const gallery = document.getElementById('admin-gallery');
    const file = fileInput.files[0];
    
    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.alt = "Uploaded Photo";
        gallery.appendChild(img);
    }
}

// Handle contact info update
function editContact(event) {
    event.preventDefault();
    const contactNumber = document.getElementById('admin-contact-number').value;
    const contactEmail = document.getElementById('admin-contact-email').value;
    
    // Update the stored contact info (placeholder for now)
    alert("Contact Info Updated");
}

// Handle admin credentials update
function changeAdminCredentials(event) {
    event.preventDefault();
    const newAdminId = document.getElementById('new-admin-id').value;
    const newAdminPassword = document.getElementById('new-admin-password').value;
    
    // Update stored admin credentials (placeholder for now)
    alert("Admin Credentials Updated");
}

// Handle Logout
function logout() {
    window.location.href = 'admin-login.html';
}

// Initial rendering of notices
renderNotices();


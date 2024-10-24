// Sample data to populate the notices
const notices = [
    { title: "Annual Sports Day", date: "2024-10-15", visited: false },
    { title: "Cultural & Prize Celebration", date: "2024-11-05", visited: true },
];

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

// Render notices on page load
window.onload = renderNotices;

// Function to open modal with the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('gallery-modal');
    modal.style.display = "none";
}

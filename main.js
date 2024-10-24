// Sample data to populate the notices
const notices = [
    { title: "Annual Sports Day", date: "2024-10-15", visited: false },
    { title: "Cultural & Prize Celebration", date: "2024-11-05", visited: true },
];

function renderNotices() {
    const noticeList = document.getElementById('notice-list');
    noticeList.innerHTML = ''; // Clear previous entries

    notices.forEach((notice, index) => {
        const tr = document.createElement('tr');
        tr.classList.add(notice.visited ? 'visited' : 'new');
        
        const titleTd = document.createElement('td');
        titleTd.textContent = notice.title;
        tr.appendChild(titleTd);

        const dateTd = document.createElement('td');
        dateTd.textContent = notice.date;
        tr.appendChild(dateTd);

        const statusTd = document.createElement('td');
        if (!notice.visited) {
            const newIcon = document.createElement('span');
            newIcon.classList.add('new-icon');
            newIcon.textContent = 'NEW';
            statusTd.appendChild(newIcon);
        }
        tr.appendChild(statusTd);

        // Add click event to mark notice as visited
        tr.addEventListener('click', () => {
            notice.visited = true;
            renderNotices(); // Re-render the notices
        });

        noticeList.appendChild(tr);
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

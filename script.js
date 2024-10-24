// script.js

// Modal pop-up for Gallery
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content"><img src="${this.src}" alt="Full Size Image"><span class="close-btn">&times;</span></div>`;
        document.body.appendChild(modal);

        // Close modal on click
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });
    });
});

// Handling Notices Visual Feedback
const noticeTable = document.getElementById('notice-table');

function markAsViewed(noticeId) {
    const noticeRow = document.getElementById(`notice-${noticeId}`);
    noticeRow.classList.remove('new-notice');
    noticeRow.classList.add('viewed-notice');
}

function loadNotices() {
    const notices = [
        { id: 1, title: 'Notice 1', date: '2024-10-01', viewed: false },
        { id: 2, title: 'Notice 2', date: '2024-10-20', viewed: false },
        // Add more notices as needed
    ];

    notices.forEach(notice => {
        const row = document.createElement('tr');
        row.id = `notice-${notice.id}`;
        row.classList.add(notice.viewed ? 'viewed-notice' : 'new-notice');
        row.innerHTML = `
            <td>${notice.title}</td>
            <td>${notice.date}</td>
        `;
        row.addEventListener('click', () => {
            markAsViewed(notice.id);
            // Generate PDF or open notice here
        });
        noticeTable.appendChild(row);
    });
}

window.onload = function() {
    loadNotices();
};

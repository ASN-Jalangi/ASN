document.addEventListener('DOMContentLoaded', () => {
    const noticeList = document.querySelector('.notice-list');

    // Mockup notices
    const notices = [
        { id: 1, title: "Annual Sports Day Announcement", new: true, date: "2024-10-15" },
        { id: 2, title: "Cultural Celebration Program", new: true, date: "2024-10-10" }
    ];

    // Render notices
    notices.forEach(notice => {
        const listItem = document.createElement('li');
        listItem.textContent = notice.title;
        if (notice.new) {
            listItem.classList.add('new-notice');
            listItem.innerHTML += `<span class='new-tag'>NEW</span>`;
        }
        noticeList.appendChild(listItem);

        // Add click event to view notice
        listItem.addEventListener('click', () => {
            // Logic to mark as read and open in PDF (not implemented)
            listItem.classList.remove('new-notice');
            listItem.querySelector('.new-tag').remove();
            // Open PDF logic here
        });
    });
});

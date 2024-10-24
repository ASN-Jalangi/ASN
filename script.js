// Sample data for notices
const notices = [
    { title: "Annual Sports Day", date: "2024-10-01", viewed: false },
    { title: "Cultural Program", date: "2024-09-15", viewed: false },
];

// Function to display notices
function displayNotices() {
    const table = document.getElementById('notices-table');
    notices.forEach((notice, index) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = `<span style="color: ${notice.viewed ? 'grey' : 'black'};">${notice.title} ${notice.viewed ? '' : '<strong>[NEW]</strong>'}</span>`;
        cell2.innerHTML = notice.date;

        // Add click event to mark notice as viewed
        row.onclick = () => {
            notice.viewed = true; // Mark as viewed
            displayNotices(); // Refresh display
        };
    });
}

// Call function to display notices on page load
window.onload = displayNotices;

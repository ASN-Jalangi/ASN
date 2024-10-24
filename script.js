// JavaScript code for managing dynamic features

// Sample Data for Notifications (This can be dynamically fetched from a server or database)
let notifications = [
    { id: 1, title: "Annual Sports Day", date: "2024-10-01", content: "Join us for the Annual Sports Day event!" },
    { id: 2, title: "Cultural & Prize Celebration", date: "2024-11-15", content: "Don't miss our Cultural & Prize Celebration program!" }
];

// Function to display notifications and manage read/unread status
function displayNotifications() {
    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = ''; // Clear existing notifications

    notifications.forEach((notice) => {
        // Create notice item
        const noticeItem = document.createElement('li');
        noticeItem.textContent = `${notice.title} - ${notice.date}`;

        // Check read/unread status using local storage
        const isRead = localStorage.getItem(`notification_${notice.id}`);
        noticeItem.className = isRead ? 'read-notice' : 'unread-notice';

        // Add "NEW" tag if not read
        if (!isRead) {
            const newTag = document.createElement('span');
            newTag.textContent = 'NEW';
            newTag.className = 'new-tag';
            noticeItem.appendChild(newTag);
        }

        // Add event listener to mark as read when clicked
        noticeItem.addEventListener('click', () => {
            localStorage.setItem(`notification_${notice.id}`, true);
            displayNotifications();
        });

        notificationList.appendChild(noticeItem);
    });
}

// Function to clean up old notifications older than one month
function cleanOldNotifications() {
    const today = new Date();
    notifications = notifications.filter((notice) => {
        const noticeDate = new Date(notice.date);
        return (today - noticeDate) <= 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    });
    displayNotifications();
}

// Admin functionalities: Add, delete, update notifications, and manage gallery (to be implemented with real server/database)
function adminActions() {
    // Simulate adding a new notification (in a real app, this would involve form input and a server call)
    document.querySelector('.admin-section button').addEventListener('click', () => {
        const newNotice = { id: notifications.length + 1, title: "New Notice", date: new Date().toISOString().split('T')[0], content: "New notice content" };
        notifications.push(newNotice);
        displayNotifications();
    });

    // Simulate deleting old notifications
    document.querySelector('.admin-section button:nth-of-type(2)').addEventListener('click', () => {
        cleanOldNotifications();
    });
}

// Initialize the website functions
document.addEventListener('DOMContentLoaded', () => {
    displayNotifications();
    cleanOldNotifications();
    adminActions();
});

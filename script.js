document.addEventListener('DOMContentLoaded', function() {
    const notificationList = document.getElementById('notification-list');
    const notifications = [
        { id: 1, text: 'Annual Sports Day on 10th December', date: '2024-11-10' },
        { id: 2, text: 'Cultural & Prize Celebration Program on 15th December', date: '2024-12-15' }
    ];

    // Display Notifications
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.textContent = notification.text;
        li.classList.add('new');
        li.addEventListener('click', function() {
            li.classList.remove('new');
            this.style.backgroundColor = '#e6e6e6';
        });
        notificationList.appendChild(li);
    });

    // Admin Login
    document.getElementById('admin-login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'ToumikASN' && password === 'Toumik@786') {
            alert('Login successful! Redirecting to admin panel...');
            // Code to redirect to the admin panel or control page goes here
        } else {
            alert('Invalid login credentials');
        }
    });
});

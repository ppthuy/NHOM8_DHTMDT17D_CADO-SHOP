document.addEventListener('DOMContentLoaded', function() {
    const currentUser = sessionStorage.getItem('currentUser');

    if (currentUser) {
        const user = JSON.parse(currentUser);
        const userWelcome = document.getElementById("userWelcome");

        if (userWelcome) {
            userWelcome.textContent = `Welcome, ${user.username}!`; // Display username
        }
    }
});


function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.side-menu a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});
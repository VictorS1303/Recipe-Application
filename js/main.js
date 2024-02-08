const navToggleBtn = document.getElementById('nav_toggle_btn')
const navBar = document.getElementById('main_nav')

// EVENT LISTENERS //
navToggleBtn.addEventListener('click', toggleNavBar)


// FUNCTIONS //
function toggleNavBar()
{
    navToggleBtn.classList.toggle('active')
    navBar.classList.toggle('active')
}
// Let's go
// Let's go

// grab humberger icon first to add events
const humbergerIcon = document.querySelector('.humberger-icon');



// Toggle className for 'Humberger Icon'
function toggleIcon() {
    this.classList.toggle('open')
}

// Toggle className for 'Humberger Menu'
function toggleMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active')
}

// Event Listeners
humbergerIcon.addEventListener('click', toggleIcon, false)
humbergerIcon.addEventListener('click', toggleMenu, false)


console.log("Hello from script.js!");

// Dropdown Header Scroll Functionality
const dropdownHeader = document.querySelector('.dropdown-header');
const mainHeader = document.querySelector('#hero');

function toggleDropdownHeader() {
    const mainHeaderHeight = mainHeader.offsetHeight;

    // Add the 'show' class if scrolled past the main header
    if (window.scrollY > mainHeaderHeight) {
        dropdownHeader.classList.add('show');
    } else {
        dropdownHeader.classList.remove('show');
    }
}

// Attach the scroll event to toggle the dropdown header
window.addEventListener('scroll', toggleDropdownHeader);

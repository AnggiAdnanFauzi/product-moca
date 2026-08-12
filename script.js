// script.js

// WhatsApp Redirect Function
function orderViaWA(message) {
    const phoneNumber = "6288215241050"; // Moca's WhatsApp Number
    
    // Check if user is on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the appropriate WhatsApp URL
    let waUrl = "";
    if (isMobile) {
        waUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
        waUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }
    
    // Open in a new tab/window
    window.open(waUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });
    // Catalog Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const catalogItems = document.querySelectorAll('.catalog-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => {
                b.classList.remove('bg-moca-600', 'text-white');
                b.classList.add('border-gray-300', 'text-gray-600');
            });
            
            // Add active class to clicked button
            btn.classList.remove('border-gray-300', 'text-gray-600');
            btn.classList.add('bg-moca-600', 'text-white', 'border-moca-600');
            
            const filterValue = btn.getAttribute('data-filter');
            
            catalogItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

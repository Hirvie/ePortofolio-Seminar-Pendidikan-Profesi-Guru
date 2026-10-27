/* ===================================
   PORTOFOLIO PPG CALON GURU 2026
   JavaScript Functionality
   =================================== */

(function() {
    'use strict';
    
    // Set Current Year in Footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear().toString();
    }
    
    // Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__submenu-link');
    
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                navToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('mobile-menu--active');
                document.body.style.overflow = '';
            } else {
                navToggle.setAttribute('aria-expanded', 'true');
                mobileMenu.classList.add('mobile-menu--active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('mobile-menu--active');
            document.body.style.overflow = '';
        });
    }
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
            if (mobileMenu) mobileMenu.classList.remove('mobile-menu--active');
            document.body.style.overflow = '';
        });
    });
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('mobile-menu--active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Mobile Refleksi Accordion
    const mobileRefleksiBtn = document.getElementById('mobileRefleksiBtn');
    const mobileRefleksiSubmenu = document.getElementById('mobileRefleksiSubmenu');
    
    if (mobileRefleksiBtn && mobileRefleksiSubmenu) {
        mobileRefleksiBtn.addEventListener('click', () => {
            const isExpanded = mobileRefleksiBtn.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                mobileRefleksiBtn.setAttribute('aria-expanded', 'false');
                mobileRefleksiSubmenu.classList.remove('mobile-menu__submenu--active');
            } else {
                mobileRefleksiBtn.setAttribute('aria-expanded', 'true');
                mobileRefleksiSubmenu.classList.add('mobile-menu__submenu--active');
            }
        });
    }
    
    // Desktop Dropdown Refleksi
    const refleksiDropdownBtn = document.getElementById('refleksiDropdownBtn');
    const refleksiDropdown = document.getElementById('refleksiDropdown');
    
    if (refleksiDropdownBtn && refleksiDropdown) {
        refleksiDropdownBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isExpanded = refleksiDropdownBtn.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    refleksiDropdownBtn.setAttribute('aria-expanded', 'false');
                } else {
                    refleksiDropdownBtn.setAttribute('aria-expanded', 'true');
                    const firstDropdownLink = refleksiDropdown.querySelector('.nav__dropdown-link');
                    if (firstDropdownLink) setTimeout(() => firstDropdownLink.focus(), 50);
                }
            } else if (e.key === 'Escape') {
                refleksiDropdownBtn.setAttribute('aria-expanded', 'false');
                refleksiDropdownBtn.focus();
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!refleksiDropdownBtn.contains(e.target) && !refleksiDropdown.contains(e.target)) {
                refleksiDropdownBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Karya Inovasi Filter
    const filterButtons = document.querySelectorAll('.karya__filter-btn');
    const karyaCards = document.querySelectorAll('.karya__card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('karya__filter-btn--active'));
            button.classList.add('karya__filter-btn--active');
            
            karyaCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('karya__card--hidden');
                } else {
                    card.classList.add('karya__card--hidden');
                }
            });
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                backToTopButton.classList.add('back-to-top--visible');
            } else {
                backToTopButton.classList.remove('back-to-top--visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Resize Handler
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            if (mobileMenu) mobileMenu.classList.remove('mobile-menu--active');
            if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
})();

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

    // PDF Modal Viewer
    const pdfLinks = document.querySelectorAll('a[href$=".pdf"], a[href*=".pdf?"]');
    if (pdfLinks.length) {
        const modal = document.createElement('div');
        modal.className = 'pdf-modal';
        modal.id = 'pdfModal';
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = `
            <div class="pdf-modal__backdrop" data-pdf-close="true"></div>
            <div class="pdf-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="pdfModalTitle">
                <div class="pdf-modal__header">
                    <h3 class="pdf-modal__title" id="pdfModalTitle">Dokumen PDF</h3>
                    <div class="pdf-modal__actions">
                        <a class="pdf-modal__btn" id="pdfModalOpenNew" href="#" target="_blank" rel="noopener noreferrer" aria-label="Buka di tab baru" title="Buka di tab baru">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                        <button class="pdf-modal__btn" type="button" id="pdfModalClose" aria-label="Tutup" title="Tutup">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                        </button>
                    </div>
                </div>
                <div class="pdf-modal__body">
                    <iframe class="pdf-modal__frame" id="pdfModalFrame" title="Pratinjau dokumen PDF"></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const frame = modal.querySelector('#pdfModalFrame');
        const title = modal.querySelector('#pdfModalTitle');
        const openNew = modal.querySelector('#pdfModalOpenNew');
        const closeBtn = modal.querySelector('#pdfModalClose');
        let lastFocus = null;

        const closeModal = () => {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            frame.src = '';
            document.body.style.overflow = '';
            if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
        };

        const openModal = (href, label) => {
            lastFocus = document.activeElement;
            title.textContent = label || 'Dokumen PDF';
            openNew.href = href;
            frame.src = href;
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            setTimeout(() => closeBtn.focus(), 50);
        };

        pdfLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                const label = (link.textContent || '').trim().replace(/\s+/g, ' ') || 'Dokumen PDF';
                openModal(link.getAttribute('href'), label);
            });
        });

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target && e.target.getAttribute('data-pdf-close') === 'true') closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
        });
    }
})();

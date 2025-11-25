// ========== HEADER COMPONENT ==========
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addFavicon();
        this.innerHTML = `
            <header>
                <div id="mobileMenuOverlay" class="mobile-menu-overlay" aria-hidden="true">
                    <button id="closeMobileMenu" class="close-mobile-menu" aria-label="Close menu">✕</button>
                    <nav>
                        <a href="index.html" data-menu-link>Home</a>
                        
                        <div class="mobile-dropdown">
                            <div class="mobile-dropdown-toggle">Administration</div>
                            <div class="mobile-dropdown-menu">
                                <a href="BOG.html" data-menu-link>Board of Governors</a>
                                <a href="The-commandant.html" data-menu-link>The Commandant</a>
                                <a href="vp.html" data-menu-link>The Vice Principal</a>
                                <a href="adjutant.html" data-menu-link>The Adjutant</a>
                                <a href="admin-staff.html" data-menu-link>Admin Staff</a>
                                <a href="ex-co-principal.html" data-menu-link>Ex-CO Principal</a>
                            </div>
                        </div>
                        
                        <div class="mobile-dropdown">
                            <div class="mobile-dropdown-toggle">About</div>
                            <div class="mobile-dropdown-menu">
                                <a href="History.html" data-menu-link>History & Heritage</a>
                                <a href="Martyrs.html" data-menu-link>Our Martyrs</a>
                                <a href="alumni.html" data-menu-link>Alumni</a>
                            </div>
                        </div>
                        
                        <div class="mobile-dropdown">
                            <div class="mobile-dropdown-toggle">Academics</div>
                            <div class="mobile-dropdown-menu">
                                <a href="Positions-in-Board.html" data-menu-link>Positions in Board</a>
                                <a href="Departments.html" data-menu-link>Departments</a>
                                <a href="faculty.html" data-menu-link>Our Faculty</a>
                                <a href="cca.html" data-menu-link>Co-curricular</a>
                                <a href="Prospectus.html" data-menu-link>Prospectus</a>
                            </div>
                        </div>
                        
                        <div class="mobile-dropdown">
                            <div class="mobile-dropdown-toggle">Cadet Life</div>
                            <div class="mobile-dropdown-menu">
                                <a href="sports.html" data-menu-link>Sports</a>
                                <a href="appointment-holders.html" data-menu-link>Appointments</a>
                                <a href="routine.html" data-menu-link>Cadet's Routine</a>
                                
                                <div class="mobile-dropdown nested">
                                    <div class="mobile-dropdown-toggle">Houses</div>
                                    <div class="mobile-dropdown-menu nested-menu">
                                        <a href="jinnah.html" data-menu-link>Jinnah House</a>
                                        <a href="kazi.html" data-menu-link>Kazi House</a>
                                        <a href="latif.html" data-menu-link>Latif House</a>
                                        <a href="effendi.html" data-menu-link>Effendi House</a>
                                        <a href="sadiq.html" data-menu-link>Sadiq House</a>
                                        <a href="lsq.html" data-menu-link>Shehbaz House</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mobile-dropdown">
                            <div class="mobile-dropdown-toggle">Admissions</div>
                            <div class="mobile-dropdown-menu">
                                <a href="Admission-process.html" data-menu-link>Admission Process</a>
                                <a href="Fee-Structure.html" data-menu-link>Fee Structure</a>
                                <a href="syllabus.html" data-menu-link>Syllabus</a>
                            </div>
                        </div>
                        
                        <a href="Scholarships.html" data-menu-link>Scholarships</a>
                        <a href="gallery.html" data-menu-link>Gallery</a>
                        <a href="contact.html" data-menu-link>Contact</a>
                    </nav>
                </div>
                
                <div id="backdrop" class="backdrop" aria-hidden="true"></div>

                <div class="navbar" role="navigation" aria-label="Main navigation">
                    <a href="index.html" class="logo" aria-hidden="false" style="color:white; text-decoration:none;">
                        <span class="brand-mark"><img src="assets/images/Logo.webp" alt="Cadet College Sanghar Logo" style="background: transparent; width: 50px; height: 50px;"></span>
                        <span class="college-name">
                            <span class="college-main">CADET COLLEGE</span>
                            <span class="college-location">SANGHAR</span>
                        </span>
                    </a>

                    <div class="nav-actions">
                        <ul class="nav-links" aria-hidden="false">
                            <li><a href="index.html">Home</a></li>
                            
                            <li class="dropdown">
                                <div class="dd-toggle">Administration</div>
                                <div class="dropdown-menu" role="menu" aria-hidden="true">
                                    <a href="BOG.html">BOGs</a>
                                    <a href="The-commandant.html">The Commandant</a>
                                    <a href="vp.html">The Vice Principal</a>
                                    <a href="adjutant.html">The Adjutant</a>
                                    <a href="admin-staff.html">Admin Staff</a>
                                    <a href="ex-co-principal.html">ex-CO principal</a>
                                </div>
                            </li>
                            
                            <li class="dropdown">
                                <div class="dd-toggle">About</div>
                                <div class="dropdown-menu" role="menu" aria-hidden="true">
                                    <a href="History.html">History & Heritage</a>
                                    <a href="Martyrs.html">Our Martyrs</a>
                                    <a href="alumni.html">Alumni</a>
                                </div>
                            </li>
                            
                            <li class="dropdown">
                                <div class="dd-toggle">Academics</div>
                                <div class="dropdown-menu" role="menu" aria-hidden="true">
                                    <a href="Positions-in-Board.html">Positions in Board</a>
                                    <a href="Departments.html">Departments</a>
                                    <a href="faculty.html">Our Faculty</a>
                                    <a href="cca.html">Co-curricular</a>
                                    <a href="Prospectus.html">Prospectus</a>
                                </div>
                            </li>
                            
                            <li class="dropdown">
                                <div class="dd-toggle">Cadet Life</div>
                                <div class="dropdown-menu" role="menu" aria-hidden="true">
                                    <div class="dropdown nested">
                                        <div class="dd-toggle">&nbsp;&nbsp;&nbsp;&nbsp;Houses</div>
                                        <div class="dropdown-menu nested-menu" role="menu" aria-hidden="true">
                                            <a href="jinnah.html">Jinnah House</a>
                                            <a href="kazi.html">Kazi House</a>
                                            <a href="latif.html">Latif House</a>
                                            <a href="effendi.html">Effendi House</a>
                                            <a href="sadiq.html">Sadiq House</a>
                                            <a href="lsq.html">Shehbaz House</a>
                                        </div>
                                    </div>
                                    <a href="sports.html">Sports</a>
                                    <a href="appointment-holders.html">Appointments</a>
                                    <a href="routine.html">Cadet's Routine</a>
                                </div>
                            </li>
                            
                            <li class="dropdown">
                                <div class="dd-toggle">Admissions</div>
                                <div class="dropdown-menu" role="menu" aria-hidden="true">
                                    <a href="Admission-process.html">Admission Process</a>
                                    <a href="Fee-Structure.html">Fee Structure</a>
                                    <a href="syllabus.html">Syllabus</a>
                                    <a href="result.html">Result</a>
                                </div>
                            </li>
                            
                            <li><a href="Scholarships.html">Scholarships</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        
                        <a href="admission-process.html" class="cta-secondary" style="color:#fff;font-weight:700">Apply Now</a>

                        <button id="hamburger" class="hamburger" aria-label="Open menu" aria-controls="mobileMenuOverlay" aria-expanded="false">
                            <span class="bar" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </header>
        `;

        this.attachHeaderFunctionality();
    }

    addFavicon() {
        let existingFavicon = document.querySelector('link[rel="icon"]');
        if (!existingFavicon) {
            const favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.type = 'image/webp';
            favicon.href = 'assets/images/logo2.webp';
            document.head.appendChild(favicon);
        }
    }

    attachHeaderFunctionality() {
        const updateCurrentPageIndicator = () => {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = this.querySelectorAll('.nav-links a[href]');
            const dropdownToggles = this.querySelectorAll('.dropdown .dd-toggle');
            
            navLinks.forEach(link => link.classList.remove('current-page'));
            dropdownToggles.forEach(toggle => toggle.classList.remove('current-page'));
            
            let foundInMainLinks = false;
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href');
                if (linkPage === currentPage) {
                    link.classList.add('current-page');
                    foundInMainLinks = true;
                }
            });
            
            if (!foundInMainLinks) {
                const dropdownLinks = this.querySelectorAll('.dropdown-menu a[href]');
                let foundInDropdown = false;
                
                dropdownLinks.forEach(link => {
                    const linkPage = link.getAttribute('href');
                    if (linkPage === currentPage) {
                        foundInDropdown = true;
                        const dropdownMenu = link.closest('.dropdown-menu');
                        if (dropdownMenu) {
                            const dropdown = dropdownMenu.closest('.dropdown');
                            if (dropdown) {
                                const dropdownToggle = dropdown.querySelector('.dd-toggle');
                                if (dropdownToggle) {
                                    dropdownToggle.classList.add('current-page');
                                }
                            }
                        }
                    }
                });

                if (!foundInDropdown) {
                    const nestedDropdownLinks = this.querySelectorAll('.nested-menu a[href]');
                    nestedDropdownLinks.forEach(link => {
                        const linkPage = link.getAttribute('href');
                        if (linkPage === currentPage) {
                            const nestedMenu = link.closest('.nested-menu');
                            if (nestedMenu) {
                                const mainDropdown = nestedMenu.closest('.dropdown');
                                if (mainDropdown) {
                                    const mainDropdownToggle = mainDropdown.querySelector('.dd-toggle');
                                    if (mainDropdownToggle) {
                                        mainDropdownToggle.classList.add('current-page');
                                    }
                                }
                            }
                        }
                    });
                }
            }
        };

        updateCurrentPageIndicator();

        const hamburger = this.querySelector('#hamburger');
        const mobileMenuOverlay = this.querySelector('#mobileMenuOverlay');
        const backdrop = this.querySelector('#backdrop');
        const closeMobileMenu = this.querySelector('#closeMobileMenu');

        const toggleMobileMenu = () => {
            const is_open = mobileMenuOverlay.classList.contains('show');

            if (is_open) {
                mobileMenuOverlay.classList.remove('show');
                mobileMenuOverlay.setAttribute('aria-hidden', 'true');
                backdrop.classList.remove('show');
                document.body.style.overflow = '';
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                
                const mobileDropdowns = mobileMenuOverlay.querySelectorAll('.mobile-dropdown');
                mobileDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            } else {
                mobileMenuOverlay.classList.add('show');
                mobileMenuOverlay.setAttribute('aria-hidden', 'false');
                backdrop.classList.add('show');
                document.body.style.overflow = 'hidden';
                hamburger.classList.add('active');
                hamburger.setAttribute('aria-expanded', 'true');
            }
        }

        hamburger.addEventListener('click', toggleMobileMenu);
        backdrop.addEventListener('click', toggleMobileMenu);
        closeMobileMenu.addEventListener('click', toggleMobileMenu);

        const mobileDropdownToggles = mobileMenuOverlay.querySelectorAll('.mobile-dropdown-toggle');
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const dropdown = toggle.parentElement;
                const isActive = dropdown.classList.contains('active');
                
                const siblings = Array.from(dropdown.parentElement.children).filter(
                    child => child.classList.contains('mobile-dropdown') && child !== dropdown
                );
                siblings.forEach(sibling => {
                    sibling.classList.remove('active');
                });
                
                if (isActive) {
                    dropdown.classList.remove('active');
                } else {
                    dropdown.classList.add('active');
                }
            });
        });

        mobileMenuOverlay.querySelectorAll('[data-menu-link]').forEach(a => {
            a.addEventListener('click', () => {
                setTimeout(toggleMobileMenu, 350);
            });
        });

        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape' && mobileMenuOverlay.classList.contains('show')) {
                toggleMobileMenu();
            }
        });

        const navbar = this.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if(!navbar) return;
            
            if(window.scrollY > 60){
                navbar.style.background = 'rgba(0,33,71,0.95)';
                navbar.classList.add('shrink');
            } else {
                navbar.style.background = getComputedStyle(document.documentElement).getPropertyValue('--nav-bg');
                navbar.classList.remove('shrink');
            }
        });
    }
}

// ========== FOOTER COMPONENT ==========
class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer id="contact" class="footer" aria-labelledby="contact-heading">
                <div class="footer-container">
                    <div class="footer-col">
                        <h3>Cadet College Sanghar</h3>
                        <p>Building leaders with discipline, honor & academic excellence.</p>
                        
                        <div class="social-media">
                            <a href="https://www.youtube.com/@ccsanghar4090" class="social-icon youtube" aria-label="YouTube" target="_blank">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.facebook.com/CadetCollegeSanghar/" class="social-icon facebook" aria-label="Facebook" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>

                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="Departments.html">Departments</a></li>
                            <li><a href="Prospectus.html">Programs</a></li>
                            <li><a href="The-commandant.html">Commandant Message</a></li>
                            <li><a href="History.html">History</a></li>
                            <li><a href="Martyrs.html">Our Martyrs</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Admissions</h4>
                        <ul>
                            <li><a href="Admission-process.html">Admission Process</a></li>
                            <li><a href="admission-process.html">Apply Online</a></li>
                            <li><a href="Fee-Structure.html">Fee Structure</a></li>
                            <li><a href="syllabus.html">Syllabus</a></li>
                            <li><a href="Scholarships.html">Scholarships</a></li>
                            <li><a href="Prospectus.html">Prospectus</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Administration</h4>
                        <ul>
                            <li><a href="BOG.html">Board of Governors</a></li>
                            <li><a href="The-commandant.html">The Commandant</a></li>
                            <li><a href="vp.html">Vice Principal</a></li>
                            <li><a href="adjutant.html">The Adjutant</a></li>
                            <li><a href="admin-staff.html">Admin Staff</a></li>
                            <li><a href="ex-co-principal.html">Ex-CO Principal</a></li>
                        </ul>
                    </div>

                    <div class="footer-col contact-col">
                        <h4>Contact Information</h4>
                        <div class="contact-info">
                            <p class="contact-item">📞 +92-300-1234567</p>
                            <p class="contact-item">📞 +92-321-9876543</p>
                            <p class="contact-item">✉ info@ccs.edu.pk</p>
                            <p class="contact-item">✉ admissions@ccs.edu.pk</p>
                        </div>
                    </div>

                    <div class="footer-col location-col">
                        <h4>Our Location</h4>
                        <div class="location-info">
                            <p class="location-item">⚓ Cadet College Sanghar</p>
                            <p class="location-item">➡️  Jam Nawaz Ali, Sindh, Pakistan</p>
                            <p class="location-item">📱 +92-345-6789012</p>
                        </div>
                    </div>

                    <div class="footer-col map-col">
                        <h4>Find Us</h4>
                        <div class="map-container">
                            <div class="map-overlay">Cadet College Sanghar</div>
                            <iframe 
                                class="map-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.383426132465!2d68.90328819999999!3d25.757896000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394bfd5900054c85%3A0x38aeb94a0cf0cf48!2sCadet%20College%20Sanghar!5e0!3m2!1sen!2slv!4v1762950940984!5m2!1sen!2slv&t=k" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                                aria-label="Cadet College Sanghar Location">
                            </iframe>
                        </div>
                    </div>
                </div>

                <p class="footer-bottom">© 2025 Cadet College Sanghar • All rights reserved</p>
            </footer>

            <button id="scrollTop" aria-label="Scroll to top" class="scroll-top-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 15l-6-6-6 6"/>
                </svg>
            </button>
        `;

        this.attachFooterFunctionality();
    }

    attachFooterFunctionality() {
        const scrollTopBtn = this.querySelector('#scrollTop');
        
        window.addEventListener('scroll', () => {
            if(window.scrollY > 500) scrollTopBtn.classList.add('show');
            else scrollTopBtn.classList.remove('show');
        });

        scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
    }
}

customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
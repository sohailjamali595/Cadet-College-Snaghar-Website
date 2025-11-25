// ========== HEADER COMPONENT ==========
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <!-- ========== HEADER ========== -->
            <header>
                <!-- Mobile Menu Overlay -->
                <div id="mobileMenuOverlay" class="mobile-menu-overlay" aria-hidden="true">
                    <nav>
                        <a href="#home" data-menu-link>Home</a>
                        <a href="#departments" data-menu-link>Departments</a>
                        <a href="#news" data-menu-link>News & Events</a>
                        <a href="#welcome" data-menu-link>Welcome</a>
                        <a href="#why" data-menu-link>Why Choose Us</a>
                        <a href="#programs" data-menu-link>Programs</a>
                        <a href="#principal" data-menu-link>Principal</a>
                        <a href="#campus" data-menu-link>Campus Life</a>
                        <a href="#missionVision" data-menu-link>Mission & Vision</a>
                        <a href="contact.html" data-menu-link>Contact</a>
                    </nav>
                </div>
                
                <!-- Backdrop -->
                <div id="backdrop" class="backdrop" aria-hidden="true"></div>

                <!-- Navigation Bar -->
                <div class="navbar" role="navigation" aria-label="Main navigation">
                    
                    <!-- College logo and name -->
                    <a href="#home" class="logo" aria-hidden="false" style="color:white; text-decoration:none;">
                        <span class="brand-mark"><img src="assets/images/logo.png" alt="Cadet College Sanghar Logo"></span>
                        <span style="margin-left:6px">Cadet College Sanghar</span>
                    </a>

                    <!-- Navigation Bar -->
<div class="navbar" role="navigation" aria-label="Main navigation">
    
    <!-- College logo and name -->
    <a href="#home" class="logo" aria-hidden="false" style="color:white; text-decoration:none;">
        <span class="brand-mark"><img src="assets/images/logo.png" alt="Cadet College Sanghar Logo"></span>
        <span style="margin-left:6px">Cadet College Sanghar</span>
    </a>

    <!-- Navigation Bar -->
<div class="navbar" role="navigation" aria-label="Main navigation">
    
    <!-- College logo and name -->
    <a href="#home" class="logo" aria-hidden="false" style="color:white; text-decoration:none;">
        <span class="brand-mark"><img src="assets/images/logo.png" alt="Cadet College Sanghar Logo"></span>
        <span style="margin-left:6px">Cadet College Sanghar</span>
    </a>

    <!-- Navigation actions -->
    <div class="nav-actions">
        <ul class="nav-links" aria-hidden="false">
            <!-- 1. Home - Always first -->
            <li><a href="index.html">Home</a></li>
            
            <!-- 2. Administration (New Main Item) -->
            <li class="dropdown">
                <div class="dd-toggle">Administration</div>
                <div class="dropdown-menu" role="menu" aria-hidden="true">
                
                    <a href="BOG.html">Board of Governors</a>
                    <a href="The-commandant.html">The Commandant</a>
                    <a href="faculty.html">Our Faculty</a>
                    <a href="admin-staff.html">Admin Staff</a>
                    <a href="ex-co-principal.html">ex-CO principal</a>
                </div>
            </li>
            
            <!-- 3. About College -->
            <li class="dropdown">
                <div class="dd-toggle">About</div>
                <div class="dropdown-menu" role="menu" aria-hidden="true">
                    <a href="History.html">History & Heritage</a>
                    <a href="Martyrs.html">Our Martyrs</a>
                    <a href="alumni.html">Alumni</a>
                </div>
            </li>
            
            <!-- 4. Academics (with Co-curricular as direct link) -->
            <li class="dropdown">
                <div class="dd-toggle">Academics</div>
                <div class="dropdown-menu" role="menu" aria-hidden="true">
                    <a href="Departments.html">Departments</a>
                    <a href="Faculty.html">Faculty</a>
                    <a href="cca.html">Co-curricular Activities</a>
                    <a href="Prospectus.html">Prospectus</a>
                </div>
            </li>
            
            <!-- 5. Cadet Life -->
            <li class="dropdown">
                <div class="dd-toggle">Cadet Life</div>
                <div class="dropdown-menu" role="menu" aria-hidden="true">
                    <!-- Houses -->
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
                </div>
            </li>
            
            <!-- 6. Admissions -->
            <li class="dropdown">
                <div class="dd-toggle">Admissions</div>
                <div class="dropdown-menu" role="menu" aria-hidden="true">
                    <a href="Admission-Criteria.html">Admission Criteria</a>
                    <a href="admissions.html">How to Apply</a>
                    <a href="Fee-Structure.html">Fee Structure</a>
                </div>
            </li>
            
            <!-- 7. Scholarships (Standalone) -->
            <li><a href="Scholarships.html">Scholarships</a></li>
            
            <!-- 8. Gallery -->
            <li><a href="gallery.html">Gallery</a></li>
            
            <!-- 9. Contact (Standalone) -->
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
</div>
                        <!-- Apply Now button -->
                        <a href="#contact" class="cta-secondary" style="color:#fff;font-weight:700">Apply Now</a>

                        <!-- Mobile hamburger menu button -->
                        <button id="hamburger" class="hamburger" aria-label="Open menu" aria-controls="mobileMenuOverlay" aria-expanded="false">
                            <span class="bar" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </header>

            <style>
                /* ========== CSS VARIABLES ========== */
                :root{
                    --nav-bg: #002147;
                    --nav-bg-dark: #011b36;
                    --accent: #fdfcf9ff;
                    --primary: #002147;
                    --soft-blue: #ecf5ff;
                    --card-shadow: 0 12px 30px rgba(2,36,85,0.06);
                    --text: #222;
                    --muted: #556b86;
                    --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
                    --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                /* ========== RESET & BASE STYLES ========== */
                *{box-sizing:border-box;margin:0;padding:0}
                html,body{height:100%}
                body{
                    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    line-height:1.6;color:var(--text);
                    background: linear-gradient(180deg,#f8fbff 0%, #fbfdff 100%);
                    -webkit-font-smoothing:antialiased;
                    scroll-behavior:smooth;
                    overflow-x:hidden;
                }

                a{color:inherit;text-decoration:none}
                img{max-width:100%;display:block;height:auto}

                /* ========== NAVBAR STYLES ========== */
                .navbar{
                    position:fixed;left:0;right:0;top:0;
                    height:72px;padding:12px 36px;
                    display:flex;align-items:center;justify-content:space-between;
                    background:var(--nav-bg);color:#fff;z-index:1200;
                    transition: all 0.5s var(--ease-smooth);
                    box-shadow: 0 8px 24px rgba(2,36,85,0.1);
                }
                .navbar.shrink{height:60px; padding:8px 30px; }
                
                /* Logo styles */
                .logo{
                    font-weight:800;letter-spacing:0.3px; font-size:1.15rem; 
                    display:flex;align-items:center;gap:12px; 
                    transition: all 0.4s var(--ease-smooth);
                    position: relative;
                }
                .logo:hover{
                    transform:translateY(-2px);
                    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
                }
                .logo::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--accent);
                    transition: width 0.4s var(--ease-smooth);
                }
                .logo:hover::after {
                    width: 100%;
                }
                
                /* Brand mark */
                .brand-mark{
                    width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#0b4a8b,#00356b);
                    display:inline-flex;align-items:center;justify-content:center;color:#ffd36b;font-weight:800;box-shadow: 0 6px 18px rgba(2,36,85,0.12);
                    transition: all 0.4s var(--ease-bounce);
                }
                .logo:hover .brand-mark {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 8px 25px rgba(2,36,85,0.2);
                }

                /* ========== NAVIGATION LINKS ========== */
                .nav-actions{display:flex;gap:30px;align-items:center}
                .nav-links{display:flex;gap:25px;list-style:none;align-items:center}

                /* Individual navigation link styles */
                .nav-links a, .dropdown .dd-toggle{
                    color:#eaf3ff;
                    padding:10px 0;
                    font-weight:600;
                    transition: all 0.4s var(--ease-smooth);
                    position: relative;
                    display: inline-block;
                }
                .nav-links a::before, .dropdown .dd-toggle::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: var(--accent);
                    transition: all 0.4s var(--ease-smooth);
                    transform: translateX(-50%);
                }
                .nav-links a:hover, .dropdown .dd-toggle:hover{
                    color:var(--accent);
                    transform:translateY(-2px);
                }
                .nav-links a:hover::before, .dropdown .dd-toggle:hover::before {
                    width: 100%;
                }

                /* ========== MOBILE HAMBURGER MENU ========== */
                .hamburger{
                    width:50px;height:50px;border-radius:12px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
                    display:none;align-items:center;justify-content:center;cursor:pointer;
                    transition: all 0.4s var(--ease-smooth); position:relative;
                }
                .hamburger:hover{
                    transform:scale(1.04) rotate(5deg); 
                    background: rgba(255,255,255,0.1);
                    box-shadow: 0 5px 15px rgba(255,255,255,0.1);
                }
                .hamburger .bar{
                    display:block;width:24px;height:3px;background:#fff;border-radius:2px;position:relative;
                    transition: all 0.4s var(--ease-smooth);
                }
                .hamburger .bar:before,.hamburger .bar:after{
                    content:'';position:absolute;left:0;width:24px;height:3px;background:#fff;border-radius:2px;
                    transition: all 0.4s var(--ease-smooth);
                }
                .hamburger .bar:before{top:-8px}
                .hamburger .bar:after{top:8px}
                .hamburger.active {
                    transform: rotate(90deg);
                    background: rgba(255,255,255,0.15);
                }
                .hamburger.active .bar{background:transparent}
                .hamburger.active .bar:before{top:0;transform:rotate(45deg)}
                .hamburger.active .bar:after{top:0;transform:rotate(-45deg)}

                /* ========== MOBILE MENU OVERLAY ========== */
                .mobile-menu-overlay{
                    position:fixed;inset:0;background:var(--nav-bg-dark);opacity:0;pointer-events:none;
                    transition:all 0.5s var(--ease-smooth);z-index:1150;
                    display:flex;flex-direction:column;align-items:center;justify-content:center;
                    padding:40px;
                    transform: translateY(-20px);
                }
                .mobile-menu-overlay.show{
                    opacity:1;
                    pointer-events:auto;
                    transform: translateY(0);
                }
                .mobile-menu-overlay nav{
                    display:flex;flex-direction:column;gap:18px;text-align:center;
                    transform:translateY(20px);opacity:0;transition:all 0.6s var(--ease-smooth) 0.1s;
                }
                .mobile-menu-overlay.show nav{transform:translateY(0);opacity:1}
                .mobile-menu-overlay a{
                    color:#fff;font-size:1.6rem;font-weight:700;letter-spacing:1px;padding:12px 0;
                    transition:all 0.4s var(--ease-smooth);
                    position: relative;
                    overflow: hidden;
                }
                .mobile-menu-overlay a::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    transition: left 0.6s var(--ease-smooth);
                }
                .mobile-menu-overlay a:hover{
                    color:var(--accent);
                    transform: translateX(10px);
                }
                .mobile-menu-overlay a:hover::before {
                    left: 100%;
                }

                /* ========== BACKDROP ========== */
                .backdrop{
                    position:fixed;inset:0;background:rgba(3,12,28,0.55);opacity:0;pointer-events:none;
                    transition:all 0.4s var(--ease-smooth);
                    z-index:1100;
                }
                .backdrop.show{opacity:1;pointer-events:auto}

                /* ========== DROPDOWN MENUS ========== */
                .dropdown{
                    position:relative;
                }
                .dropdown .dd-toggle{
                    cursor:pointer;
                }
                
                /* Dropdown menu container */
                .dropdown-menu{
                    position:absolute;
                    top:44px;
                    left:0;
                    background:#012a57;
                    padding:8px;
                    border-radius:12px;
                    min-width:200px;
                    box-shadow:0 18px 40px rgba(2,36,85,0.2);
                    
                    /* Initial state - hidden */
                    visibility: hidden;
                    opacity: 0;
                    transform:translateY(-8px) scale(0.95);
                    
                    /* Smooth transition */
                    transition: all 0.4s var(--ease-smooth);
                    z-index: 100;
                }
                
                /* ========== NESTED DROPDOWN STYLES ========== */
                .dropdown.nested {
                    position: relative;
                }

                .dropdown.nested .dropdown-menu.nested-menu {
                    position: absolute;
                    left: 100%;
                    top: 0;
                    margin-left: 8px;
                    visibility: hidden;
                    opacity: 0;
                    transform: translateY(-8px) scale(0.95);
                }

                .dropdown.nested:hover .dropdown-menu.nested-menu {
                    visibility: visible;
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                /* Ensure the nested dropdown stays visible when hovering */
                .dropdown.nested:hover .dd-toggle {
                    background: rgba(255,255,255,0.08);
                    border-radius: 8px 8px 0 0;
                }

                /* Adjust the arrow for nested dropdown */
                .dropdown.nested .dd-toggle::after {
                    content: '›';
                    position: absolute;
                    right: 10px;
                    transition: transform 0.3s var(--ease-smooth);
                }

                .dropdown.nested:hover .dd-toggle::after {
                    transform: rotate(90deg);
                }
                
                /* Show dropdown on hover */
                .dropdown:hover .dropdown-menu{
                    visibility: visible;
                    opacity:1;
                    transform:translateY(0) scale(1);
                }
                
                /* Individual dropdown items */
                .dropdown-menu a{
                    display:block;
                    padding:10px 14px;
                    color:#eaf3ff;
                    font-weight:600;
                    border-radius:8px;
                    transition:all 0.3s var(--ease-smooth);
                    position: relative;
                    overflow: hidden;
                }
                .dropdown-menu a::before {
                    content: '';
                    position: absolute;
                    left: -100%;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    transition: left 0.5s var(--ease-smooth);
                }
                .dropdown-menu a:hover{
                    background:rgba(255,255,255,0.08); 
                    transform:translateX(8px);
                    padding-left: 20px;
                }
                .dropdown-menu a:hover::before {
                    left: 100%;
                }

                /* ========== APPLY NOW BUTTON ========== */
                .cta-secondary{
                    background:transparent;border:2px solid rgba(255,255,255,0.25);padding:10px 18px;border-radius:12px; 
                    transition: all 0.4s var(--ease-smooth);
                    position: relative;
                    overflow: hidden;
                }
                .cta-secondary::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    transition: left 0.6s var(--ease-smooth);
                }
                .cta-secondary:hover{
                    background:rgba(255,255,255,0.08); 
                    transform:translateY(-2px);
                    border-color: rgba(255,255,255,0.4);
                    box-shadow: 0 5px 15px rgba(255,255,255,0.1);
                }
                .cta-secondary:hover::before {
                    left: 100%;
                }

                /* ========== RESPONSIVE DESIGN ========== */
                /* Tablets and smaller screens */
                @media (max-width: 1000px){
                    .nav-links{display:none}
                    .hamburger{display:flex}
                }
                
                /* Mobile devices */
                @media (max-width: 768px){
                    .navbar{padding:12px 20px;}
                    .mobile-menu-overlay a{font-size:1.4rem}
                }
                
                /* Small mobile devices */
                @media (max-width: 520px){
                    .navbar .logo{font-size: 1rem;}
                }
            </style>
        `;

        // Attach header functionality
        this.attachHeaderFunctionality();
    }

    attachHeaderFunctionality() {
        // ========== MOBILE MENU FUNCTIONALITY ==========
        const hamburger = this.querySelector('#hamburger');
        const mobileMenuOverlay = this.querySelector('#mobileMenuOverlay');
        const backdrop = this.querySelector('#backdrop');

        /**
         * Toggles the mobile menu between open and closed states
         */
        const toggleMobileMenu = () => {
            const is_open = mobileMenuOverlay.classList.contains('show');

            if (is_open) {
                // Close the mobile menu
                mobileMenuOverlay.classList.remove('show');
                mobileMenuOverlay.setAttribute('aria-hidden', 'true');
                backdrop.classList.remove('show');
                document.body.style.overflow = '';
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            } else {
                // Open the mobile menu
                mobileMenuOverlay.classList.add('show');
                mobileMenuOverlay.setAttribute('aria-hidden', 'false');
                backdrop.classList.add('show');
                document.body.style.overflow = 'hidden';
                hamburger.classList.add('active');
                hamburger.setAttribute('aria-expanded', 'true');
            }
        }

        // Event listeners for mobile menu
        hamburger.addEventListener('click', toggleMobileMenu);
        backdrop.addEventListener('click', toggleMobileMenu);

        // ========== KEYBOARD NAVIGATION ==========
        // Close mobile menu when Escape key is pressed
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape' && mobileMenuOverlay.classList.contains('show')) {
                toggleMobileMenu();
            }
        });

        // ========== MOBILE MENU LINK HANDLING ==========
        // Close mobile menu when a link is clicked (with slight delay for UX)
        mobileMenuOverlay.querySelectorAll('[data-menu-link]').forEach(a => {
            a.addEventListener('click', () => {
                setTimeout(toggleMobileMenu, 350);
            });
        });

        // ========== NAVBAR SCROLL EFFECTS ==========
        // Changes navbar appearance on scroll for visual feedback
        const navbar = this.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if(!navbar) return;
            
            // Add shrink effect and change background when scrolled
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
            <!-- ========== FOOTER SECTION ========== -->
            <footer id="contact" class="footer" aria-labelledby="contact-heading">
                <div class="footer-container">
                    <div class="footer-col">
                        <h3>Cadet College Sanghar</h3>
                        <p>Building leaders with discipline, honor & academic excellence.</p>
                    </div>

                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#departments">Departments</a></li>
                            <li><a href="#programs">Programs</a></li>
                            <li><a href="#principal">Principal Message</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Admissions</h4>
                        <ul>
                            <li><a href="#">Admission Criteria</a></li>
                            <li><a href="#">Apply Online</a></li>
                            <li><a href="#">Fee Structure</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Contact Us</h4>
                        <p>   Sanghar, Sindh, Pakistan</p>
                        <p>📞 +92-300-1234567</p>
                        <p>✉ info@ccs.edu.pk</p>
                    </div>
                </div>

                <p class="footer-bottom">© 2025 Cadet College Sanghar • All rights reserved</p>
            </footer>

            <!-- ========== SCROLL TO TOP BUTTON ========== -->
            <button id="scrollTop" aria-label="Scroll to top">↑</button>

            <style>
                /* ========== FOOTER SECTION ========== */
                .footer{
                    background:var(--primary);
                    color:#fff;
                    padding:60px 8%;
                    margin-top:40px;
                    transition: all 0.5s var(--ease-smooth);
                }
                .footer-container{
                    display:flex;
                    gap:36px;
                    justify-content:space-between;
                    flex-wrap:wrap;
                }
                .footer-col{
                    min-width:200px;
                    transition: all 0.4s var(--ease-smooth);
                }
                .footer-col:hover {
                    transform: translateY(-5px);
                }
                .footer-col h3, .footer-col h4{
                    font-size:22px;
                    margin-bottom:16px;
                    color:#ffd36b;
                    font-weight:700;
                    transition: all 0.4s var(--ease-smooth);
                    position: relative;
                    display: inline-block;
                }
                .footer-col h3::after, .footer-col h4::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #ffd36b;
                    transition: width 0.4s var(--ease-smooth);
                }
                .footer-col:hover h3::after, .footer-col:hover h4::after {
                    width: 100%;
                }
                .footer-col ul {
                    list-style:none;
                    padding-left:0;
                }
                .footer-col li {
                    margin-bottom: 8px;
                    transition: all 0.3s var(--ease-smooth);
                }
                .footer-col li:hover {
                    transform: translateX(5px);
                }
                .footer-col a{
                    transition: all 0.3s var(--ease-smooth);
                    display: inline-block;
                    position: relative;
                }
                .footer-col a::before {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: var(--accent);
                    transition: width 0.3s var(--ease-smooth);
                }
                .footer-col a:hover{
                    color:var(--accent);
                    transform: translateX(3px);
                }
                .footer-col a:hover::before {
                    width: 100%;
                }
                .footer-col p {
                    transition: all 0.3s var(--ease-smooth);
                    color: #cfe3ff;
                }
                .footer-col:hover p {
                    transform: translateX(3px);
                }
                .footer-bottom{
                    margin-top:40px;
                    text-align:center;
                    color:#cfe3ff;
                    opacity:.95;
                    transition: all 0.4s var(--ease-smooth);
                }
                .footer-bottom:hover {
                    opacity: 1;
                    transform: translateY(-2px);
                    text-shadow: 0 2px 5px rgba(255,255,255,0.2);
                }

                /* ========== SCROLL TO TOP BUTTON ========== */
                #scrollTop{
                    position:fixed;
                    right:24px;
                    bottom:24px;
                    width:56px;
                    height:56px;
                    border-radius:14px;
                    background:var(--primary);
                    color:#fff;
                    border:0;
                    display:none;
                    align-items:center;
                    justify-content:center;
                    cursor:pointer;
                    z-index:1300;
                    box-shadow:0 12px 30px rgba(2,36,85,0.25);
                    transition: all 0.4s var(--ease-bounce);
                }
                #scrollTop:hover{
                    background:#00356b; 
                    transform:translateY(-3px) scale(1.1);
                    box-shadow: 0 15px 35px rgba(2,36,85,0.4);
                }
                #scrollTop.show{
                    display:flex;
                    animation:popIn .3s var(--ease-smooth);
                }

                /* ========== RESPONSIVE DESIGN ========== */
                /* Tablets and smaller screens */
                @media (max-width: 768px){
                    .footer-container {
                        gap: 24px;
                    }
                    .footer-col {
                        min-width: 150px;
                    }
                }
                
                /* Small mobile devices */
                @media (max-width: 520px){
                    .footer-col {
                        min-width: 100%;
                        text-align: center;
                    }
                }
            </style>
        `;

        // Attach footer functionality
        this.attachFooterFunctionality();
    }

    attachFooterFunctionality() {
        // ========== SCROLL TO TOP FUNCTIONALITY ==========
        const scrollTopBtn = this.querySelector('#scrollTop');
        
        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', () => {
            if(window.scrollY > 500) scrollTopBtn.classList.add('show');
            else scrollTopBtn.classList.remove('show');
        });

        // Smooth scroll to top of page when button is clicked
        scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
    }
}

// ========== REGISTER CUSTOM ELEMENTS ==========
customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
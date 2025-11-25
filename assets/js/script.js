// ---------- Helper elements ----------
    const hamburger = document.getElementById('hamburger');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const backdrop = document.getElementById('backdrop');
    const scrollTopBtn = document.getElementById('scrollTop');

    // Open/Close logic for the new Mobile Overlay Menu
    function toggleMobileMenu() {
      const is_open = mobileMenuOverlay.classList.contains('show');

      if (is_open) {
        // CLOSE MENU
        mobileMenuOverlay.classList.remove('show');
        mobileMenuOverlay.setAttribute('aria-hidden', 'true');
        backdrop.classList.remove('show');
        document.body.style.overflow = '';
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      } else {
        // OPEN MENU
        mobileMenuOverlay.classList.add('show');
        mobileMenuOverlay.setAttribute('aria-hidden', 'false');
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden'; // lock scroll
        hamburger.classList.add('active'); // for X animation
        hamburger.setAttribute('aria-expanded', 'true');
      }
    }

    hamburger.addEventListener('click', toggleMobileMenu);
    backdrop.addEventListener('click', toggleMobileMenu);

    // Close on Esc
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && mobileMenuOverlay.classList.contains('show')) {
        toggleMobileMenu();
      }
    });

    // Close menu when a link is clicked
    mobileMenuOverlay.querySelectorAll('[data-menu-link]').forEach(a => {
      a.addEventListener('click', () => {
        // small delay so navigation is perceptible
        setTimeout(toggleMobileMenu, 350);
      });
    });

    // Navbar color change on scroll and scroll-top toggle
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if(!navbar) return;
      if(window.scrollY > 60){
        // Changed to use transparent background on scroll for a modern look
        navbar.style.background = 'rgba(0,33,71,0.95)';
        navbar.classList.add('shrink');
      } else {
        navbar.style.background = getComputedStyle(document.documentElement).getPropertyValue('--nav-bg');
        navbar.classList.remove('shrink');
      }

      if(window.scrollY > 500) scrollTopBtn.classList.add('show');
      else scrollTopBtn.classList.remove('show');
    });

    // Scroll to top
    scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

    // IntersectionObserver for fade-slide reveal
    document.addEventListener('DOMContentLoaded', () => {
      const faders = document.querySelectorAll('.fade-slide');
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
          }
        });
      }, {threshold: 0.1, rootMargin: '0px 0px -50px 0px'}); // Increased threshold and margin for smoother trigger
      faders.forEach(f => io.observe(f));
    });

    // News slider automatic scroll with pause on interaction
    (function(){
      const slider = document.querySelector('.news-slider');
      if(!slider) return;
      let rafId;
      let paused = false;

      function step(){
        if(paused) { rafId = requestAnimationFrame(step); return; }
        slider.scrollLeft += 1.2; // Gentle increase in speed
        // loop when reach end
        if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10){
          slider.scrollTo({left: 0, behavior: 'smooth'});
        }
        rafId = requestAnimationFrame(step);
      }

      // start after small delay
      setTimeout(()=> rafId = requestAnimationFrame(step), 1200);

      slider.addEventListener('mouseenter', ()=> { paused = true });
      slider.addEventListener('mouseleave', ()=> { paused = false });
      slider.addEventListener('touchstart', ()=> { paused = true });
      slider.addEventListener('touchend', ()=> { paused = false });
    })();

    // Smooth button behavior - explore button
    document.getElementById('exploreBtn').addEventListener('click', () => {
      document.getElementById('departments').scrollIntoView({behavior:'smooth', block:'start'});
    });
    
    // Desktop dropdown fix on window resize
    window.addEventListener('resize', () => {
      if(window.innerWidth > 1000) document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = '');
    });

    // Prevent background parallax reflow: subtle hero movement on mouse
    (function(){
      const hero = document.querySelector('.hero');
      if(!hero) return;
      hero.addEventListener('mousemove', (e) => {
        const w = hero.clientWidth, h = hero.clientHeight;
        const x = (e.clientX / w - .5) * 8; // Increased movement
        const y = (e.clientY / h - .5) * 8;
        hero.style.backgroundPosition = `${50 - x}% ${45 - y}%`;
      });
      hero.addEventListener('mouseleave', () => hero.style.backgroundPosition = 'center');
    })();
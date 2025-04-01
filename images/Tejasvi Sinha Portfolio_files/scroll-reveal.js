/* Scroll Reveal Animations for Portfolio */

document.addEventListener('DOMContentLoaded', function() {
  // Check if ScrollReveal is available (it should be loaded via AOS.js)
  if (typeof AOS !== 'undefined') {
    // Initialize AOS with custom settings
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  } else {
    // Fallback simple scroll reveal implementation
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementHeight = el.getBoundingClientRect().height;
      
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
      );
    };
    
    const displayScrollElement = (element) => {
      element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
      element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 75)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });
    
    // Initialize on page load
    handleScrollAnimation();
  }
  
  // Add smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add scroll-triggered animations for skill bars
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    skillBars.forEach(bar => {
      const barValue = bar.getAttribute('aria-valuenow') + '%';
      bar.style.width = '0%';
      
      setTimeout(() => {
        bar.style.transition = 'width 1.5s ease-in-out';
        bar.style.width = barValue;
      }, 500);
    });
  };
  
  // Check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };
  
  // Trigger skill bar animation when skills section is in viewport
  const skillSection = document.querySelector('.skill-mf');
  if (skillSection) {
    window.addEventListener('scroll', () => {
      if (isInViewport(skillSection)) {
        animateSkillBars();
        // Remove event listener after animation is triggered
        window.removeEventListener('scroll', this);
      }
    });
    
    // Check on page load
    if (isInViewport(skillSection)) {
      animateSkillBars();
    }
  }
});
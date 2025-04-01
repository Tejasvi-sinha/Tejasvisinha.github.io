/* Particles.js for Portfolio Background Effects */

document.addEventListener('DOMContentLoaded', function() {
  // Create a canvas element for particles
  const particleCanvas = document.createElement('canvas');
  particleCanvas.id = 'particles-js';
  particleCanvas.style.position = 'fixed';
  particleCanvas.style.top = '0';
  particleCanvas.style.left = '0';
  particleCanvas.style.width = '100%';
  particleCanvas.style.height = '100%';
  particleCanvas.style.zIndex = '-1';
  particleCanvas.style.pointerEvents = 'none';
  document.body.prepend(particleCanvas);

  // Particle configuration
  const canvas = document.getElementById('particles-js');
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Create particles
  function createParticles() {
    particles = [];
    const particleCount = Math.floor(window.innerWidth / 20); // Responsive particle count
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: 'rgba(99, 102, 241, ' + (Math.random() * 0.3 + 0.1) + ')', // Primary color with opacity
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }
  }
  
  // Draw particles
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Move particles
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
      }
    });
    
    // Draw connections between nearby particles
    drawConnections();
    
    requestAnimationFrame(drawParticles);
  }
  
  // Draw connections between particles that are close to each other
  function drawConnections() {
    const maxDistance = 150; // Maximum distance for connection
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Calculate opacity based on distance
          const opacity = 1 - (distance / maxDistance);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.15})`; // Primary color with dynamic opacity
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }
  
  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Attract particles to mouse
    particles.forEach(particle => {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (150 - distance) / 150;
        
        particle.speedX += forceDirectionX * force * 0.02;
        particle.speedY += forceDirectionY * force * 0.02;
      }
    });
  });
  
  // Initialize
  function init() {
    resizeCanvas();
    createParticles();
    drawParticles();
  }
  
  // Handle window resize
  window.addEventListener('resize', function() {
    resizeCanvas();
    createParticles();
  });
  
  // Start animation
  init();
});
// Initialize Interactive 3D WebGL Background using Three.js
class ThreeBackground {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    if (!this.canvas) return;

    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
      console.error('Three.js failed to load via CDN.');
      return;
    }

    this.init();
    this.createParticles();
    this.addEventListeners();
    this.animate();
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.z = 6;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Interaction variables
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    
    // Scroll variables
    this.scrollY = 0;
    this.targetScrollY = 0;
  }

  createParticles() {
    // Create Torus Knot Geometry
    const geometry = new THREE.TorusKnotGeometry(1.5, 0.45, 120, 16);
    
    // Extract vertices to create points
    const count = geometry.attributes.position.count;
    const positions = geometry.attributes.position.array;
    
    // Custom shader/point material with glowing cyan color
    const material = new THREE.PointsMaterial({
      color: 0x06b6d4, // Neon Cyan
      size: 0.025,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    // Create the particle system
    this.particleSystem = new THREE.Points(geometry, material);
    this.scene.add(this.particleSystem);
  }

  addEventListeners() {
    // Mouse movement
    window.addEventListener('mousemove', (e) => {
      // Normalize mouse coordinates (-0.5 to 0.5)
      this.targetMouseX = (e.clientX / window.innerWidth) - 0.5;
      this.targetMouseY = (e.clientY / window.innerHeight) - 0.5;
    });

    // Scroll
    window.addEventListener('scroll', () => {
      this.targetScrollY = window.scrollY;
    });

    // Resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Damp mouse tracking for smooth lag effect (Lerp)
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.03; // Slower mouse tracking
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.03;

    // Damp scroll tracking
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.05; // Smoother scroll damping

    // Default continuous rotation (much slower and calming)
    this.particleSystem.rotation.y += 0.0003;
    this.particleSystem.rotation.x += 0.00015;

    // Interactive mouse rotation (subtle tilt to avoid dizziness)
    this.particleSystem.rotation.y += this.mouseX * 0.03;
    this.particleSystem.rotation.x += this.mouseY * 0.03;

    // Scroll-driven 3D animations (very subtle movements):
    // 1. Zoom camera in/out slightly based on scroll
    const scrollPercent = this.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
    this.camera.position.z = 6 - (scrollPercent * 0.5);
    
    // 2. Extra scroll rotation (extremely gentle)
    this.particleSystem.rotation.z = this.scrollY * 0.00015;

    this.renderer.render(this.scene, this.camera);
  }
}

// Local Time Card Updater (WIB Timezone)
function initLocalTime() {
  const clockElement = document.getElementById('time-display');
  if (!clockElement) return;

  function updateClock() {
    const options = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    
    try {
      const formatter = new Intl.DateTimeFormat('id-ID', options);
      clockElement.textContent = formatter.format(new Date()) + ' WIB';
    } catch (e) {
      // Fallback if formatting fails
      const d = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      clockElement.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} WIB`;
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// Reveal Elements on Scroll
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Animates once
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(element => {
    revealObserver.observe(element);
  });
}

// Header Navigation scroll effect & Link Active Status
function initHeaderScroll() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Add border and background on scroll
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Highlight current section link
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// Bootstrap all UI logic
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Initialize 3D Canvas Background
  new ThreeBackground();
  
  // Initialize widgets
  initLocalTime();
  initHeaderScroll();
  initScrollReveal();
});

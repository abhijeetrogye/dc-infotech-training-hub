// ========================================
// DC Infotech Training Portal - JavaScript
// ========================================

// Course Data
const coursesData = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Master modern web technologies and build responsive, dynamic websites from scratch.",
    icon: "fa-code",
    modules: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript & ES6+",
      "React.js & State Management",
      "Backend with Node.js",
      "Database Integration",
      "RESTful APIs & Authentication",
      "Deployment & Hosting"
    ],
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git"],
    careerPaths: ["Frontend Developer", "Full Stack Developer", "Web Designer", "UI Developer"],
    liveProject: "E-commerce website with payment integration",
    oneMonthFee: "₹8,999",
    threeMonthFee: "₹19,999"
  },
  {
    id: "java-programming",
    name: "Java Programming",
    description: "Learn enterprise-level Java programming with object-oriented concepts and frameworks.",
    icon: "fa-coffee",
    modules: [
      "Core Java & OOP Concepts",
      "Collections Framework",
      "Exception Handling",
      "Multithreading",
      "JDBC & Database Connectivity",
      "Spring Framework Basics",
      "Maven & Build Tools"
    ],
    tools: ["Java", "Eclipse/IntelliJ", "Spring Boot", "MySQL", "Maven", "JUnit"],
    careerPaths: ["Java Developer", "Backend Developer", "Software Engineer", "Enterprise Developer"],
    liveProject: "Banking management system with Spring Boot",
    oneMonthFee: "₹9,499",
    threeMonthFee: "₹21,999"
  },
  {
    id: "python-programming",
    name: "Python Programming",
    description: "Explore Python's versatility for web development, automation, and data processing.",
    icon: "fa-file-code",
    modules: [
      "Python Basics & Syntax",
      "Data Structures & Algorithms",
      "File Handling & Modules",
      "Web Development with Django/Flask",
      "Database Integration",
      "API Development",
      "Testing & Debugging"
    ],
    tools: ["Python", "Django", "Flask", "PostgreSQL", "VS Code", "Jupyter"],
    careerPaths: ["Python Developer", "Backend Developer", "Automation Engineer", "Data Engineer"],
    liveProject: "Blog platform with user authentication and CMS",
    oneMonthFee: "₹8,999",
    threeMonthFee: "₹20,999"
  },
  {
    id: "aiml",
    name: "AI & Machine Learning",
    description: "Dive into artificial intelligence and machine learning algorithms with practical applications.",
    icon: "fa-brain",
    modules: [
      "Python for AI/ML",
      "Statistics & Linear Algebra",
      "Supervised & Unsupervised Learning",
      "Neural Networks Fundamentals",
      "Model Training & Evaluation",
      "TensorFlow & Keras",
      "Real-world AI Applications"
    ],
    tools: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
    careerPaths: ["ML Engineer", "AI Developer", "Data Scientist", "Research Analyst"],
    liveProject: "Image classification system using CNN",
    oneMonthFee: "₹12,999",
    threeMonthFee: "₹29,999"
  },
  {
    id: "aids",
    name: "AI & Data Science",
    description: "Combine AI with data science to extract insights and build intelligent systems.",
    icon: "fa-database",
    modules: [
      "Data Science Fundamentals",
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis",
      "Machine Learning Algorithms",
      "Deep Learning Basics",
      "Big Data Technologies",
      "Model Deployment"
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "TensorFlow", "Apache Spark"],
    careerPaths: ["Data Scientist", "AI Specialist", "ML Engineer", "Business Intelligence Analyst"],
    liveProject: "Customer churn prediction model",
    oneMonthFee: "₹12,999",
    threeMonthFee: "₹29,999"
  },
  {
    id: "devops",
    name: "DevOps",
    description: "Master continuous integration, deployment, and infrastructure automation.",
    icon: "fa-git-alt",
    modules: [
      "Linux System Administration",
      "Version Control with Git",
      "CI/CD Pipelines",
      "Docker & Containerization",
      "Kubernetes Orchestration",
      "Infrastructure as Code",
      "Monitoring & Logging"
    ],
    tools: ["Linux", "Git", "Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    careerPaths: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Engineer", "Infrastructure Engineer"],
    liveProject: "Automated deployment pipeline for web application",
    oneMonthFee: "₹11,999",
    threeMonthFee: "₹26,999"
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    description: "Build strong programming foundations with essential DSA concepts for technical interviews.",
    icon: "fa-project-diagram",
    modules: [
      "Arrays & Strings",
      "Linked Lists & Stacks",
      "Trees & Graphs",
      "Sorting & Searching Algorithms",
      "Dynamic Programming",
      "Greedy Algorithms",
      "Interview Problem Solving"
    ],
    tools: ["C++", "Java", "Python", "LeetCode", "HackerRank", "VS Code"],
    careerPaths: ["Software Engineer", "Competitive Programmer", "Algorithm Designer", "Tech Interview Prep"],
    liveProject: "Custom data structure library implementation",
    oneMonthFee: "₹7,999",
    threeMonthFee: "₹17,999"
  },
  {
    id: "blockchain",
    name: "Blockchain",
    description: "Understand decentralized systems and build smart contracts on blockchain platforms.",
    icon: "fa-link",
    modules: [
      "Blockchain Fundamentals",
      "Cryptography Basics",
      "Ethereum & Smart Contracts",
      "Solidity Programming",
      "Web3.js Integration",
      "DApp Development",
      "Security Best Practices"
    ],
    tools: ["Solidity", "Web3.js", "Truffle", "Ganache", "MetaMask", "Ethereum"],
    careerPaths: ["Blockchain Developer", "Smart Contract Engineer", "DApp Developer", "Crypto Consultant"],
    liveProject: "Decentralized voting system DApp",
    oneMonthFee: "₹13,999",
    threeMonthFee: "₹31,999"
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    description: "Learn to analyze, visualize, and derive actionable insights from data.",
    icon: "fa-chart-bar",
    modules: [
      "Excel for Data Analysis",
      "SQL & Database Queries",
      "Data Visualization with Tableau",
      "Python for Analytics",
      "Statistical Analysis",
      "Business Intelligence Tools",
      "Report Generation"
    ],
    tools: ["Excel", "SQL", "Tableau", "Power BI", "Python", "Pandas", "NumPy"],
    careerPaths: ["Data Analyst", "Business Analyst", "BI Developer", "Reporting Analyst"],
    liveProject: "Sales dashboard with predictive analytics",
    oneMonthFee: "₹9,999",
    threeMonthFee: "₹22,999"
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    description: "Master cloud platforms and services for scalable application deployment.",
    icon: "fa-cloud",
    modules: [
      "Cloud Computing Fundamentals",
      "AWS Core Services",
      "Azure Basics",
      "Virtual Machines & Storage",
      "Cloud Networking",
      "Serverless Architecture",
      "Cloud Security"
    ],
    tools: ["AWS", "Azure", "Google Cloud", "Terraform", "CloudFormation", "Lambda"],
    careerPaths: ["Cloud Engineer", "Cloud Architect", "Solutions Architect", "Cloud Consultant"],
    liveProject: "Scalable web application on AWS with auto-scaling",
    oneMonthFee: "₹11,999",
    threeMonthFee: "₹25,999"
  }
];

// Testimonials Data
const testimonialsData = [
  {
    name: "Priya Sharma",
    course: "Web Development",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0077ff&color=fff",
    text: "DC Infotech transformed my career! The hands-on training and real-world projects gave me the confidence to land my dream job as a frontend developer.",
    rating: 5
  },
  {
    name: "Rahul Kumar",
    course: "Java Programming",
    image: "https://ui-avatars.com/api/?name=Rahul+Kumar&background=0077ff&color=fff",
    text: "The instructors are industry experts who provided invaluable insights. The placement support helped me secure a position at a top IT company.",
    rating: 5
  },
  {
    name: "Anita Desai",
    course: "Data Analyst",
    image: "https://ui-avatars.com/api/?name=Anita+Desai&background=0077ff&color=fff",
    text: "Excellent curriculum with practical case studies. I learned Tableau, SQL, and Python in just 3 months and got placed as a Business Analyst.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    course: "DevOps",
    image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=0077ff&color=fff",
    text: "The DevOps program is comprehensive and up-to-date. Learning Docker, Kubernetes, and CI/CD pipelines was a game-changer for my career.",
    rating: 5
  }
];

// ========================================
// Navigation
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Sticky Navbar
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
  });

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById('scrollTop');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });
    
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize page-specific content
  initPageContent();
});

// ========================================
// Page Initialization
// ========================================
function initPageContent() {
  const path = window.location.pathname;
  
  if (path.includes('index.html') || path === '/' || path === '') {
    initHomePage();
  } else if (path.includes('courses.html')) {
    initCoursesPage();
  } else if (path.includes('course-details.html')) {
    initCourseDetailsPage();
  } else if (path.includes('enroll.html')) {
    initEnrollPage();
  }
}

// ========================================
// Home Page
// ========================================
function initHomePage() {
  // Animated Stats Counter
  animateStats();
  
  // Load Courses Overview
  loadCoursesOverview();
  
  // Initialize Testimonial Slider
  initTestimonialSlider();
}

function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateValue(entry.target, 0, target, 2000);
        observer.unobserve(entry.target);
      }
    });
  });
  
  statNumbers.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

function loadCoursesOverview() {
  const coursesGrid = document.getElementById('coursesGrid');
  if (!coursesGrid) return;
  
  coursesGrid.innerHTML = coursesData.map(course => `
    <div class="course-card">
      <div class="course-icon">
        <i class="fas ${course.icon}"></i>
      </div>
      <h3>${course.name}</h3>
      <p>${course.description}</p>
      <a href="course-details.html?id=${course.id}" class="btn btn-primary" style="margin-top: 1rem;">View Details</a>
    </div>
  `).join('');
}

function initTestimonialSlider() {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (!track) return;
  
  let currentIndex = 0;
  
  // Create testimonial cards
  track.innerHTML = testimonialsData.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-avatar">
        <img src="${testimonial.image}" alt="${testimonial.name}">
      </div>
      <div class="testimonial-name">${testimonial.name}</div>
      <div class="testimonial-course">${testimonial.course}</div>
      <div class="testimonial-text">"${testimonial.text}"</div>
      <div class="testimonial-rating">
        ${'★'.repeat(testimonial.rating)}
      </div>
    </div>
  `).join('');
  
  // Create dots
  dotsContainer.innerHTML = testimonialsData.map((_, index) => 
    `<span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
  ).join('');
  
  const dots = dotsContainer.querySelectorAll('.dot');
  
  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonialsData.length;
    updateSlider();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
    updateSlider();
  }
  
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.getAttribute('data-index'));
      updateSlider();
    });
  });
  
  // Auto-slide
  setInterval(nextSlide, 5000);
}

// ========================================
// Courses Page
// ========================================
function initCoursesPage() {
  const grid = document.getElementById('coursesDetailedGrid');
  if (!grid) return;
  
  grid.innerHTML = coursesData.map(course => `
    <div class="course-detailed-card">
      <div class="course-header">
        <i class="fas ${course.icon}"></i>
        <h3>${course.name}</h3>
      </div>
      <p class="course-description">${course.description}</p>
      
      <div class="course-tools">
        ${course.tools.map(tool => `<span class="tool-badge">${tool}</span>`).join('')}
      </div>
      
      <div class="course-duration">
        <div class="duration-option">
          <strong>${course.oneMonthFee}</strong>
          <span>1 Month</span>
        </div>
        <div class="duration-option">
          <strong>${course.threeMonthFee}</strong>
          <span>3 Months</span>
        </div>
      </div>
      
      <a href="course-details.html?id=${course.id}" class="btn btn-primary btn-block">View Full Details</a>
    </div>
  `).join('');
}

// ========================================
// Course Details Page
// ========================================
function initCourseDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id');
  
  if (!courseId) {
    window.location.href = 'courses.html';
    return;
  }
  
  const course = coursesData.find(c => c.id === courseId);
  
  if (!course) {
    window.location.href = 'courses.html';
    return;
  }
  
  const content = document.getElementById('courseDetailsContent');
  if (!content) return;
  
  content.innerHTML = `
    <div class="course-details-header">
      <div class="container">
        <h1>${course.name}</h1>
        <p>${course.description}</p>
      </div>
    </div>
    
    <section class="course-details-body">
      <div class="container">
        <div class="details-grid">
          <div class="details-main">
            <h2><i class="fas fa-book"></i> Program Structure</h2>
            <ul class="modules-list">
              ${course.modules.map(module => `
                <li><i class="fas fa-check-circle"></i> ${module}</li>
              `).join('')}
            </ul>
            
            <h2 style="margin-top: 2rem;"><i class="fas fa-tools"></i> Tools & Technologies</h2>
            <div class="tools-list">
              ${course.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
            </div>
            
            <h2><i class="fas fa-briefcase"></i> Career Paths</h2>
            <ul class="careers-list">
              ${course.careerPaths.map(career => `
                <li><i class="fas fa-arrow-right"></i> ${career}</li>
              `).join('')}
            </ul>
            
            <h2><i class="fas fa-project-diagram"></i> Live Project</h2>
            <p style="color: var(--text-secondary); line-height: 1.8;">${course.liveProject}</p>
          </div>
          
          <div class="details-sidebar">
            <div class="pricing-card">
              <h3>Course Pricing</h3>
              <table class="pricing-table">
                <tr>
                  <td>1 Month Program</td>
                  <td class="price">${course.oneMonthFee}</td>
                </tr>
                <tr>
                  <td>3 Month Program</td>
                  <td class="price">${course.threeMonthFee}</td>
                </tr>
              </table>
              <a href="enroll.html?course=${course.id}" class="btn btn-primary btn-block">Enroll Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ========================================
// Enroll Page
// ========================================
function initEnrollPage() {
  // Populate course dropdown
  const courseSelect = document.getElementById('course');
  if (courseSelect) {
    courseSelect.innerHTML = '<option value="">-- Choose a Course --</option>' +
      coursesData.map(course => 
        `<option value="${course.id}">${course.name}</option>`
      ).join('');
    
    // Pre-select course from URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    if (courseId) {
      courseSelect.value = courseId;
    }
  }
  
  // Form Validation
  const form = document.getElementById('enrollmentForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm()) {
        showSuccessModal();
        form.reset();
      }
    });
  }
}

function validateForm() {
  let isValid = true;
  
  // Full Name
  const fullName = document.getElementById('fullName');
  const fullNameError = document.getElementById('fullNameError');
  if (fullName.value.trim().length < 3) {
    fullNameError.textContent = 'Name must be at least 3 characters';
    isValid = false;
  } else {
    fullNameError.textContent = '';
  }
  
  // Email
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.textContent = '';
  }
  
  // Phone
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  if (!/^\d{10}$/.test(phone.value)) {
    phoneError.textContent = 'Please enter a valid 10-digit phone number';
    isValid = false;
  } else {
    phoneError.textContent = '';
  }
  
  // Course
  const course = document.getElementById('course');
  const courseError = document.getElementById('courseError');
  if (!course.value) {
    courseError.textContent = 'Please select a course';
    isValid = false;
  } else {
    courseError.textContent = '';
  }
  
  // Duration
  const duration = document.getElementById('duration');
  const durationError = document.getElementById('durationError');
  if (!duration.value) {
    durationError.textContent = 'Please select a training duration';
    isValid = false;
  } else {
    durationError.textContent = '';
  }
  
  return isValid;
}

function showSuccessModal() {
  const modal = document.getElementById('successModal');
  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('successModal');
  modal.classList.remove('show');
}

// Close modal on outside click
window.addEventListener('click', function(e) {
  const modal = document.getElementById('successModal');
  if (e.target === modal) {
    closeModal();
  }
});

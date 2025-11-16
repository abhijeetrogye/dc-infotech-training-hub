export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  modules: string[];
  tools: string[];
  careerPaths: string[];
  liveProject: string;
  oneMonthFee: string;
  threeMonthFee: string;
}

export const courses: Course[] = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Master modern web technologies and build responsive, dynamic websites from scratch.",
    icon: "Code",
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
    icon: "Coffee",
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
    icon: "FileCode",
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
    icon: "Brain",
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
    icon: "Database",
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
    icon: "GitBranch",
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
    icon: "Network",
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
    icon: "Link",
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
    icon: "BarChart",
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
    icon: "Cloud",
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

export const testimonials = [
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

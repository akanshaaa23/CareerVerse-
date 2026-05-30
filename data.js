/* ========================================================
   data.js — All career roadmap data, quiz, salary insights
   ======================================================== */

const CAREERS = {
  frontend: {
    title: "Frontend Developer",
    emoji: "🎨",
    color: "#6EE7B7",
    meta: "Build beautiful, responsive web interfaces · Avg 6–18 months to job-ready",
    description: "Frontend developers craft the visual and interactive parts of websites and web applications using HTML, CSS, JavaScript, and modern frameworks.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–3 Months",
        skills: [
          "HTML5 Fundamentals", "CSS3 & Flexbox", "CSS Grid", "Responsive Design",
          "JavaScript Basics", "DOM Manipulation", "ES6+ Syntax", "Git & GitHub",
          "VS Code Setup", "Browser DevTools", "CSS Variables", "Media Queries"
        ],
        projects: [
          { name: "Personal Portfolio", desc: "Showcase your skills with a responsive personal website", level: "easy" },
          { name: "Landing Page Clone", desc: "Recreate a popular website's landing page", level: "easy" },
          { name: "CSS Art", desc: "Create drawings using only HTML & CSS", level: "easy" },
          { name: "JavaScript Calculator", desc: "Build a functional calculator with all operations", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "3–8 Months",
        skills: [
          "React.js", "React Hooks", "State Management (Redux/Zustand)", "TypeScript",
          "API Integration (Fetch/Axios)", "React Router", "CSS Frameworks (Tailwind)", "SASS/SCSS",
          "Jest & Testing Library", "Webpack/Vite", "Web Accessibility", "Performance Optimization"
        ],
        projects: [
          { name: "E-Commerce UI", desc: "Product listing, cart, and checkout flow with React", level: "medium" },
          { name: "Weather App", desc: "Real-time weather using OpenWeatherMap API with React", level: "medium" },
          { name: "Trello Clone", desc: "Drag-and-drop task management board", level: "medium" },
          { name: "Chat Application UI", desc: "Real-time chat interface with websocket integration", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "8–18 Months",
        skills: [
          "Next.js (SSR/SSG)", "GraphQL & Apollo Client", "Micro-Frontends", "Web Components",
          "WebGL / Three.js", "Progressive Web Apps", "CI/CD Pipelines", "Docker Basics",
          "Web Performance (Core Web Vitals)", "Security Best Practices", "Design Systems", "Architecture Patterns"
        ],
        projects: [
          { name: "Full-stack SaaS App", desc: "Build a complete SaaS with auth, payments, and dashboard", level: "hard" },
          { name: "Component Library", desc: "Create a reusable UI component library with Storybook", level: "hard" },
          { name: "Real-time Dashboard", desc: "Live data visualization with WebSockets and D3.js", level: "hard" },
          { name: "Portfolio with CMS", desc: "Next.js portfolio connected to a headless CMS", level: "medium" }
        ]
      }
    ],
    resources: [
      { name: "freeCodeCamp", icon: "🏕️", type: "free", url: "#", desc: "Full web development curriculum for free" },
      { name: "The Odin Project", icon: "⚔️", type: "free", url: "#", desc: "Project-based web dev bootcamp" },
      { name: "React Docs (Official)", icon: "⚛️", type: "free", url: "#", desc: "Official React documentation and tutorials" },
      { name: "Frontend Masters", icon: "🎓", type: "paid", url: "#", desc: "Expert-led video courses on frontend" },
      { name: "Traversy Media", icon: "▶️", type: "yt", url: "#", desc: "Brad Traversy's web dev YouTube channel" },
      { name: "CSS-Tricks", icon: "🎨", type: "free", url: "#", desc: "Guides, tricks, and tutorials on CSS" }
    ]
  },

  backend: {
    title: "Backend Developer",
    emoji: "⚙️",
    color: "#3B82F6",
    meta: "Power the server-side of the web · Avg 8–20 months to job-ready",
    description: "Backend developers build and maintain the server, database, and application logic that power web applications.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–3 Months",
        skills: [
          "Python or Node.js Basics", "Data Structures & Algorithms", "HTTP & REST Concepts",
          "SQL Fundamentals", "Command Line / Bash", "Git & Version Control",
          "JSON & XML", "Basic Linux", "Postman / API Testing", "PostgreSQL Basics"
        ],
        projects: [
          { name: "REST API (CRUD)", desc: "Build a RESTful API with basic CRUD operations", level: "easy" },
          { name: "URL Shortener", desc: "Simple URL shortener with database storage", level: "easy" },
          { name: "CLI Tool", desc: "Command-line application with argument parsing", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "3–10 Months",
        skills: [
          "Node.js & Express.js", "Django / FastAPI", "Authentication & JWT", "Redis Caching",
          "MongoDB & NoSQL", "ORM (Prisma/SQLAlchemy)", "Message Queues (RabbitMQ)", "WebSockets",
          "Docker & Containers", "Environment Variables", "Error Handling", "Rate Limiting & Security"
        ],
        projects: [
          { name: "Blog API with Auth", desc: "Full CRUD blog API with JWT authentication", level: "medium" },
          { name: "E-Commerce Backend", desc: "Products, orders, users, payments backend", level: "medium" },
          { name: "Real-time Chat Server", desc: "WebSocket-based chat with rooms and history", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "10–20 Months",
        skills: [
          "Microservices Architecture", "Kafka / Event Streaming", "GraphQL APIs", "gRPC",
          "Kubernetes", "AWS / GCP / Azure", "Database Scaling & Sharding", "API Gateway",
          "Service Mesh (Istio)", "Observability (Prometheus/Grafana)", "Load Balancers", "System Design"
        ],
        projects: [
          { name: "Microservices Platform", desc: "Multi-service app with API gateway and service discovery", level: "hard" },
          { name: "High-throughput API", desc: "API handling 10k+ req/s with caching and optimization", level: "hard" },
          { name: "Data Pipeline", desc: "ETL pipeline processing large datasets in real-time", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "Node.js Official Docs", icon: "💚", type: "free", url: "#", desc: "Complete Node.js documentation" },
      { name: "FastAPI Docs", icon: "⚡", type: "free", url: "#", desc: "Modern Python API framework docs" },
      { name: "Roadmap.sh Backend", icon: "🗺️", type: "free", url: "#", desc: "Visual backend developer roadmap" },
      { name: "Hussein Nasser (YT)", icon: "▶️", type: "yt", url: "#", desc: "Backend engineering deep dives" },
      { name: "Udemy - NodeJS", icon: "🎓", type: "paid", url: "#", desc: "Jonas Schmedtmann's Node.js bootcamp" },
      { name: "PostgreSQL Tutorial", icon: "🐘", type: "free", url: "#", desc: "Learn PostgreSQL from scratch" }
    ]
  },

  fullstack: {
    title: "Full Stack Developer",
    emoji: "🌐",
    color: "#8B5CF6",
    meta: "Master both frontend and backend · Avg 12–24 months to job-ready",
    description: "Full stack developers are versatile engineers who can build complete web applications from the database layer to the user interface.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–4 Months",
        skills: [
          "HTML, CSS, JavaScript", "React.js Basics", "Node.js & Express", "SQL + MongoDB",
          "Git & GitHub", "REST API Concepts", "Basic Authentication", "Responsive Design",
          "ES6+ Syntax", "npm / yarn Package Managers"
        ],
        projects: [
          { name: "Todo App (MERN)", desc: "Full-stack todo app with React frontend and Express backend", level: "easy" },
          { name: "Blog with CMS", desc: "Simple blog with admin panel for managing posts", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "4–12 Months",
        skills: [
          "Next.js (SSR/SSG)", "TypeScript", "Prisma ORM", "JWT & OAuth2", "Redux/Zustand",
          "PostgreSQL Advanced", "Redis", "Socket.IO", "Docker", "Deployment (Vercel/Railway)",
          "Testing (Jest + Cypress)", "API Design Patterns"
        ],
        projects: [
          { name: "Social Media App", desc: "Full-stack social platform with auth, posts, likes, follows", level: "medium" },
          { name: "Job Board", desc: "Job listings with company profiles and application system", level: "medium" },
          { name: "Real-time Collaboration Tool", desc: "Notion-like collaborative document editor", level: "hard" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "12–24 Months",
        skills: [
          "Microservices Architecture", "GraphQL (Hasura/Apollo)", "AWS Deployment", "Kubernetes Basics",
          "CI/CD with GitHub Actions", "Payment Integration (Stripe)", "Performance Optimization",
          "Security Hardening", "System Design", "SaaS Architecture", "Monitoring & Logging"
        ],
        projects: [
          { name: "SaaS Platform", desc: "Multi-tenant SaaS with billing, teams, and analytics", level: "hard" },
          { name: "E-Commerce Full Stack", desc: "Complete store with inventory, payments, and admin dashboard", level: "hard" },
          { name: "Freelance Platform", desc: "Upwork-like marketplace with escrow and messaging", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "The Odin Project", icon: "⚔️", type: "free", url: "#", desc: "Free full-stack web dev curriculum" },
      { name: "Next.js Docs", icon: "▲", type: "free", url: "#", desc: "Official Next.js documentation" },
      { name: "Fireship.io", icon: "🔥", type: "free", url: "#", desc: "Fast-paced web dev tutorials" },
      { name: "Udemy Full Stack", icon: "🎓", type: "paid", url: "#", desc: "Angela Yu's Web Dev Bootcamp" },
      { name: "Kevin Powell (YT)", icon: "▶️", type: "yt", url: "#", desc: "CSS & Frontend deep dives on YouTube" },
      { name: "Traversy Media", icon: "📹", type: "yt", url: "#", desc: "Project-based full stack tutorials" }
    ]
  },

  dataanalyst: {
    title: "Data Analyst",
    emoji: "📊",
    color: "#F59E0B",
    meta: "Transform data into actionable insights · Avg 6–15 months to job-ready",
    description: "Data analysts collect, clean, and analyze data to help organizations make informed business decisions.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–3 Months",
        skills: [
          "Excel (Advanced)", "SQL Fundamentals", "Python Basics", "Statistics Fundamentals",
          "Data Types & Structures", "Pandas Library", "NumPy Basics", "Data Cleaning",
          "Google Sheets", "Basic Data Visualization"
        ],
        projects: [
          { name: "Sales Analysis", desc: "Analyze sales data with Excel and create pivot table reports", level: "easy" },
          { name: "SQL Queries on Chinook DB", desc: "Write complex queries on a sample music store database", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "3–9 Months",
        skills: [
          "Tableau / Power BI", "Advanced SQL (Window Functions)", "Python for Data Analysis",
          "Matplotlib & Seaborn", "A/B Testing", "KPI Development", "Dashboard Design",
          "Business Intelligence Concepts", "EDA (Exploratory Data Analysis)", "Data Storytelling"
        ],
        projects: [
          { name: "Sales Dashboard (Tableau)", desc: "Interactive dashboard with filters, drill-downs, and KPIs", level: "medium" },
          { name: "Customer Churn Analysis", desc: "Analyze and predict customer churn using Python", level: "medium" },
          { name: "COVID-19 Dashboard", desc: "Real-time COVID data visualization with multiple charts", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "9–15 Months",
        skills: [
          "Machine Learning Basics (Scikit-learn)", "BigQuery / Snowflake", "Apache Spark",
          "Data Pipelines & ETL", "dbt (Data Build Tool)", "Looker", "Statistical Modeling",
          "Google Analytics", "Airflow", "Cloud Data Platforms"
        ],
        projects: [
          { name: "End-to-End Data Pipeline", desc: "Build ETL pipeline from raw data to BI dashboard", level: "hard" },
          { name: "Predictive Sales Model", desc: "Forecast sales using regression and time series", level: "hard" },
          { name: "Marketing Attribution Model", desc: "Multi-touch attribution analysis for marketing channels", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "Kaggle Courses", icon: "🏆", type: "free", url: "#", desc: "Free data science courses with certificates" },
      { name: "Mode Analytics SQL", icon: "🗃️", type: "free", url: "#", desc: "Interactive SQL tutorials for analysts" },
      { name: "Storytelling with Data", icon: "📖", type: "paid", url: "#", desc: "Book on effective data visualization" },
      { name: "Alex The Analyst (YT)", icon: "▶️", type: "yt", url: "#", desc: "Data analyst tutorials for beginners" },
      { name: "Luke Barousse (YT)", icon: "▶️", type: "yt", url: "#", desc: "SQL & Python for data analysis" },
      { name: "Google Data Analytics", icon: "🎓", type: "paid", url: "#", desc: "Google's professional data analytics cert" }
    ]
  },

  datascientist: {
    title: "Data Scientist",
    emoji: "🤖",
    color: "#EC4899",
    meta: "Extract insights and build predictive models · Avg 12–24 months to job-ready",
    description: "Data scientists use statistical methods, machine learning, and programming to analyze complex datasets and build predictive models.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–4 Months",
        skills: [
          "Python Programming", "Statistics & Probability", "Linear Algebra Basics", "SQL",
          "Pandas & NumPy", "Data Visualization", "EDA Techniques", "Matplotlib & Seaborn",
          "Jupyter Notebooks", "Basic ML Concepts"
        ],
        projects: [
          { name: "Titanic Survival Analysis", desc: "Classic Kaggle problem for beginners", level: "easy" },
          { name: "Iris Classification", desc: "Flower species classification with basic ML", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "4–12 Months",
        skills: [
          "Scikit-learn", "Supervised & Unsupervised Learning", "Feature Engineering",
          "Model Evaluation & Validation", "Time Series Analysis", "NLP Basics (NLTK/spaCy)",
          "Neural Networks (Keras)", "Hyperparameter Tuning", "Cross-Validation", "Ensemble Methods"
        ],
        projects: [
          { name: "House Price Prediction", desc: "Regression model predicting house prices", level: "medium" },
          { name: "Sentiment Analysis", desc: "Twitter sentiment classifier using NLP", level: "medium" },
          { name: "Recommendation System", desc: "Movie recommendations using collaborative filtering", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "12–24 Months",
        skills: [
          "Deep Learning (PyTorch/TensorFlow)", "Computer Vision (CNN)", "Advanced NLP (Transformers)",
          "MLflow & Experiment Tracking", "Model Deployment (FastAPI/Flask)", "Feature Stores",
          "Causal Inference", "Bayesian Methods", "A/B Testing at Scale", "MLOps Basics"
        ],
        projects: [
          { name: "Image Classification App", desc: "CNN model deployed as a web app", level: "hard" },
          { name: "Fraud Detection System", desc: "Real-time fraud detection with imbalanced data", level: "hard" },
          { name: "LLM Fine-tuning", desc: "Fine-tune a language model for domain-specific tasks", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "fast.ai", icon: "🚀", type: "free", url: "#", desc: "Practical deep learning for coders" },
      { name: "Kaggle", icon: "🏆", type: "free", url: "#", desc: "Competitions, datasets, and notebooks" },
      { name: "StatQuest (YT)", icon: "▶️", type: "yt", url: "#", desc: "Statistics explained clearly by Josh Starmer" },
      { name: "Andrej Karpathy (YT)", icon: "🧠", type: "yt", url: "#", desc: "Deep learning from scratch tutorials" },
      { name: "Hands-on ML Book", icon: "📗", type: "paid", url: "#", desc: "Aurélien Géron's must-read ML book" },
      { name: "Coursera ML Spec", icon: "🎓", type: "paid", url: "#", desc: "Andrew Ng's Machine Learning Specialization" }
    ]
  },

  aiengineer: {
    title: "AI Engineer",
    emoji: "🧠",
    color: "#6EE7B7",
    meta: "Build production AI systems & LLM apps · Avg 18–30 months to job-ready",
    description: "AI engineers build, deploy, and maintain AI-powered systems and applications, bridging the gap between ML research and production.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–4 Months",
        skills: [
          "Python (Advanced)", "Linear Algebra & Calculus", "Probability & Statistics",
          "ML Fundamentals", "NumPy & Pandas", "Scikit-learn", "Neural Network Basics",
          "Git & GitHub", "API Integration", "OpenAI API Basics"
        ],
        projects: [
          { name: "GPT Chatbot", desc: "Simple chatbot using OpenAI API with conversation history", level: "easy" },
          { name: "Image Classifier", desc: "Train a simple CNN on MNIST or CIFAR-10", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "4–15 Months",
        skills: [
          "Deep Learning (PyTorch)", "LLMs & Transformers", "Prompt Engineering", "LangChain / LlamaIndex",
          "Vector Databases (Pinecone/Weaviate)", "RAG (Retrieval Augmented Generation)", "Fine-tuning LLMs",
          "HuggingFace Ecosystem", "FastAPI for ML APIs", "Docker for AI Apps", "CUDA Basics"
        ],
        projects: [
          { name: "RAG Document Q&A", desc: "Ask questions about your documents using RAG", level: "medium" },
          { name: "AI Code Reviewer", desc: "Automated code review system using LLMs", level: "medium" },
          { name: "Multi-modal AI App", desc: "App that processes both text and images", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "15–30 Months",
        skills: [
          "MLOps & Model Serving", "Kubernetes for ML", "Distributed Training", "Model Optimization (Quantization/Pruning)",
          "AI Agents & Tool Use", "Reinforcement Learning", "RLHF", "Custom Model Architecture",
          "LLM Evaluation & Safety", "GPU Cluster Management", "Research Paper Implementation"
        ],
        projects: [
          { name: "AI Agent Platform", desc: "Autonomous agent that browses web, writes code, sends emails", level: "hard" },
          { name: "Production ML Pipeline", desc: "Full MLOps pipeline with training, serving, and monitoring", level: "hard" },
          { name: "Custom LLM Fine-tune", desc: "Fine-tune Llama/Mistral for a specific domain", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "fast.ai", icon: "🚀", type: "free", url: "#", desc: "Practical deep learning for coders" },
      { name: "Anthropic Cookbook", icon: "📘", type: "free", url: "#", desc: "LLM engineering guides and examples" },
      { name: "Andrej Karpathy (YT)", icon: "🧠", type: "yt", url: "#", desc: "Neural networks and GPT from scratch" },
      { name: "HuggingFace Course", icon: "🤗", type: "free", url: "#", desc: "NLP and transformers course" },
      { name: "Stanford CS224N", icon: "🎓", type: "free", url: "#", desc: "NLP with Deep Learning course" },
      { name: "LLM Bootcamp (YT)", icon: "▶️", type: "yt", url: "#", desc: "Full LLM engineering bootcamp" }
    ]
  },

  cybersecurity: {
    title: "Cyber Security",
    emoji: "🔒",
    color: "#EF4444",
    meta: "Protect systems and fight cyber threats · Avg 12–24 months to job-ready",
    description: "Cybersecurity professionals protect organizations from digital attacks, data breaches, and vulnerabilities.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–4 Months",
        skills: [
          "Networking Fundamentals (TCP/IP)", "Linux Command Line", "Python Scripting",
          "Security Concepts (CIA Triad)", "OS Hardening", "Cryptography Basics",
          "Wireshark (Packet Analysis)", "Nmap Basics", "CompTIA Security+ Prep", "Git Basics"
        ],
        projects: [
          { name: "Network Scanner", desc: "Python script to scan and map network devices", level: "easy" },
          { name: "Password Manager", desc: "Encrypted local password manager in Python", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "4–14 Months",
        skills: [
          "Penetration Testing (Kali Linux)", "Web App Security (OWASP Top 10)", "Metasploit Framework",
          "Burp Suite", "SQL Injection & XSS", "Reverse Engineering Basics", "Malware Analysis",
          "SIEM Tools (Splunk)", "Incident Response", "CTF Competitions", "Ethical Hacking"
        ],
        projects: [
          { name: "Vulnerable Web App Pentest", desc: "Pentest DVWA and document vulnerabilities", level: "medium" },
          { name: "Honeypot Setup", desc: "Deploy and monitor a honeypot to capture attacks", level: "medium" },
          { name: "CTF Writeups", desc: "Solve CTF challenges on TryHackMe / HackTheBox", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "14–24 Months",
        skills: [
          "Red Team Operations", "Advanced Exploitation", "Threat Intelligence", "Zero-day Research",
          "Cloud Security (AWS/Azure)", "DevSecOps", "OSCP Certification", "Forensics",
          "Exploit Development", "Security Architecture", "Compliance (SOC2/ISO27001)"
        ],
        projects: [
          { name: "Red Team Assessment", desc: "Full engagement simulation with report", level: "hard" },
          { name: "Security Dashboard", desc: "SIEM dashboard integrating multiple log sources", level: "hard" },
          { name: "Custom C2 Framework", desc: "Command and control framework for red team ops", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "TryHackMe", icon: "🏠", type: "free", url: "#", desc: "Gamified cybersecurity learning platform" },
      { name: "HackTheBox", icon: "💻", type: "free", url: "#", desc: "Realistic pen testing labs and challenges" },
      { name: "TCM Security (YT)", icon: "▶️", type: "yt", url: "#", desc: "Ethical hacking tutorials by Heath Adams" },
      { name: "John Hammond (YT)", icon: "▶️", type: "yt", url: "#", desc: "CTF walkthroughs and malware analysis" },
      { name: "CompTIA Security+", icon: "🎓", type: "paid", url: "#", desc: "Industry-standard entry-level cert" },
      { name: "OWASP Testing Guide", icon: "🛡️", type: "free", url: "#", desc: "Web application security testing guide" }
    ]
  },

  devops: {
    title: "DevOps Engineer",
    emoji: "🛠️",
    color: "#F97316",
    meta: "Bridge development and operations · Avg 15–24 months to job-ready",
    description: "DevOps engineers automate software delivery, manage infrastructure, and enable continuous deployment of applications.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–4 Months",
        skills: [
          "Linux & Bash Scripting", "Git & GitHub", "Networking Basics", "Python Scripting",
          "SSH & File Transfer", "Docker Fundamentals", "YAML Syntax", "Basic Cloud (AWS Free Tier)",
          "HTTP & DNS Concepts", "Package Managers (apt/yum)"
        ],
        projects: [
          { name: "Dockerize an App", desc: "Containerize a simple web app with Docker", level: "easy" },
          { name: "Bash Automation Scripts", desc: "Automate backup, cleanup, and monitoring tasks", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "4–15 Months",
        skills: [
          "Kubernetes (k8s)", "CI/CD (GitHub Actions / Jenkins)", "Terraform (IaC)", "Ansible",
          "AWS Core Services (EC2, S3, RDS, VPC)", "Nginx & Load Balancing", "Helm Charts",
          "Prometheus & Grafana", "ELK Stack (Logging)", "Secrets Management (Vault)"
        ],
        projects: [
          { name: "CI/CD Pipeline", desc: "Full pipeline from code push to auto deployment", level: "medium" },
          { name: "K8s Cluster Setup", desc: "Deploy multi-service app on Kubernetes", level: "medium" },
          { name: "Infrastructure as Code", desc: "Provision AWS infra with Terraform", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "15–24 Months",
        skills: [
          "Multi-cloud Architecture", "Service Mesh (Istio)", "FinOps & Cost Optimization",
          "GitOps (ArgoCD / Flux)", "SRE Practices", "Chaos Engineering", "Platform Engineering",
          "Security Scanning (Trivy/Snyk)", "Observability at Scale", "On-call & Incident Management"
        ],
        projects: [
          { name: "GitOps Platform", desc: "ArgoCD-based GitOps workflow for microservices", level: "hard" },
          { name: "SRE Runbook & Dashboards", desc: "Full observability stack with SLOs and alerts", level: "hard" },
          { name: "Multi-cloud DR Setup", desc: "Disaster recovery across two cloud providers", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "KodeKloud", icon: "🎮", type: "paid", url: "#", desc: "Hands-on DevOps labs and courses" },
      { name: "TechWorld with Nana (YT)", icon: "▶️", type: "yt", url: "#", desc: "Best DevOps tutorials on YouTube" },
      { name: "AWS Free Tier", icon: "☁️", type: "free", url: "#", desc: "Practice on real AWS infrastructure free" },
      { name: "Kubernetes Docs", icon: "☸️", type: "free", url: "#", desc: "Official Kubernetes documentation" },
      { name: "Linux Foundation Certs", icon: "🎓", type: "paid", url: "#", desc: "CKA, CKAD, and CKS certifications" },
      { name: "DevOps Roadmap.sh", icon: "🗺️", type: "free", url: "#", desc: "Visual DevOps learning roadmap" }
    ]
  },

  productmanager: {
    title: "Product Manager",
    emoji: "📋",
    color: "#14B8A6",
    meta: "Shape products people love · Avg 12–24 months to transition",
    description: "Product managers define product vision, prioritize features, and work with cross-functional teams to deliver products that customers love.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–4 Months",
        skills: [
          "Product Thinking", "User Research Methods", "Wireframing (Figma Basics)", "SQL Basics",
          "Agile & Scrum", "JIRA / Notion", "Product Metrics & KPIs", "Competitive Analysis",
          "User Personas", "Problem Framing (Jobs-to-be-Done)"
        ],
        projects: [
          { name: "PRD for Existing App", desc: "Write a Product Requirements Doc for a feature you wish existed", level: "easy" },
          { name: "Competitive Analysis", desc: "Compare 3 competing products with a feature matrix", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "4–14 Months",
        skills: [
          "Product Strategy & Vision", "OKRs & Goal Setting", "A/B Testing", "Data Analysis (Mixpanel/Amplitude)",
          "Roadmap Prioritization (RICE/ICE)", "Stakeholder Management", "Go-to-Market Strategy",
          "Technical Knowledge for PMs", "User Interview Techniques", "Product Analytics"
        ],
        projects: [
          { name: "Feature Launch Plan", desc: "End-to-end feature from ideation to launch plan", level: "medium" },
          { name: "Product Teardown", desc: "Deep analysis of a popular product's UX and business model", level: "medium" },
          { name: "Growth Strategy", desc: "Growth plan for a B2C app using AARRR framework", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "14–24 Months",
        skills: [
          "Platform & API Products", "Monetization Strategy", "Enterprise Product Management",
          "Executive Stakeholder Management", "M&A Due Diligence", "Build vs Buy Analysis",
          "Market Sizing & Segmentation", "Pricing Strategy", "Product-Led Growth (PLG)", "Board Presentations"
        ],
        projects: [
          { name: "0 to 1 Product Case Study", desc: "Build and launch a side project as a PM", level: "hard" },
          { name: "Investor Pitch Deck", desc: "Create a pitch deck for a product idea", level: "medium" },
          { name: "PM Portfolio", desc: "Document 3 product case studies with metrics & outcomes", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "Lenny's Newsletter", icon: "📰", type: "free", url: "#", desc: "Top PM newsletter with deep dives" },
      { name: "Product School", icon: "🏫", type: "paid", url: "#", desc: "PM certifications and workshops" },
      { name: "Shreyas Doshi (Twitter)", icon: "🐦", type: "free", url: "#", desc: "Senior PM wisdom on Twitter/X" },
      { name: "PM Exercises", icon: "💪", type: "free", url: "#", desc: "Interview prep and case studies" },
      { name: "Inspired (Book)", icon: "📗", type: "paid", url: "#", desc: "Marty Cagan's PM bible" },
      { name: "This is Product Management (YT)", icon: "▶️", type: "yt", url: "#", desc: "PM interviews and case studies" }
    ]
  },

  uiux: {
    title: "UI/UX Designer",
    emoji: "🎭",
    color: "#A855F7",
    meta: "Design intuitive and beautiful experiences · Avg 8–18 months to job-ready",
    description: "UI/UX designers create visually appealing, user-friendly interfaces through research, prototyping, and visual design.",
    stages: [
      {
        level: "beginner",
        label: "Beginner",
        emoji: "🌱",
        duration: "0–3 Months",
        skills: [
          "Design Principles (Color, Typography, Space)", "Figma Fundamentals", "User Research",
          "Wireframing", "User Personas", "Information Architecture", "Design Systems Basics",
          "Accessibility Basics", "Heuristic Evaluation", "Usability Testing"
        ],
        projects: [
          { name: "Mobile App Wireframes", desc: "Low-fidelity wireframes for a food delivery app", level: "easy" },
          { name: "Landing Page Redesign", desc: "Improve the UI of an existing website", level: "easy" }
        ]
      },
      {
        level: "intermediate",
        label: "Intermediate",
        emoji: "🚀",
        duration: "3–10 Months",
        skills: [
          "Figma (Advanced)", "Prototyping & Interactions", "Component Libraries", "Design Systems",
          "User Journey Mapping", "A/B Testing for Design", "Motion Design Basics", "Responsive Design",
          "Design Handoff (Dev Mode)", "Icon Design", "Micro-interactions", "CSS Basics for Designers"
        ],
        projects: [
          { name: "Design System", desc: "Create a complete component library in Figma", level: "medium" },
          { name: "SaaS Dashboard UI", desc: "Full analytics dashboard with charts and tables", level: "medium" },
          { name: "UX Case Study", desc: "End-to-end project: research, wireframes, to hi-fi prototype", level: "medium" }
        ]
      },
      {
        level: "advanced",
        label: "Advanced",
        emoji: "⚡",
        duration: "10–18 Months",
        skills: [
          "Advanced Prototyping (ProtoPie/Framer)", "Design Strategy", "Product Thinking for Designers",
          "Service Design & Blueprint", "Design Leadership", "Brand Identity Design",
          "3D in Design (Spline)", "Data-driven Design", "Portfolio Presentation", "Freelancing & Pricing"
        ],
        projects: [
          { name: "Full Product Design", desc: "Complete mobile app from research to dev-ready handoff", level: "hard" },
          { name: "Brand Identity System", desc: "Logo, colors, typography, and brand guidelines", level: "medium" },
          { name: "Design Portfolio", desc: "3-5 polished case studies showing your process", level: "hard" }
        ]
      }
    ],
    resources: [
      { name: "Figma Official Tutorials", icon: "🎨", type: "free", url: "#", desc: "Learn Figma from the official team" },
      { name: "Refactoring UI (Book)", icon: "📗", type: "paid", url: "#", desc: "Design for developers — practical UI tips" },
      { name: "DesignCourse (YT)", icon: "▶️", type: "yt", url: "#", desc: "Gary Simon's UI/UX and Figma tutorials" },
      { name: "AJ&Smart (YT)", icon: "▶️", type: "yt", url: "#", desc: "Design sprints and UX career advice" },
      { name: "Laws of UX", icon: "⚖️", type: "free", url: "#", desc: "Psychology principles applied to UX" },
      { name: "Dribbble", icon: "🏀", type: "free", url: "#", desc: "Design inspiration and portfolio showcase" }
    ]
  }
};

// ===== QUIZ DATA =====
const QUIZ_QUESTIONS = [
  {
    question: "What do you enjoy doing most in your free time?",
    options: [
      { text: "🎨 Creating visual designs, art, or animations", scores: { frontend: 3, uiux: 4, fullstack: 1 } },
      { text: "🔢 Solving puzzles, math problems, or logic challenges", scores: { backend: 3, datascientist: 4, aiengineer: 3 } },
      { text: "📊 Analyzing trends, data, or research findings", scores: { dataanalyst: 4, datascientist: 3, productmanager: 2 } },
      { text: "🛡️ Exploring security flaws and how systems can be protected", scores: { cybersecurity: 5 } }
    ]
  },
  {
    question: "Which type of work excites you the most?",
    options: [
      { text: "💻 Building things people can see and interact with", scores: { frontend: 4, uiux: 3, fullstack: 2 } },
      { text: "⚙️ Building powerful systems and infrastructure behind the scenes", scores: { backend: 4, devops: 3, fullstack: 2 } },
      { text: "🤖 Training AI models and working with machine learning", scores: { datascientist: 4, aiengineer: 5 } },
      { text: "📋 Defining product strategy and working with cross-functional teams", scores: { productmanager: 5 } }
    ]
  },
  {
    question: "What's your relationship with coding?",
    options: [
      { text: "💡 I love coding and want to master multiple languages", scores: { fullstack: 4, backend: 3, aiengineer: 3 } },
      { text: "🎯 I like coding but prefer visual results", scores: { frontend: 4, uiux: 2 } },
      { text: "📈 I use code as a tool for analysis, not as an end goal", scores: { dataanalyst: 4, datascientist: 3 } },
      { text: "🔧 I'm interested in automation, infrastructure, and tools", scores: { devops: 5, cybersecurity: 2 } }
    ]
  },
  {
    question: "Which area do you find most interesting?",
    options: [
      { text: "🌐 Web technologies, browsers, and user interfaces", scores: { frontend: 5, fullstack: 3 } },
      { text: "🗄️ Databases, APIs, and server-side architecture", scores: { backend: 5, fullstack: 3 } },
      { text: "📉 Statistics, algorithms, and predictive modeling", scores: { datascientist: 5, dataanalyst: 3 } },
      { text: "🔐 Hacking, security vulnerabilities, and protecting systems", scores: { cybersecurity: 5 } }
    ]
  },
  {
    question: "What kind of impact do you want to create?",
    options: [
      { text: "✨ Create beautiful products that millions of users love", scores: { uiux: 4, frontend: 3, productmanager: 3 } },
      { text: "🛡️ Protect organizations and people from cyber threats", scores: { cybersecurity: 5 } },
      { text: "🚀 Deploy and scale systems that never go down", scores: { devops: 5, backend: 2 } },
      { text: "🧠 Push the boundaries of AI and machine intelligence", scores: { aiengineer: 5, datascientist: 3 } }
    ]
  }
];

// ===== SALARY DATA =====
const SALARY_DATA = {
  frontend: { emoji: "🎨", career: "Frontend Developer", indiaRange: "₹4L – ₹25L", globalRange: "$60K – $140K", junior: "₹4–6L", mid: "₹8–15L", senior: "₹18–25L", bars: [40, 65, 90] },
  backend: { emoji: "⚙️", career: "Backend Developer", indiaRange: "₹5L – ₹30L", globalRange: "$70K – $160K", junior: "₹5–8L", mid: "₹10–18L", senior: "₹22–30L", bars: [45, 70, 95] },
  fullstack: { emoji: "🌐", career: "Full Stack Developer", indiaRange: "₹6L – ₹35L", globalRange: "$80K – $175K", junior: "₹6–10L", mid: "₹12–20L", senior: "₹25–35L", bars: [50, 75, 98] },
  dataanalyst: { emoji: "📊", career: "Data Analyst", indiaRange: "₹4L – ₹20L", globalRange: "$55K – $120K", junior: "₹4–6L", mid: "₹7–12L", senior: "₹15–20L", bars: [38, 58, 80] },
  datascientist: { emoji: "🤖", career: "Data Scientist", indiaRange: "₹8L – ₹40L", globalRange: "$90K – $190K", junior: "₹8–12L", mid: "₹15–25L", senior: "₹30–40L", bars: [60, 80, 98] },
  aiengineer: { emoji: "🧠", career: "AI Engineer", indiaRange: "₹10L – ₹60L", globalRange: "$120K – $300K", junior: "₹10–15L", mid: "₹20–35L", senior: "₹40–60L+", bars: [70, 90, 100] },
  cybersecurity: { emoji: "🔒", career: "Cyber Security", indiaRange: "₹5L – ₹30L", globalRange: "$75K – $180K", junior: "₹5–8L", mid: "₹10–18L", senior: "₹22–30L", bars: [45, 68, 92] },
  devops: { emoji: "🛠️", career: "DevOps Engineer", indiaRange: "₹7L – ₹40L", globalRange: "$90K – $200K", junior: "₹7–10L", mid: "₹12–22L", senior: "₹28–40L", bars: [55, 78, 98] },
  productmanager: { emoji: "📋", career: "Product Manager", indiaRange: "₹10L – ₹60L", globalRange: "$100K – $250K", junior: "₹10–15L", mid: "₹18–30L", senior: "₹35–60L", bars: [65, 85, 100] },
  uiux: { emoji: "🎭", career: "UI/UX Designer", indiaRange: "₹4L – ₹25L", globalRange: "$60K – $150K", junior: "₹4–6L", mid: "₹8–15L", senior: "₹18–25L", bars: [40, 65, 88] }
};

// ===== COMPARE DATA =====
const COMPARE_DATA = {
  frontend: { demand: 85, salary: 72, difficulty: 55, growth: 80, remote: 90, timeToJob: "6–12 months", keySkill: "React / Vue", companies: "Airbnb, Shopify, Stripe" },
  backend: { demand: 90, salary: 80, difficulty: 65, growth: 85, remote: 88, timeToJob: "8–15 months", keySkill: "Node.js / Django", companies: "Netflix, Uber, Dropbox" },
  fullstack: { demand: 95, salary: 88, difficulty: 70, growth: 90, remote: 92, timeToJob: "12–18 months", keySkill: "React + Node.js", companies: "Startups, agencies, big tech" },
  dataanalyst: { demand: 80, salary: 65, difficulty: 50, growth: 78, remote: 82, timeToJob: "6–12 months", keySkill: "SQL + Tableau", companies: "Google, Walmart, Deloitte" },
  datascientist: { demand: 88, salary: 90, difficulty: 80, growth: 92, remote: 85, timeToJob: "12–20 months", keySkill: "Python + ML", companies: "Tesla, DeepMind, Spotify" },
  aiengineer: { demand: 98, salary: 98, difficulty: 90, growth: 99, remote: 90, timeToJob: "18–30 months", keySkill: "LLMs + MLOps", companies: "OpenAI, Anthropic, Google DeepMind" },
  cybersecurity: { demand: 92, salary: 82, difficulty: 75, growth: 95, remote: 80, timeToJob: "12–18 months", keySkill: "Pentest + SIEM", companies: "CrowdStrike, Palo Alto, Deloitte" },
  devops: { demand: 90, salary: 85, difficulty: 72, growth: 88, remote: 88, timeToJob: "12–20 months", keySkill: "Kubernetes + Terraform", companies: "AWS, GitLab, HashiCorp" },
  productmanager: { demand: 85, salary: 92, difficulty: 60, growth: 85, remote: 85, timeToJob: "12–24 months", keySkill: "Strategy + Data", companies: "FAANG, Startups, consulting" },
  uiux: { demand: 78, salary: 70, difficulty: 50, growth: 80, remote: 88, timeToJob: "8–15 months", keySkill: "Figma + Research", companies: "Apple, Figma, InVision" }
};

// ===== BADGES =====
const BADGES = [
  { id: "first_skill", icon: "⭐", name: "First Step!", desc: "Checked your first skill", threshold: 1 },
  { id: "ten_skills", icon: "🔟", name: "Ten Strong!", desc: "Completed 10 skills", threshold: 10 },
  { id: "first_project", icon: "🏗️", name: "Builder!", desc: "Completed your first project", threshold: "project_1" },
  { id: "half_beginner", icon: "🌱", name: "Seedling", desc: "50% of Beginner skills done", threshold: "stage_beginner_50" },
  { id: "full_beginner", icon: "🌿", name: "Beginner Complete!", desc: "All Beginner skills done", threshold: "stage_beginner_100" },
  { id: "halfway", icon: "🚀", name: "Halfway Hero!", desc: "50% of the whole roadmap done", threshold: "overall_50" },
  { id: "full_roadmap", icon: "🏆", name: "Roadmap Master!", desc: "Completed the entire roadmap!", threshold: "overall_100" }
];

// ===== QUOTES =====
const QUOTES = [
  "\"The secret to getting ahead is getting started.\" – Mark Twain",
  "\"Code is like humor. When you have to explain it, it's bad.\" – Cory House",
  "\"First, solve the problem. Then, write the code.\" – John Johnson",
  "\"Every expert was once a beginner. Start today.\"",
  "\"The best time to plant a tree was 20 years ago. The second best time is now.\"",
  "\"Your future self is depending on what you do today.\"",
  "\"Don't watch the clock; do what it does. Keep going.\" – Sam Levenson"
];

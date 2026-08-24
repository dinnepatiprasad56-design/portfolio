export interface Project {
  id: string;
  title: string;
  category: "AI / ML" | "Android" | "Cloud" | "Web" | "Security";
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface CaseStudyScreenshot {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface CaseStudyData {
  title: string;
  subtitle: string;
  overview: string;
  motivation: string;
  problemStatement: string;
  screenshots: CaseStudyScreenshot[];
  measurableOutcomes: { title: string; detail: string; icon: string }[];
  architectureDiagram: {
    nodes: { id: string; label: string; icon: string; description: string; tech: string }[];
  };
  workflow: string[];
  techStack: { category: string; items: string[] }[];
  aiPipeline: {
    step: number;
    title: string;
    description: string;
    details: string;
  }[];
  challenges: { problem: string; solution: string }[];
  lessonsLearned: string[];
  results: { metric: string; value: string; detail: string }[];
  futureScope: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; iconName?: string; highlighted?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Full-Time" | "Academic";
  description: string;
  highlights: string[];
  skills: string[];
  projects: { name: string; description: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: "Database" | "Programming" | "Cybersecurity" | "AI & Cloud";
  skills: string[];
  image: string;
  verifyUrl: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DINNEPATI SINDHU PRASAD",
    firstName: "Sindhu Prasad",
    lastName: "Dinnepati",
    title: "Software Engineer | AI & Cloud Specialist",
    roles: [
      "Software Engineer",
      "Android Developer",
      "AI & Cloud Engineer",
      "Medical AI Specialist",
    ],
    subtitle: "Building AI-powered healthcare software with Android, Cloud, and Machine Learning to solve real-world clinical problems.",
    bio: "Dedicated B.E Computer Science student with an 8.96 CGPA, specializing in AI-powered healthcare applications, 3D medical vision (MONAI/PyTorch), Android development, and scalable cloud microservices (FastAPI/Cloud Run/Firebase).",
    location: "Chennai, India",
    phone: "+91 7285931308",
    email: "dinnipatiprasad@gmail.com",
    cgpa: "8.96",
    socialLinks: {
      github: "https://github.com/prasad1271",
      githubRepo: "https://github.com/dinnepatiprasad56-design/portfolio",
      livePortfolio: "https://dinnepatiprasad56-design.github.io/portfolio/",
      linkedin: "https://linkedin.com/in/siddhu1234567890",
      leetcode: "https://leetcode.com/u/D_Sidhu_prasad/",
      email: "mailto:dinnipatiprasad@gmail.com",
    },
    quickStats: [
      { label: "Academic Standout", value: "8.96 CGPA", detail: "SIMATS Engineering" },
      { label: "Core Domains", value: "AI & Cloud", detail: "Android & Full Stack" },
      { label: "Domain Specialty", value: "Medical AI", detail: "3D Segmentation & MONAI" },
      { label: "Industry Credentials", value: "6 Certifications", detail: "Oracle, Cisco, Forage" },
    ],
  },

  skills: [
    {
      category: "Programming",
      icon: "Code2",
      skills: [
        { name: "Python", level: 95, highlighted: true },
        { name: "Java", level: 90, highlighted: true },
        { name: "C++", level: 85 },
        { name: "SQL", level: 88, highlighted: true },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "C", level: 80 },
      ],
    },
    {
      category: "Android & Mobile",
      icon: "Smartphone",
      skills: [
        { name: "Kotlin", level: 88, highlighted: true },
        { name: "Jetpack Compose", level: 85, highlighted: true },
        { name: "Flutter", level: 80 },
        { name: "Material Design", level: 90 },
      ],
    },
    {
      category: "Backend Engineering",
      icon: "Server",
      skills: [
        { name: "FastAPI", level: 90, highlighted: true },
        { name: "REST APIs", level: 92 },
        { name: "Flask", level: 85 },
        { name: "Firebase Auth & Firestore", level: 88, highlighted: true },
      ],
    },
    {
      category: "Cloud Infrastructure",
      icon: "Cloud",
      skills: [
        { name: "AWS S3 & IAM", level: 88, highlighted: true },
        { name: "AWS Lex", level: 85 },
        { name: "Cloud Run", level: 85, highlighted: true },
        { name: "Firebase Storage", level: 90 },
      ],
    },
    {
      category: "AI & Medical Vision",
      icon: "BrainCircuit",
      skills: [
        { name: "PyTorch", level: 88, highlighted: true },
        { name: "MONAI", level: 85, highlighted: true },
        { name: "TensorFlow", level: 82 },
        { name: "OpenCV", level: 88, highlighted: true },
        { name: "YOLO", level: 85 },
        { name: "NLTK", level: 80 },
      ],
    },
    {
      category: "Dev Tools & OS",
      icon: "Terminal",
      skills: [
        { name: "Git", level: 92, highlighted: true },
        { name: "GitHub", level: 92, highlighted: true },
        { name: "Docker", level: 80 },
        { name: "Linux / Windows", level: 90 },
        { name: "VS Code", level: 95 },
      ],
    },
  ] as SkillCategory[],

  featuredProject: {
    id: "inferior-alveolar-nerve-3d",
    title: "PDD: Research-Grade Medical Image Processing & 3D Segmentation Platform",
    badge: "⭐ HERO FLAGSHIP PROJECT ⭐",
    tagline: "High-grade, traceable, and reproducible full-stack medical file processing & PyTorch U-Net segmentation pipeline",
    description:
      "A production-ready research-level medical image processing platform featuring a Kotlin Android client with Firebase authentication, a FastAPI microservice with PyTorch U-Net neural network segmentation, deterministic SHA-256 data lineage reporting, and serverless Cloud Run containerization.",
    technologies: ["Android (Kotlin)", "Jetpack Compose", "FastAPI", "PyTorch U-Net", "Firebase Auth", "Firestore Realtime", "Docker", "GCP Cloud Run", "NiBabel"],
    githubUrl: "https://github.com/prasad1271",
    liveUrl: "https://github.com/prasad1271",
    image: "/images/pdd/pdd_results.png",
    caseStudy: {
      title: "PDD: Research-Grade Medical File Processor & 3D Segmentation Platform",
      subtitle: "Deterministic Data Lineage, PyTorch U-Net Neural Segmentation & Realtime Firestore Sync in Medical Vision",
      overview:
        "PDD (Inferior Alveolar Nerve & Periodontal Disease Detection) is a high-grade, traceable, and reproducible full-stack medical image processing platform. It integrates a native Kotlin Android app with a FastAPI microservice backend powered by PyTorch U-Net deep segmentation networks. Designed to automatically localize critical anatomical structures from volumetric CBCT/NIfTI scans to prevent surgical paresthesia and structural nerve damage.",
      motivation:
        "Pre-operative volumetric DICOM/NIfTI tracing is traditionally slow, subjective, and difficult to reproduce across different clinical workstations. PDD establishes a deterministic execution environment (`backend/data/jobs/{job_id}/`) generated for every processed scan, outputting SHA-256 input integrity hashes, volumetric measurements (`volume_ml`), dice accuracy metrics (`segmentation_score`), and inference execution telemetry (`report.json`).",
      problemStatement:
        "Radiographic noise, osteoporotic bone density variations, and client-side memory limits make high-resolution 3D volumetric segmentation challenging on mobile devices. Standard approaches risk out-of-memory crashes or lack auditability required for clinical AI compliance.",
      
      screenshots: [
        {
          id: "login",
          title: "Android Clinician Login Screen",
          category: "Authentication",
          image: "/images/pdd/pdd_login.png",
          caption: "FirebaseAuthInterceptor token injection injecting Bearer JWT headers with biometric authentication and 5s token timeout protection.",
        },
        {
          id: "dashboard",
          title: "Clinician Patient Dashboard",
          category: "Realtime Telemetry",
          image: "/images/pdd/pdd_dashboard.png",
          caption: "Centralized dashboard tracking patient CBCT uploads, active GPU inference jobs, risk badges (High Risk <2mm), and telemetry.",
        },
        {
          id: "upload",
          title: "Volumetric CBCT / NIfTI Uploader",
          category: "Data Ingestion",
          image: "/images/pdd/pdd_upload.png",
          caption: "High-speed upload manager handling large multi-slice DICOM/NIfTI archives with automatic Hounsfield Unit validation and exponential backoff retry.",
        },
        {
          id: "processing",
          title: "Cloud Run + PyTorch U-Net Processing Screen",
          category: "AI Engine",
          image: "/images/pdd/pdd_processing.png",
          caption: "Real-time asynchronous U-Net tensor inference screen with patch slicing, GPU/CPU metrics, and live axial slice progress tracking.",
        },
        {
          id: "results",
          title: "3D Segmentation Results & Reproducibility Report",
          category: "3D Visualization",
          image: "/images/pdd/pdd_results.png",
          caption: "Interactive 3D mandibular jaw rendering highlighting the segmented nerve canal, color-coded safety proximity boundaries, and report.json metric output.",
        },
        {
          id: "architecture",
          title: "End-to-End System Architecture",
          category: "System Design",
          image: "/images/pdd/pdd_architecture.png",
          caption: "Scalable cloud pipeline connecting Android App → Firebase Auth & Storage → Cloud Run FastAPI → PyTorch U-Net Model → Firestore Realtime → Android Results.",
        },
      ],

      measurableOutcomes: [
        {
          title: "Supports Large CBCT Uploads",
          detail: "Streams multi-slice DICOM & NIfTI volumetric datasets with 50MB-500MB chunked handling and memory-safe bitmap recycling.",
          icon: "HardDrive",
        },
        {
          title: "Secure Cloud-Based Processing",
          detail: "Zero-Trust session encryption using FirebaseAuthInterceptor JWT injection, bearer tokens, and Firestore security rules.",
          icon: "Lock",
        },
        {
          title: "Asynchronous Job Tracking",
          detail: "Real-time status updates via FirestoreJobRepository listeners across 5 states (UPLOADING, QUEUED, PROCESSING, COMPLETED, FAILED).",
          icon: "Activity",
        },
        {
          title: "Deterministic Research Lineage",
          detail: "Generates reproducible report.json with SHA-256 input hashes, model versioning, inference latency, and commit SHA tracking.",
          icon: "Zap",
        },
      ],

      architectureDiagram: {
        nodes: [
          { id: "1", label: "Android Client App", icon: "Smartphone", description: "Kotlin Android app with Jetpack Compose UI, Timber logging, and Retrofit2", tech: "Kotlin / Coroutines" },
          { id: "2", label: "Firebase Auth", icon: "Lock", description: "FirebaseAuthInterceptor token injection with 5s timeout & auto refresh", tech: "OAuth 2.0 / JWT" },
          { id: "3", label: "Firebase Storage", icon: "HardDrive", description: "Encrypted bucket for raw NIfTI (.nii.gz) & DICOM medical uploads", tech: "Cloud Storage Bucket" },
          { id: "4", label: "Cloud Run Container", icon: "Cloud", description: "Dockerized serverless microservice executing on GCP Cloud Run", tech: "Docker / FastAPI" },
          { id: "5", label: "FastAPI Backend", icon: "Server", description: "Async Python REST backend with lifecycle context manager & local DB fallback", tech: "Python 3.11 / Uvicorn" },
          { id: "6", label: "PyTorch U-Net AI", icon: "Brain", description: "Lightweight U-Net neural network with GPU auto-detection & torch.no_grad()", tech: "PyTorch 2.3 / CUDA" },
          { id: "7", label: "Data Lineage Engine", icon: "Layers", description: "Generates deterministic report.json with SHA-256 hash & volume_ml metrics", tech: "NiBabel / SimpleITK" },
          { id: "8", label: "Firestore Realtime", icon: "HardDrive", description: "Stores job status states with cost-optimized update() operations", tech: "Firestore Realtime DB" },
          { id: "9", label: "Android Results Viewer", icon: "CheckCircle", description: "Renders 3D nerve mesh, volume ML metrics, and proximity risk badges", tech: "SceneView 3D / OpenGL" },
        ],
      },

      workflow: [
        "Clinician authenticates in Android app via Firebase Auth (FirebaseAuthInterceptor injects Bearer JWT).",
        "Uploads medical volumetric scan (.nii, .nii.gz, DICOM) with memory-safe stream processing.",
        "Upload registers in Firebase Storage and creates a job record in Firestore (`ProcessingStatus.UPLOADING`).",
        "FastAPI backend on Cloud Run receives request, initializing deterministic job folder (`backend/data/jobs/{job_id}/`).",
        "PyTorch U-Net model performs tensor inference under `torch.no_grad()` with GPU auto-detection (CPU fallback).",
        "Backend generates `output/{job_id}_result.nii.gz` and `report.json` containing SHA-256 hash, volume_ml, and segmentation score.",
        "Firestore listener in Android app (`FirestoreJobRepository`) receives `COMPLETED` state update.",
        "Mobile client displays 3D rendered nerve segmentation, risk boundary alert (<2mm), and validated metric report.",
      ],

      techStack: [
        { category: "Deep Learning Engine", items: ["PyTorch 2.3", "U-Net Architecture", "CUDA Acceleration", "torch.no_grad() Inference", "Lazy Model Loading"] },
        { category: "Cloud & Microservices", items: ["Google Cloud Run", "FastAPI Async", "Docker Containers", "Firebase Storage & Firestore", "Uvicorn"] },
        { category: "Android Client App", items: ["Kotlin", "Jetpack Compose", "Retrofit2 & OkHttp", "Timber Logging", "Exponential Backoff Retry"] },
        { category: "Data Lineage & Vision", items: ["NiBabel 5.2", "SHA-256 Hashing", "SimpleITK", "OpenCV", "NIfTI / DICOM Specs"] },
      ],

      aiPipeline: [
        { step: 1, title: "Volumetric Scan Ingestion", description: "Ingestion of NIfTI (.nii.gz) or DICOM volumetric archives.", details: "Calculates SHA-256 input hash and verifies voxel grid spatial resolution." },
        { step: 2, title: "Spatial & Intensity Normalization", description: "Pre-processing volumetric intensity values.", details: "Applies Hounsfield Unit windowing and 1.0mm isotropic resampling via NiBabel." },
        { step: 3, title: "PyTorch U-Net Inference", description: "Executing lightweight U-Net 3D segmentation.", details: "Evaluates tensor under torch.no_grad() with GPU acceleration and CPU fallback." },
        { step: 4, title: "Connected Component Post-Processing", description: "Graph connectedness and artifact filtering.", details: "Morphological closing and largest connected component extraction to remove false positive noise." },
        { step: 5, title: "Data Lineage Report Generation", description: "Building deterministic audit trail.", details: "Constructs report.json detailing volume_ml (130.88ml), segmentation_score (0.89), and commit SHA." },
        { step: 6, title: "Realtime Mobile Delivery", description: "Firestore snapshot stream update.", details: "Pushes COMPLETED status to Android app via FirestoreJobRepository listeners for instant mobile rendering." },
      ],

      challenges: [
        {
          problem: "Handling transient mobile network disconnects during heavy volumetric DICOM uploads.",
          solution: "Implemented an exponential backoff retry interceptor in NetworkModule.kt (1s → 2s → 4s, capped at 8s) with 60-second timeouts.",
        },
        {
          problem: "Preventing listener memory leaks and redundant network polling on mobile devices.",
          solution: "Built FirestoreJobRepository using Kotlin Flow awaitClose() handlers and deduplicated listeners in ResultViewModel.kt.",
        },
      ],

      lessonsLearned: [
        "Inference under torch.no_grad() combined with lifespan context managers in FastAPI prevents GPU VRAM leaks during high-throughput workloads.",
        "Structuring backend persistence with local JSON fallback (local_jobs_db.json) enables zero-dependency offline research testing.",
        "Injecting Firebase ID tokens at the OkHttp interceptor level simplifies security while keeping ViewModels clean and decoupled.",
      ],

      results: [
        { metric: "Dice Segmentation Score", value: "0.89", detail: "High accuracy multi-planar U-Net localization" },
        { metric: "Inference Latency", value: "2.05s", detail: "2050ms execution time on serverless backend" },
        { metric: "Safety Boundary Accuracy", value: "98.2%", detail: "Surgical safety boundary zone precision" },
      ],

      futureScope: [
        "Integration of mixed-reality (AR) overlays for head-mounted displays during surgical procedures.",
        "Multi-nerve segmentation including the Mental Nerve and Anterior Loop branches.",
        "Federated learning deployment across hospital networks for HIPAA-compliant multi-center model training.",
      ],
    } as CaseStudyData,
  },

  otherProjects: [
    {
      id: "ai-fire-detection",
      title: "AI-Based Real-Time Fire Detection System",
      category: "AI / ML" as const,
      tagline: "Computer Vision Emergency Alerting System",
      description: "Real-time fire and flame hazard identification built with custom-trained YOLO object detection and OpenCV, linked to a responsive Flask live telemetry dashboard with instant SMS/Email notifications.",
      technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/prasad1271",
      image: "/images/projects/fire_detection.png",
      metrics: [
        { label: "Detection Speed", value: "30+ FPS" },
        { label: "Accuracy", value: "96.5%" },
      ],
    },
    {
      id: "cardiac-attack-prediction",
      title: "Healthcare Cardiac Risk & Attack Predictor",
      category: "AI / ML" as const,
      tagline: "Predictive Analytics Machine Learning Pipeline",
      description: "Developed during Corizo AI Internship. Engineered a supervised ML classification pipeline using Random Forest, XGBoost, and Logistic Regression to assess cardiovascular risk based on multi-variate clinical parameters.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "Seaborn", "Flask", "Classification ML"],
      githubUrl: "https://github.com/prasad1271",
      image: "/images/projects/cardiac_risk.png",
      metrics: [
        { label: "Model Accuracy", value: "94.2%" },
        { label: "ROC-AUC Score", value: "0.96" },
      ],
    },
    {
      id: "aws-lex-s3-cloud",
      title: "AWS Lex Chatbot & S3 Cloud Infrastructure",
      category: "Cloud" as const,
      tagline: "Enterprise Cloud Automation & Storage Framework",
      description: "Built during Corizo Cloud Internship. Created an automated conversational agent using AWS Lex for automated user query resolution, coupled with IAM-secured AWS S3 bucket architecture for enterprise media storage.",
      technologies: ["AWS Lex", "AWS S3", "IAM Policies", "AWS CloudWatch", "Python", "JSON"],
      githubUrl: "https://github.com/prasad1271",
      image: "/images/projects/aws_cloud.png",
      metrics: [
        { label: "Service Uptime", value: "99.99%" },
        { label: "IAM Security", value: "Zero-Trust" },
      ],
    },
    {
      id: "secure-otp-auth",
      title: "Secure Cryptographic OTP Authentication Framework",
      category: "Security" as const,
      tagline: "Zero-Trust Time-Based One-Time Password System",
      description: "Designed a robust, resilient authentication module implementing HMAC-based TOTP algorithms, salt hashing, anti-brute-force rate limiting, and encrypted state storage in Python.",
      technologies: ["Python", "Cryptography", "HMAC", "REST API", "SQL", "Security Protocols"],
      githubUrl: "https://github.com/prasad1271",
      image: "/images/projects/secure_otp.png",
      metrics: [
        { label: "Crypto Algorithm", value: "HMAC-SHA256" },
        { label: "Latency", value: "<15ms" },
      ],
    },
    {
      id: "sentiment-analysis-app",
      title: "NLP Sentiment Analysis Web Application",
      category: "AI / ML" as const,
      tagline: "Text Opinion Mining & NLP Classification Web App",
      description: "Natural Language Processing classifier utilizing NLTK and Naive Bayes / TF-IDF vectors to perform real-time sentiment extraction, emotion breakdown, and trend analysis on textual input.",
      technologies: ["Python", "NLTK", "Scikit-Learn", "Flask", "HTML5/CSS3", "JavaScript"],
      githubUrl: "https://github.com/prasad1271",
      image: "/images/projects/sentiment_analysis.png",
      metrics: [
        { label: "NLP Precision", value: "91.8%" },
        { label: "Analysis Speed", value: "Instant" },
      ],
    },
    {
      id: "spotify-data-analytics",
      title: "Spotify Listening Intelligence & Data Visualization",
      category: "Web" as const,
      tagline: "Big Data Audio Analytics & User Behavioral Mining",
      description: "Executed exploratory data analysis (EDA) on vast Spotify audio feature datasets to discover popularity correlates, tempo distributions, acoustic trends, and listener engagement patterns.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      githubUrl: "https://github.com/prasad1271",
      image: "/images/projects/spotify_analytics.png",
      metrics: [
        { label: "Data Records", value: "100k+ Tracks" },
        { label: "Insights Generated", value: "15+ Metrics" },
      ],
    },
  ] as Project[],

  experience: [
    {
      id: "corizo-cloud-intern",
      role: "Cloud Computing Intern",
      company: "Corizo EduTech Private Limited",
      location: "Remote / India",
      period: "Nov 2025 – Jan 2026",
      type: "Internship" as const,
      description: "Engineered scalable cloud services and automated conversational interfaces on AWS infrastructure.",
      highlights: [
        "AWS Lex Chatbot (Major Project): Developed conversational bot for automated user responses and seamless flow execution.",
        "AWS S3 Cloud Bucket (Minor Project): Configured secure multi-tier S3 storage with granular IAM bucket policies and encryption.",
        "Mastered cloud security paradigms, IAM roles, serverless deployments, and resource monitoring.",
      ],
      skills: ["AWS Lex", "AWS S3", "IAM", "Cloud Architecture", "Python", "JSON Protocols"],
      projects: [
        { name: "AWS Lex Conversational Bot", description: "Automated user workflow intent recognition and response routing." },
        { name: "Secure S3 Storage Architecture", description: "Enterprise bucket deployment with IAM policy enforcement." },
      ],
    },
    {
      id: "corizo-ai-intern",
      role: "Artificial Intelligence Intern",
      company: "Corizo EduTech Private Limited",
      location: "Remote / India",
      period: "Aug 2025 – Nov 2025",
      type: "Internship" as const,
      description: "Developed machine learning pipelines for predictive healthcare assessment and data analysis.",
      highlights: [
        "Cardiac Attack Prediction (Major Project): Built and evaluated high-accuracy ML classification models to assess cardiac risk.",
        "Spotify Analytics (Minor Project): Conducted deep data exploratory analysis visualizing audio feature correlations.",
        "Optimized feature engineering, hyperparameter tuning, and cross-validation techniques for tabular datasets.",
      ],
      skills: ["Python", "Machine Learning", "Scikit-Learn", "Data Analysis", "Pandas", "Matplotlib"],
      projects: [
        { name: "Cardiac Risk Predictor", description: "Healthcare prediction system with 94.2% classification accuracy." },
        { name: "Spotify Data Mining", description: "Audio feature distribution visualization and audio trend analysis." },
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Engineering (B.E) – Computer Science and Engineering",
      institution: "SIMATS Engineering (Saveetha University)",
      location: "Chennai, India",
      period: "2023 – 2027",
      score: "8.96",
      scoreType: "CGPA" as const,
      highlights: [
        "Top tier academic performance with CGPA of 8.96 / 10.",
        "Specialized coursework in AI & ML, Mobile Computing, Data Structures & Algorithms, Computer Networks, and Cloud Infrastructure.",
        "Active member of departmental technical coding clubs and innovation project showcases.",
      ],
    },
    {
      degree: "Intermediate (Class XII) – MPC Stream",
      institution: "SR Jr College",
      location: "Tirupati, India",
      period: "2021 – 2023",
      score: "90.1%",
      scoreType: "Percentage" as const,
      highlights: [
        "Achieved 90.1% aggregate with distinction in Mathematics, Physics, and Chemistry.",
        "Built early foundation in algorithmic logic and analytical problem solving.",
      ],
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "Vasishta High School",
      location: "TSundupalli, India",
      period: "2020 – 2021",
      score: "98.6%",
      scoreType: "Percentage" as const,
      highlights: [
        "Graduated with stellar 98.6% academic distinction.",
        "School topper with excellence in Science and Mathematics.",
      ],
    },
  ] as EducationItem[],

  certifications: [
    {
      id: "oracle-sql",
      title: "Oracle Database SQL Certified Specialist",
      issuer: "Oracle Corporation",
      date: "Dec 2024",
      credentialId: "ORACLE-SQL-2024-SP",
      category: "Database" as const,
      skills: ["Relational Databases", "SQL Queries", "Data Modeling", "Database Optimization"],
      image: "/images/certifications/oracle_sql.png",
      verifyUrl: "https://oracle.com",
    },
    {
      id: "oracle-java",
      title: "Java Programming Certification",
      issuer: "Oracle Academy",
      date: "Dec 2024",
      credentialId: "ORACLE-JAVA-PROG-2024",
      category: "Programming" as const,
      skills: ["Java OOP", "Data Structures", "Exception Handling", "JVM Memory"],
      image: "/images/certifications/oracle_java.png",
      verifyUrl: "https://academy.oracle.com",
    },
    {
      id: "cisco-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "09 Oct 2025",
      credentialId: "CISCO-SEC-98210",
      category: "Cybersecurity" as const,
      skills: ["Network Security", "Threat Landscape", "Cryptography", "Security Best Practices"],
      image: "/images/certifications/cisco_cybersecurity.png",
      verifyUrl: "https://netacad.com",
    },
    {
      id: "forage-tata-cyber",
      title: "Tata Cybersecurity Analyst Simulation",
      issuer: "Forage",
      date: "17 Dec 2024",
      credentialId: "FORAGE-TATA-CYBER-88",
      category: "Cybersecurity" as const,
      skills: ["Security Operations", "Vulnerability Assessment", "Identity Management"],
      image: "/images/certifications/forage_cyber.png",
      verifyUrl: "https://theforage.com",
    },
    {
      id: "hackerrank-java",
      title: "Java (Basic) Certificate",
      issuer: "HackerRank",
      date: "16 Mar 2026",
      credentialId: "HR-JAVA-BASIC-2026",
      category: "Programming" as const,
      skills: ["Java Syntax", "Object-Oriented Programming", "Control Flow"],
      image: "/images/certifications/hackerrank_java.png",
      verifyUrl: "https://hackerrank.com/certificates",
    },
    {
      id: "corizo-ai-cloud",
      title: "AI & Cloud Computing Specialist",
      issuer: "Corizo EduTech",
      date: "Jan 2026",
      credentialId: "CORIZO-AI-CLOUD-2026",
      category: "AI & Cloud" as const,
      skills: ["Machine Learning", "AWS Cloud Services", "AWS Lex & S3", "Flask Pipelines"],
      image: "/images/certifications/corizo_ai_cloud.png",
      verifyUrl: "https://corizo.in",
    },
  ] as CertificationItem[],
};

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
  driveUrl?: string;
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
  skills: { name: string; level?: number; iconName?: string; highlighted?: boolean }[];
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
  linkedinUrl?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DINNEPATI SINDHU PRASAD",
    firstName: "Sindhu Prasad",
    lastName: "Dinnepati",
    title: "Software Engineer | Cloud Engineer",
    roles: [
      "Software Engineer",
      "Android Developer",
      "Cloud Engineer",
      "Interested in Cyber & Networking Technologies",
    ],
    subtitle: "Software Engineer focused on Cloud engineering and Android development, with a keen interest in learning Cybersecurity and Networking technologies.",
    bio: "Dedicated B.E Computer Science student with an 8.96 CGPA, specializing in Cloud Engineering (FastAPI/Cloud Run/Docker), Android development (Kotlin/Jetpack Compose), and actively expanding into Cybersecurity and Computer Networking technologies.",
    location: "Chennai, India",
    phone: "+91 7285931308",
    email: "dinnipatiprasad@gmail.com",
    cgpa: "8.96",
    socialLinks: {
      github: "https://github.com/prasad1271",
      githubRepo: "https://github.com/dinnepatiprasad56-design/portfolio",
      livePortfolio: "https://dinnepatiprasad56-design.github.io/portfolio/",
      linkedin: "https://www.linkedin.com/in/siddhu1234567890",
      leetcode: "https://leetcode.com/u/D_Sidhu_prasad/",
      email: "mailto:dinnipatiprasad@gmail.com",
      whatsapp: "https://api.whatsapp.com/send?phone=917285931308&text=Hi%20Sindhu%20Prasad,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
      gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=dinnipatiprasad@gmail.com",
      resumeUrl: "https://drive.google.com/file/d/16voYeC3-XknxWEIf0luRUjlw9ennVrn9/view?usp=sharing",
      resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=16voYeC3-XknxWEIf0luRUjlw9ennVrn9",
      resumePreviewUrl: "https://drive.google.com/file/d/16voYeC3-XknxWEIf0luRUjlw9ennVrn9/preview",
    },
    quickStats: [
      { label: "Academic Standout", value: "8.96 CGPA", detail: "SIMATS Engineering" },
      { label: "Core Domain", value: "Cloud Engineer", detail: "Docker, Cloud Run & FastAPI" },
      { label: "Active Learning", value: "Cyber & Networking", detail: "Security, Routing & Protocols" },
      { label: "Industry Credentials", value: "6 Certifications", detail: "Oracle, Cisco, Forage" },
    ],
  },

  skills: [
    {
      category: "Programming",
      icon: "Code2",
      skills: [
        { name: "Python", highlighted: true },
        { name: "Java", highlighted: true },
        { name: "C++" },
        { name: "SQL", highlighted: true },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "C" },
      ],
    },
    {
      category: "Android & Mobile",
      icon: "Smartphone",
      skills: [
        { name: "Kotlin", highlighted: true },
        { name: "Jetpack Compose", highlighted: true },
        { name: "Flutter" },
        { name: "Material Design" },
      ],
    },
    {
      category: "Backend Engineering",
      icon: "Server",
      skills: [
        { name: "FastAPI", highlighted: true },
        { name: "REST APIs" },
        { name: "Flask" },
        { name: "Firebase Auth & Firestore", highlighted: true },
      ],
    },
    {
      category: "Cloud Infrastructure",
      icon: "Cloud",
      skills: [
        { name: "AWS S3 & IAM", highlighted: true },
        { name: "AWS Lex" },
        { name: "Cloud Run", highlighted: true },
        { name: "Firebase Storage" },
      ],
    },
    {
      category: "AI & Medical Vision",
      icon: "BrainCircuit",
      skills: [
        { name: "PyTorch", highlighted: true },
        { name: "MONAI", highlighted: true },
        { name: "TensorFlow" },
        { name: "OpenCV", highlighted: true },
        { name: "YOLO" },
        { name: "NLTK" },
      ],
    },
    {
      category: "Dev Tools & OS",
      icon: "Terminal",
      skills: [
        { name: "Git", highlighted: true },
        { name: "GitHub", highlighted: true },
        { name: "Docker" },
        { name: "Linux / Windows" },
        { name: "VS Code" },
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
    githubUrl: "https://github.com/dinnepatiprasad56-design/IAN_DETECTION_STUDIO",
    liveUrl: "https://github.com/dinnepatiprasad56-design/IAN_DETECTION_STUDIO",
    image: "https://lh3.googleusercontent.com/d/1aOpHZ7n0tDf74LcMIG-tijU0-4Y9idr1",
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
          id: "dashboard",
          title: "Clinician Command Center & Case Overview",
          category: "Dashboard",
          image: "https://lh3.googleusercontent.com/d/1Hjr9u403hFBoTb23x_aipL3hWtj3l3xy",
          driveUrl: "https://drive.google.com/file/d/1Hjr9u403hFBoTb23x_aipL3hWtj3l3xy/view?usp=drive_link",
          caption: "Centralized workspace monitoring patient CBCT scans, AI inference throughput, urgent risk flags, and clinical queue.",
        },
        {
          id: "segmentation-1",
          title: "3D Inferior Alveolar Nerve Neural Segmentation",
          category: "AI Segmentation",
          image: "https://lh3.googleusercontent.com/d/1aOpHZ7n0tDf74LcMIG-tijU0-4Y9idr1",
          driveUrl: "https://drive.google.com/file/d/1aOpHZ7n0tDf74LcMIG-tijU0-4Y9idr1/view?usp=sharing",
          caption: "High-precision volumetric segmentation isolating the mandibular nerve canal with multi-planar orthogonal slice correlation.",
        },
        {
          id: "segmentation-2",
          title: "Multi-Angle 3D Volumetric Mesh & Proximity Mapping",
          category: "3D Visualization",
          image: "https://lh3.googleusercontent.com/d/1IqP4b4pCJhoXiraoFLfKlpSbzxlc_nQ2",
          driveUrl: "https://drive.google.com/file/d/1IqP4b4pCJhoXiraoFLfKlpSbzxlc_nQ2/view?usp=sharing",
          caption: "Real-time 3D rendered jaw mesh with color-coded safety margins (<2mm warning) for pre-surgical implant risk mitigation.",
        },
        {
          id: "ai-processing",
          title: "PyTorch U-Net Real-Time Tensor Inference",
          category: "AI Engine",
          image: "https://lh3.googleusercontent.com/d/1P12xizMUspYiLVY2S4Y9FnbAV7aF-rTy",
          driveUrl: "https://drive.google.com/file/d/1P12xizMUspYiLVY2S4Y9FnbAV7aF-rTy/view?usp=sharing",
          caption: "Live tensor execution screen displaying batch slice inference, CUDA memory consumption, and progress telemetry.",
        },
        {
          id: "analytics",
          title: "Volumetric Metrics & Dice Coefficient Analytics",
          category: "Analytics",
          image: "https://lh3.googleusercontent.com/d/12YMt2-DA6zts6KCiWhnD-scn9kJkwSQN",
          driveUrl: "https://drive.google.com/file/d/12YMt2-DA6zts6KCiWhnD-scn9kJkwSQN/view?usp=sharing",
          caption: "Quantitative clinical telemetry tracking Dice similarity coefficients (0.89+), voxel volume measurements (130.88ml), and latency.",
        },
        {
          id: "patient-record",
          title: "Patient Diagnostic Record & CBCT Lineage",
          category: "Patient Management",
          image: "https://lh3.googleusercontent.com/d/1k05m_vzTYOBIeRNADzeJlHKCITrVN63Z",
          driveUrl: "https://drive.google.com/file/d/1k05m_vzTYOBIeRNADzeJlHKCITrVN63Z/view?usp=sharing",
          caption: "Comprehensive patient profile logging DICOM/NIfTI metadata, scan date, clinician notes, and diagnostic history.",
        },
        {
          id: "task-processing",
          title: "Asynchronous Background Inference Queue",
          category: "Cloud Pipeline",
          image: "https://lh3.googleusercontent.com/d/1IRI3rFjSayBD6orIzR6m_DanQxmqF8h9",
          driveUrl: "https://drive.google.com/file/d/1IRI3rFjSayBD6orIzR6m_DanQxmqF8h9/view?usp=sharing",
          caption: "Distributed task runner tracking background jobs across UPLOADING, QUEUED, PROCESSING, and COMPLETED states.",
        },
        {
          id: "history",
          title: "Audit Trail & Reproducible SHA-256 Logs",
          category: "Audit & Lineage",
          image: "https://lh3.googleusercontent.com/d/1p5cEZj8R4y1A1tN_qKeTyKKc-9DUjXdQ",
          driveUrl: "https://drive.google.com/file/d/1p5cEZj8R4y1A1tN_qKeTyKKc-9DUjXdQ/view?usp=sharing",
          caption: "Immutable clinical audit log tracking deterministic SHA-256 data hashes, model commit versions, and execution records.",
        },
        {
          id: "settings",
          title: "Inference Engine & Model Configuration",
          category: "System Config",
          image: "https://lh3.googleusercontent.com/d/1M5iDEfgL8cEZcdXuTzaYtxarSBpLlf8n",
          driveUrl: "https://drive.google.com/file/d/1M5iDEfgL8cEZcdXuTzaYtxarSBpLlf8n/view?usp=sharing",
          caption: "Clinician control panel configuring GPU acceleration thresholds, Hounsfield Unit windowing, and FastAPI Cloud Run endpoints.",
        },
        {
          id: "profiles",
          title: "Clinician Profile & Security Credentials",
          category: "Authentication",
          image: "https://lh3.googleusercontent.com/d/19eADJ0uVX4FEjvgvQ6DXvvg3K0Bh6Itt",
          driveUrl: "https://drive.google.com/file/d/19eADJ0uVX4FEjvgvQ6DXvvg3K0Bh6Itt/view?usp=sharing",
          caption: "Role-based access control interface with biometric session authentication, JWT token expiry, and user credential management.",
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
      tagline: "FireGuard AI • Computer Vision Emergency Alert Platform",
      description: "Production-grade computer vision system engineered with custom-trained YOLOv8 and OpenCV for real-time fire and smoke hazard detection (<30ms latency). Features browser camera streaming, video/image upload analysis, automated instant Telegram Bot (@fire_guard_alert_bot) & Gmail SMTP emergency notifications, intelligent cooldown timers, and a glassmorphic React + Vite telemetry dashboard backed by Flask & SQLite.",
      technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "React", "Vite", "Tailwind CSS", "Telegram Bot API", "SQLite"],
      githubUrl: "https://github.com/prasad1271/AI-Based-Real-Time-Fire-Detection-System/tree/main/fire-detection-system",
      image: "/images/projects/fire_detection.png",
      metrics: [
        { label: "Core Vision", value: "Custom YOLOv8 + OpenCV" },
        { label: "Incident Alerting", value: "Telegram & Gmail SMTP" },
      ],
    },
    {
      id: "cardiac-attack-prediction",
      title: "Healthcare Cardiac Risk & Attack Predictor",
      category: "AI / ML" as const,
      tagline: "Full-Stack Clinical AI & Cardiovascular Risk Engine",
      description: "Full-stack clinical AI platform featuring a FastAPI REST API and React 19 + TypeScript frontend. Benchmarked with Logistic Regression, Random Forest, and XGBoost on 13 clinical biomarkers from the UCI Cleveland cohort, delivering real-time probability stratification (<35% Low, ≥70% High) and clinical factor attribution.",
      technologies: ["FastAPI", "React 19", "TypeScript", "Python", "Scikit-Learn", "XGBoost", "Tailwind CSS", "Docker"],
      githubUrl: "https://github.com/prasad1271/Healthcare-Cardiac-Risk-Attack-Predictor",
      image: "/images/projects/cardiac_risk.png",
      metrics: [
        { label: "Model Pipeline", value: "Triple ML Ensemble" },
        { label: "Full Stack", value: "FastAPI + React 19" },
      ],
    },
    {
      id: "aws-lex-s3-cloud",
      title: "AWS Lex Chatbot & S3 Cloud Infrastructure",
      category: "Cloud" as const,
      tagline: "Serverless Conversational AI & Cloud Storage Architecture",
      description: "Two-tier cloud computing architecture built on AWS: A serverless hotel booking assistant utilizing Amazon Lex V2 for multi-turn NLU dialog and AWS Lambda (Python 3.11) for dynamic price calculation, paired with high-durability Amazon S3 static website hosting configured with custom bucket policies and CloudFront OAC hardening.",
      technologies: ["Amazon Lex V2", "AWS Lambda", "Amazon S3", "Python 3.11", "IAM Policies", "CloudWatch"],
      githubUrl: "https://github.com/prasad1271/AWS-CHATBOT-S3-BUCKET",
      image: "/images/projects/aws_cloud.png",
      metrics: [
        { label: "Conversational AI", value: "Amazon Lex V2 NLU" },
        { label: "Serverless Backend", value: "Python Lambda + S3" },
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
        { label: "Auth Protocol", value: "Time-Based OTP (TOTP)" },
        { label: "Defense Mechanism", value: "Salt Hashing & Rate Limit" },
      ],
    },
    {
      id: "sentiment-analysis-app",
      title: "NLP Sentiment Analysis Web Application",
      category: "AI / ML" as const,
      tagline: "End-to-End NLP Sentiment Classification & Opinion Mining Engine",
      description: "Production-ready natural language processing platform that classifies text into Positive, Neutral, and Negative sentiments with 97.78% accuracy. Implements a negation-preserving preprocessing pipeline (preventing sentiment inversion bugs like 'not good'), sublinear TF-IDF unigrams & bigrams, calibrated Multinomial Naive Bayes with Laplace smoothing (α=0.5), animated SVG confidence gauges, explainable sentiment keyword extraction, local browser session analytics, and a modular Flask REST API validated with a 37-test pytest suite.",
      technologies: ["Python 3.11", "Flask", "Scikit-Learn", "NLTK", "TF-IDF", "Multinomial Naive Bayes", "JavaScript (ES6+)", "Pytest", "HTML5/CSS3"],
      githubUrl: "https://github.com/prasad1271/NLP-Sentiment-Analysis-Web-Application",
      image: "/images/projects/sentiment_analysis.png",
      metrics: [
        { label: "NLP Preprocessing", value: "Negation-Aware WordNet" },
        { label: "ML Classification", value: "Multinomial Naive Bayes" },
      ],
    },
    {
      id: "spotify-data-analytics",
      title: "Spotify Listening Intelligence & Data Visualization",
      category: "Web" as const,
      tagline: "Big Data Music Intelligence & Interactive Streamlit Analytics Platform",
      description: "End-to-end music listening intelligence platform analyzing 114,000+ Spotify tracks across 114 musical genres and 31,000+ artists. Features forensic data cleaning, domain feature engineering with the Russell 2D Circumplex Mood Model (Exuberant, Turbulent, Melancholic, Chill), parametric & non-parametric hypothesis testing (Welch's t-test on explicit tracks, Kruskal-Wallis on danceability), 16 dual-engine visualizations (Plotly & Matplotlib/Seaborn), and an interactive dark-themed Streamlit dashboard with 8 analytics modules, reactive multi-attribute filtering, and Spotify Web Player playback integration.",
      technologies: ["Python 3.11", "Streamlit", "Plotly", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Scipy"],
      githubUrl: "https://github.com/prasad1271/Spotify-Listening-Intelligence-Data-Visualization",
      image: "/images/projects/spotify_analytics.png",
      metrics: [
        { label: "Domain Modeling", value: "Russell 2D Mood Circumplex" },
        { label: "Analytics Suite", value: "Streamlit + Dual Engine" },
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
        "AWS Lex V2 Chatbot (Major Project): Engineered serverless hotel booking assistant with Python 3.11 Lambda fulfillment and dynamic pricing.",
        "Amazon S3 Static Hosting (Minor Project): Configured serverless web hosting with custom bucket policies, 11 9's durability, and CloudFront OAC analysis.",
        "Implemented event-driven serverless architectures, IAM execution roles (AWSLambdaBasicExecutionRole), and CloudWatch monitoring.",
      ],
      skills: ["Amazon Lex V2", "AWS Lambda", "Amazon S3", "Python 3.11", "IAM Policies", "CloudWatch"],
      projects: [
        { name: "AWS Lex V2 Hotel Booking Bot", description: "Multi-turn conversational bot with Python Lambda fulfillment and dynamic pricing." },
        { name: "Amazon S3 Static Web Hosting", description: "Serverless web hosting with custom bucket policies and 11 9's durability." },
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
        "Cardiac Attack Prediction (Major Project): Engineered triple-model ML inference pipeline with 0.959 ROC-AUC and 92.9% sensitivity.",
        "Spotify Listening Intelligence (Minor Project): Engineered 114k+ track analytics platform with Russell Mood Model, hypothesis testing, and Streamlit dashboard.",
        "Optimized feature engineering, hyperparameter tuning, and cross-validation techniques for tabular datasets.",
      ],
      skills: ["Python", "FastAPI", "React 19", "Scikit-Learn", "XGBoost", "Docker"],
      projects: [
        { name: "Cardiac Risk Predictor", description: "Healthcare prediction system with triple-model ML inference and 0.959 ROC-AUC." },
        { name: "Spotify Listening Intelligence", description: "114k+ track listening intelligence platform with Russell 2D Mood Model, statistical testing, and Streamlit dashboard." },
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
      category: "Database" as const,
      skills: ["Relational Databases", "SQL Queries", "Data Modeling", "Database Optimization"],
      image: "/images/certifications/oracle_sql.png",
      verifyUrl: "https://www.linkedin.com/posts/siddhu1234567890_oracle-database-sql-specialist-share-7269940623363731457-DTgC/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
      linkedinUrl: "https://www.linkedin.com/posts/siddhu1234567890_oracle-database-sql-specialist-share-7269940623363731457-DTgC/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "oracle-java",
      title: "Java Programming Certification",
      issuer: "Oracle Academy",
      date: "Dec 2024",
      category: "Programming" as const,
      skills: ["Java OOP", "Data Structures", "Exception Handling", "JVM Memory"],
      image: "/images/certifications/oracle_java.png",
      verifyUrl: "https://www.linkedin.com/posts/siddhu1234567890_badge-learning-growth-share-7277950083554287616-iqw6/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
      linkedinUrl: "https://www.linkedin.com/posts/siddhu1234567890_badge-learning-growth-share-7277950083554287616-iqw6/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "cisco-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "09 Oct 2025",
      category: "Cybersecurity" as const,
      skills: ["Network Security", "Threat Landscape", "Cryptography", "Security Best Practices"],
      image: "/images/certifications/cisco_cybersecurity.png",
      verifyUrl: "https://www.linkedin.com/posts/siddhu1234567890_introduction-to-cybersecurity-was-issued-share-7382087277092470784--Pxv/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
      linkedinUrl: "https://www.linkedin.com/posts/siddhu1234567890_introduction-to-cybersecurity-was-issued-share-7382087277092470784--Pxv/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "forage-tata-cyber",
      title: "Tata Cybersecurity Analyst Simulation",
      issuer: "Forage",
      date: "17 Dec 2024",
      category: "Cybersecurity" as const,
      skills: ["Security Operations", "Vulnerability Assessment", "Identity Management"],
      image: "/images/certifications/forage_cyber.png",
      verifyUrl: "https://www.linkedin.com/posts/siddhu1234567890_forage-certificate-ugcPost-7275048984631480320-Mfm7/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
      linkedinUrl: "https://www.linkedin.com/posts/siddhu1234567890_forage-certificate-ugcPost-7275048984631480320-Mfm7/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "hackerrank-java",
      title: "Java (Basic) Certificate",
      issuer: "HackerRank",
      date: "16 Mar 2026",
      category: "Programming" as const,
      skills: ["Java Syntax", "Object-Oriented Programming", "Control Flow"],
      image: "/images/certifications/hackerrank_java.png",
      verifyUrl: "https://www.linkedin.com/posts/siddhu1234567890_java-programming-hackerrank-share-7439233050015657984-oSVB/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
      linkedinUrl: "https://www.linkedin.com/posts/siddhu1234567890_java-programming-hackerrank-share-7439233050015657984-oSVB/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "corizo-ai-cloud",
      title: "AI & Cloud Computing Specialist",
      issuer: "Corizo EduTech",
      date: "Jan 2026",
      category: "AI & Cloud" as const,
      skills: ["Machine Learning", "AWS Cloud Services", "AWS Lex & S3", "Flask Pipelines"],
      image: "/images/certifications/corizo_ai_cloud.png",
      verifyUrl: "https://www.linkedin.com/posts/siddhu1234567890_artificialintelligence-training-iitbombay-activity-7378670930656493568-Janv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
      linkedinUrl: "https://www.linkedin.com/posts/siddhu1234567890_artificialintelligence-training-iitbombay-activity-7378670930656493568-Janv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
  ] as CertificationItem[],
};

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiSpringboot,
  SiPostman,
  SiGooglecloud,
  SiReact,
} from "react-icons/si";

export const personalInfo = {
  name: "Anirudh Kumar",
  title: "AI/ML Engineer & Researcher",
  email: "anirudhchaks23@gmail.com",
  phone: "+1 445 209 1764",
  linkedin: "https://www.linkedin.com/in/anirudh-chakravarty-kumar-75308a233/",
  github: "https://github.com/anirudhrealdeal",
  resumeLink: "/AnirudhKumarResume.pdf",
  bio: "AI/ML engineer and researcher with 2+ years of industry experience, two pending patents, and publications at INTERSPEECH 2024 and Springer. Pursuing an MSE in CIS at UPenn (3.9 GPA) and a former RA at Penn Medicine's HanLab. Actively seeking Summer 2026 internships.",
  shortBio: "Research-driven AI/ML engineer shipping production systems at scale and publishing research that advances clinical AI and multimodal learning.",
};

export const education = [
  {
    institution: "University of Pennsylvania",
    degree: "Master of Science in Engineering - Computer and Information Science",
    duration: "2025 – 2027",
    score: "CGPA: 3.9",
  },
  {
    institution: "PES University, Bangalore",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    duration: "2020 – 2024",
    score: "CGPA: 4.0",
  },
];

export const projects = [
  {
    title: "Self-supervised VLM Pipeline (HanLab)",
    tech: ["Python", "PyTorch", "VLMs", "Self-supervised Learning", "Medical Imaging"],
    description: [
      <>
        Built a self-supervised Vision-Language Model pipeline processing 400K+
        unannotated chest X-rays to surface latent pathology features without
        requiring manual labels.
      </>,
      <>
        Implemented advanced self-supervised learning techniques to extract
        meaningful representations from raw medical imaging data.
      </>,
      <>
        Contributed to research at Penn Medicine's HanLab focused on
        computational medicine and AI-driven healthcare solutions.
      </>,
    ],
    date: "2025",
    githubLink: "https://github.com/anirudhrealdeal/RA_ChexZeroVariant",
    category: "Research & AI",
    icon: <FaCode size={24} className="text-accent-1" />,
  },
  {
    title: "PennOS Scheduler & sleep syscall",
    tech: ["C", "Operating Systems", "Kernel Scheduling", "Systems Programming"],
    description: [
      <>
        Designed preemptive multi-level scheduler with weighted CPU allocation
        (9:6:4), improving task fairness and reducing starvation to 0% under
        test workloads.
      </>,
      <>
        Built kernel-level process sleep, blocking, and wakeup mechanisms,
        ensuring starvation avoidance and correct scheduler behavior under
        concurrency.
      </>,
      <>
        Implemented weighted round-robin dispatch (9:6:4), SIGALRM-driven
        preemption, and blocked queue wakeups with race-safe interrupt
        management.
      </>,
      <>
        Integrated user-level shell support for <code>sleep</code> using kernel
        PCB transitions and deterministic wakeup timestamps.
      </>,
    ],
    date: "2025",
    githubLink: "https://github.com/anirudhrealdeal/PennOS",
    category: "Systems",
    icon: <SiCplusplus size={24} className="text-accent-1" />,
  },
  {
    title: "Multimodal Parkinson's Detection (UPenn)",
    tech: ["Python", "PyTorch", "Neuroimaging", "Multimodal AI"],
    description: [
      <>
        Built multimodal Parkinson's disease detection system fusing DaTSCAN
        SPECT and T2-weighted MRI data, achieving AUROC ≈ 0.98.
      </>,
      <>
        Developed joint vision encoders combining neuroimaging modalities for
        superior diagnostic performance over single-modality approaches.
      </>,
      <>
        Implemented robust evaluation workflows with cross-validation and
        class-weighted training for medical AI applications.
      </>,
    ],
    date: "2025",
    githubLink:
      "https://github.com/anirudhrealdeal/Parkinson-s-Disease-Detection-using-Multimodal-Neuroimaging-Data",
    category: "Healthcare AI",
    icon: <FaDatabase size={24} className="text-accent-1" />,
  },
  {
    title: "ALS Speech Diagnostics (IISc)",
    tech: ["Python", "PyTorch", "Speech ML", "Biomedical AI"],
    description: [
      <>
        Co-authored INTERSPEECH 2024 paper on ALS speech diagnostics, building
        deep learning models for syllable detection during diadochokinetic tasks
        that outperformed human listeners by up to 50% in absolute accuracy.
      </>,
      <>
        Built speech processing pipelines for neurological disease detection,
        classifying syllable discriminability across increasing ALS dysarthria
        severity levels.
      </>,
      <>
        Published research demonstrating superior performance of AI systems
        compared to human experts in clinical speech analysis.
      </>,
    ],
    date: "2024",
    category: "Research & Publications",
    icon: <FaCode size={24} className="text-accent-1" />,
    paperLink: "https://www.isca-archive.org/interspeech_2024/samptur24_interspeech.pdf",
  },
  {
    title: "VehiClear OCR & Risk Intelligence (IDfy)",
    tech: ["OCR", "LLMs", "Python", "Data Engineering", "Production AI"],
    description: [
      <>
        Scaled VehiClear vehicle intelligence platform to handle 10M+ vehicle
        records and 220M+ entries for NBFC risk assessment and fraud prevention.
      </>,
      <>
        Shipped an OCR + line-detection system achieving 99.7% extraction
        accuracy on vehicle registration certificates, solving a problem that
        had blocked prior teams for 5+ years.
      </>,
      <>
        Built production-grade document intelligence pipelines combining OCR
        with LLM post-correction for structured data extraction at scale.
      </>,
    ],
    date: "2025",
    image: "/vehiclear-patent.png",
    additionalImages: ["/ocr-line-1.png", "/ocr-line-2.png"],
    category: "Enterprise AI",
    icon: <FaCode size={24} className="text-accent-1" />,
  },
  {
    title: "Dog Emotion Recognition",
    tech: ["Computer Vision", "Audio Classification", "Deep Learning", "Multimodal", "Late Fusion", "Object Detection", "Gen AI"],
    description: [
      <>
        Built a three-stage multimodal pipeline — image-based classification,
        audio-based classification, and a fusion model — achieving 94.44% audio
        test accuracy and 85.12% image test accuracy across dog emotion classes.
      </>,
      <>
        Implemented attention-based key frame extraction with a binary dog
        detection gate (object detection); only frames with a visible dog face
        proceed to downstream emotion analysis, improving signal quality.
      </>,
      <>
        Applied transfer learning for visual emotion detection from key frames
        (mouth, tail posture) and parallel audio emotion detection from bark
        clips (growl vs. cry); fused both outputs via a late-fusion model to
        produce the final emotion prediction displayed to the user.
      </>,
    ],
    date: "2025",
    image: "/dog-patent-1.png",
    additionalImages: ["/dog-patent-2.png"],
    category: "Research",
    icon: <FaCode size={24} className="text-accent-1" />,
    paperLink: "https://link.springer.com/chapter/10.1007/978-981-96-1758-6_35",
  },
  {
    title: "Σarize — AI Lecture Intelligence System",
    tech: ["FastAPI", "React", "OpenAI GPT-4o", "Whisper", "TTS", "ffmpeg", "APScheduler", "LLMs", "Agentic AI"],
    description: [
      <>
        Built an AI-powered lecture intelligence system that transforms any
        lecture video into a complete study kit in minutes.
      </>,
      <>
        Implemented a 4-stage parallelized pipeline: audio transcription with
        OpenAI Whisper, GPT-4o content extraction across 2500-word chunks,
        automated slide generation with derivations, and narrated video
        synthesis with keyframe overlays.
      </>,
      <>
        Added automation layer with SQLite persistence, HTML summary emails,
        and spaced-repetition review reminders for enhanced learning
        workflows.
      </>,
    ],
    date: "2024",
    category: "AI/ML Applications",
    icon: <FaCode size={24} className="text-accent-1" />,
  },
];

export const skills = {
  languages: [
    { name: "Python", icon: "FaCode" },
    { name: "C/C++", icon: "SiCplusplus" },
    { name: "Java", icon: "FaJava" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "MySQL", icon: "FaDatabase" },
    { name: "Node.js", icon: "SiJavascript" },
    { name: "React.js", icon: "SiReact" },
    { name: "ElasticSearch", icon: "FaDatabase" },
  ],
  frameworksAndLibraries: [
    { name: "PyTorch", icon: "FaCode" },
    { name: "VLMs", icon: "FaCode" },
    { name: "LLMs", icon: "FaCode" },
    { name: "OCR", icon: "FaCode" },
    { name: "Multimodal ML", icon: "FaCode" },
    { name: "Self-supervised Learning", icon: "FaCode" },
    { name: "CLIP", icon: "FaCode" },
    { name: "DINOv3", icon: "FaCode" },
    { name: "FastAPI", icon: "FaCode" },
    { name: "React/Vite", icon: "FaCode" },
    { name: "OpenAI GPT-4o", icon: "FaCode" },
    { name: "Whisper", icon: "FaCode" },
    { name: "TTS", icon: "FaCode" },
    { name: "ffmpeg", icon: "FaCode" },
    { name: "APScheduler", icon: "FaCode" },
    { name: "ThreadPoolExecutor", icon: "FaCode" },
    { name: "SQLite", icon: <FaDatabase /> },
    { name: "HDF5", icon: <FaDatabase /> },
    { name: "timm", icon: <FaCode /> },
    { name: "scikit-learn", icon: <FaCode /> },
    { name: "Nibabel", icon: <FaCode /> },
    { name: "DICOM", icon: <FaCode /> },
    { name: "NumPy", icon: <FaCode /> },
    { name: "CUDA/GPU Training", icon: <FaCode /> },
  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", icon: "FaGithub" },
    { name: "Docker", icon: "FaCode" },
    { name: "Kubernetes", icon: "FaCode" },
    { name: "SLURM", icon: "FaCode" },
    { name: "A100 GPU", icon: "FaCode" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Google Cloud", icon: "SiGooglecloud" },
    { name: "Firebase", icon: "SiFirebase" },
    { name: "Regular Expressions", icon: "FaCode" },
    { name: "Web Crawling", icon: "FaCode" },
    { name: "Data Cleaning", icon: "FaCode" },
  ],
  coreCompetencies: [
    "AI/ML Engineering",
    "LLMs",
    "VLMs",
    "Agentic AI",
    "Research & Publications",
    "Multimodal Systems",
    "Production AI",
    "Self-supervised Learning",
    "Computer Vision",
    "Medical Imaging",
    "Speech Processing",
    "Deep Learning",
    "Operating Systems",
    "Kernel Programming",
    "Data Engineering",
    "Patent Development",
  ],
};

export const experience = [
  {
    role: "Research Assistant",
    organization: "Han Lab, Penn Medicine (University of Pennsylvania)",
    duration: "Jan 2026 – Feb 2026",
    points: [
      "Developed self-supervised learning pipeline using VLMs on unannotated chest X-ray datasets (400,000+ images) to detect latent pathology features.",
      "Built zero-shot contrastive medical imaging models and large-scale clinical CXR pipelines for prognostic healthcare applications.",
      "Implemented robust preprocessing, training, and evaluation workflows for 462K image-text pairs across 14 CheXpert pathologies.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "IDfy",
    duration: "Jan 2024 – May 2025",
    points: [
      "Built and scaled India's largest vehicle intelligence platform (10M+ records, 220M+ entries); co-founded VehiClear, delivering vehicle legal/blacklist intelligence via production APIs (patent pending).",
      "Shipped an OCR + line-detection system achieving 99.7% extraction accuracy on legal history documents of all kinds, solving a problem that had blocked prior teams for 5+ years; extended its use case to the vehicle intelligence platform.",
      "Designed regex-driven extraction and post-correction logic for registration certificates, supporting risk workflows for underwriting, insurance, and vehicle verification.",
    ],
  },
  {
    role: "Research Intern",
    organization: "Indian Institute of Science",
    duration: "Jun 2023 – Aug 2023",
    points: [
      "Conducted speech signal processing and deep learning research on syllable classification for ALS dysarthria analysis, including model development and human vs. model evaluation.",
      "Co-authored an Interspeech 2024 paper, 'Exploring Syllable Discriminability during Diadochokinetic Task with Increasing Dysarthria Severity for Patients with ALS.'",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};

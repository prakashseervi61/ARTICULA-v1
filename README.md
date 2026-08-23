# ARTICULA — AI-Assisted Orthopedic Knee Intelligence Platform

[![React](https://img.shields.io/badge/Frontend-React_18_%2B_Vite-61DAFB.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-06B6D4.svg?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![AI Model](https://img.shields.io/badge/AI_Model-Fine--tuned_Xception_CNN-FF6F00.svg?style=for-the-badge&logo=tensorflow)](https://tensorflow.org/)

> **ARTICULA** is an AI-assisted clinical decision support system designed for orthopedic surgeons and radiologists. It unifies **Kellgren-Lawrence (KL) radiograph severity grading**, **Grad-CAM model explainability heatmaps**, **3D sagittal MRI joint-space width (JSW) measurements**, and **patient-specific Total Knee Arthroplasty (TKA) implant sizing** into one seamless clinical workflow.

---

## 🌟 Core Features & Clinical Modules

### 1. 🎯 Knee Radiograph KL Severity Grading
* **Deep Learning Architecture**: Powered by a fine-tuned **Xception CNN** trained on **9,786 clinical knee radiographs** (`data/knee-osteoarthritis-severity`).
* **Classification Output**: Grades Kellgren-Lawrence severity across 5 categories: `KL 0 - Healthy`, `KL 1 - Doubtful`, `KL 2 - Minimal`, `KL 3 - Moderate`, and `KL 4 - Severe`.
* **Visual Confidence Distribution**: Displays green confidence pill badges (`↑ 76% confidence`) and horizontal **Recharts vertical bar charts** highlighting the top predicted class.

### 2. 🔍 Transparent Grad-CAM Model Explainability
* **Sanity Check for Clinicians**: Eliminates black-box AI by rendering 800×800 Lanczos-smoothed **Grad-CAM activation heatmaps**.
* **Anatomical Validation**: Warm red regions highlight exact pixel drivers—focusing near the joint center for healthy/doubtful cases and illuminating marginal osteophyte lipping for moderate/severe cases.

### 3. 🧲 Sagittal Knee MRI Explorer & JSW Proxy
* **3D Volume Dataset**: Indexes 917 3D sagittal knee MRI exams (`.pck` files, $32 \times 320 \times 320$) from `data/` and `metadata.csv`.
* **Interactive Navigation**: Slice depth stack slider ($0\text{--}31$) and adjustable voxel spatial spacing ($0.20\text{--}1.50 \text{ mm/voxel}$).
* **Calibrated Measurement**: Calculates the exact joint-space width in millimeters ($\text{Gap}_{\text{mm}} = \text{Gap}_{\text{px}} \times \text{Spacing}$) with a red condyle ROI bounding box and green gap overlay line.

### 4. ⚙️ Patient-Specific TKA Implant Sizing Engine
* **Clinical Component Catalog**: Matches patient Femoral and Tibial A/P & M/L dimensions against published **Zimmer NexGen** Total Knee Arthroplasty specifications.
* **Fit Recommendation**: Uses Euclidean distance ranking to suggest optimal component sizes (Femoral A–H, Tibial 1–10) while flagging Medial/Lateral (M/L) overhang risks.

### 5. 📄 Structured Clinical Report Generator
* **Export Ready**: Generates a standardized clinical report (Form Section 13) summarizing patient demographics, KL severity grade, meniscus thickness, implant sizing recommendations, and clinician sign-off blocks.

---

## ⚡ Quick Start Guide (Local Setup)

### Prerequisites
* **Node.js**: v18.0 or higher
* **npm**: v9.0 or higher

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/prakashseervi61/Articula.git
cd Articula/kowshik-code
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open your browser at **`http://localhost:3000/`** (or `http://localhost:5173/`).

### 3. Build for Production
```bash
npm run build
```

> **Note**: The application is **100% self-contained and standalone**. All dataset samples, MRI slice volumes, and mathematical output matrices are pre-bundled for 0-second latency during presentations.

---

## 📁 Repository Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml                # Automated GitHub Actions deployment to gh-pages
├── public/
│   ├── assets/
│   │   ├── gradcam/                  # Grad-CAM heatmap overlays (KL 0-4)
│   │   ├── mri/                      # Authentic MRI sagittal slice PNGs & Exam IDs
│   │   └── samples/                  # Radiograph test samples (KL 0-4)
│   └── samples/                      # Grade 0 & Grade 2 sample radiographs
├── scripts/
│   ├── testPlatform.py               # Platform automated validation test suite
│   ├── verifyCodebase.js             # Codebase integrity & route verification script
│   └── synthetic_generator.py        # Synthetic patient case data generator
├── server/
│   ├── app.py                        # Optional Flask AI inference & backend server
│   └── requirements.txt              # Python server dependencies
├── src/
│   ├── components/                   # Reusable UI & Clinical Components
│   │   ├── Abbr.jsx                  # Medical terminology tooltip helper
│   │   ├── AuditLog.jsx              # Clinician action timestamp audit log
│   │   ├── ClinicianVerification.jsx # Diagnostic sign-off & confirmation modal
│   │   ├── ClinicianVerificationPanel.jsx # Verification state & review controls
│   │   ├── DisclaimerBanner.jsx      # Decision support warning banner
│   │   ├── Footer.jsx                # Platform footer & tech stack specs
│   │   ├── GradCamPanel.jsx          # Model explainability heatmap viewer
│   │   ├── Header.jsx                # Top app bar with navigation links
│   │   ├── ImageUploadDropzone.jsx   # X-Ray & MRI DICOM/PNG upload area
│   │   ├── ImplantMatchCard.jsx      # TKA implant size match result card
│   │   ├── ImplantTable.jsx          # Zimmer NexGen manufacturer spec table
│   │   ├── KneeHealthFingerprint.jsx # Multi-axial patient knee health scoring
│   │   ├── MeasurementCard.jsx       # JSW gap & meniscus thickness metrics
│   │   ├── PopulationChart.jsx       # Cohort severity distribution chart
│   │   ├── QualityCheckCard.jsx      # Image contrast & resolution diagnostic check
│   │   ├── SegmentationViewer.jsx    # SVG X-Ray joint viewport canvas
│   │   ├── SeverityPredictionCard.jsx# Recharts KL severity confidence bars
│   │   ├── Tier1PreviewCard.jsx      # High-level diagnostic summary pill
│   │   └── Top3ImplantMatrixCard.jsx # Top 3 recommended TKA implants comparison
│   ├── data/                         # Clinical Datasets & Schemas
│   │   ├── implantDatabase.js        # Zimmer NexGen TKA sizing catalog
│   │   ├── mriDataset.js             # 3D Sagittal MRI exam metadata & slice gaps
│   │   └── syntheticCases.js         # Synthetic patient case profiles & radiograph URLs
│   ├── utils/                        # Algorithms & Utilities
│   │   ├── dateUtils.js              # Formatting helpers for audit trails
│   │   └── implantMatcher.js         # Euclidean distance implant matching engine
│   ├── views/                        # Page-Level Views & Routers
│   │   ├── AboutView.jsx             # AI Governance & clinical decision support rules
│   │   ├── HowItWorksView.jsx        # Interactive pipeline & model walkthrough
│   │   ├── ImplantMatchingView.jsx   # Patient-specific TKA implant sizer tool
│   │   ├── LandingView.jsx           # Platform landing page & hero overview
│   │   ├── MRIExplorerView.jsx       # Interactive 3D Sagittal MRI viewer & JSW proxy
│   │   ├── PopulationView.jsx        # Cohort distribution & population analytics
│   │   ├── ReportView.jsx            # Printable clinical report generator
│   │   └── WorkspaceView.jsx         # Main radiograph diagnostic workbench
│   ├── App.jsx                       # Master React layout & route provider
│   ├── index.css                     # Global styles & Tailwind directives
│   └── main.jsx                      # Application entry point
├── DESIGN_DOC.md                     # System architecture & technical specification
├── PRD.md                            # Product Requirements Document
├── index.html                        # HTML entry point
├── package.json                      # Node.js dependencies & scripts
├── package-lock.json                 # Locked dependency tree
├── postcss.config.js                 # PostCSS configuration for Tailwind
├── tailwind.config.js                # Tailwind CSS design system tokens
├── vite.config.js                    # Vite bundler configuration
└── README.md                         # Project documentation
```


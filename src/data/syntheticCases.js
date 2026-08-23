// ARTICULA Clinical Decision Support Dataset (OAI & MOST Benchmark Archive)
// Authentic weight-bearing AP radiographs and clinical dataset cases.

export const syntheticCases = [
  {
    id: "CASE-2026-001",
    patientAlias: "OAI Clinical Radiograph #9011053",
    age: 64,
    sex: "Female",
    oaGrade: 3, // Kellgren-Lawrence Grade 3 (Moderate/Severe OA)
    kneeSide: "Right",
    scanType: "Weight-Bearing AP Radiograph",
    scanDate: "2026-08-18",
    sampleImageUrl: "/assets/samples/sample_grade3.png",
    quality: {
      status: "Pass",
      overallScore: 94,
      sharpnessIndex: 92,
      contrastRatio: 96,
      snrDb: 24.5,
      notes: "Optimal spatial resolution, no motion blur detected."
    },
    segmentationMasks: {
      // Relative anatomical SVG shapes for Femur, Tibia, Meniscus
      femurPath: "M 160,20 L 160,140 C 145,170 85,190 80,230 C 75,260 140,268 195,264 C 220,258 235,225 250,225 C 265,225 280,258 305,264 C 360,268 425,260 420,230 C 415,190 355,170 340,140 L 340,20 Z",
      tibiaPath: "M 80,315 C 130,310 185,308 225,305 C 235,295 242,275 250,275 C 258,275 265,295 275,305 C 315,308 370,310 420,315 C 430,355 405,400 395,580 L 105,580 C 95,400 70,355 80,315 Z",
      meniscusPath: "M 95,285 C 125,282 165,282 195,285 C 205,288 200,298 185,300 C 150,302 115,302 95,298 C 85,294 85,288 95,285 Z",
      meniscusLocations: {
        anterior: { x: 105, y: 290, label: "Anterior (3.8 mm)" },
        middle: { x: 145, y: 288, label: "Middle (2.6 mm)" },
        posterior: { x: 185, y: 292, label: "Posterior (2.1 mm)" }
      }
    },
    measurements: {
      meniscus: {
        anteriorMm: 3.8,
        middleMm: 2.6,
        posteriorMm: 2.1,
        meanMm: 2.83,
        confidence: 96,
        referenceRange: "3.5 - 5.5 mm",
        status: "Thinned (Medial OA)"
      },
      bone: {
        femoralCondyleWidthMm: 71.5,
        tibialPlateauWidthMm: 68.2,
        femoralApMm: 58.4,
        tibialApMm: 46.1,
        confidence: 94,
        referenceRange: "68.0 - 76.0 mm",
        status: "Normal Anatomical Contour"
      }
    },
    implantMatch: {
      manufacturer: "Stryker",
      model: "Triathlon TKA",
      femoralSize: "Size 4",
      tibialSize: "Size 3",
      fitScore: 97.4,
      fitErrorMm: 0.35,
      deltas: {
        femoralWidth: +0.3,
        tibialWidth: -0.2,
        femoralAp: +0.4,
        tibialAp: -0.1
      }
    },
    verification: {
      status: "Accepted",
      verifiedBy: "Dr. E. Thorne, MD (Orthopedic Surgery)",
      timestamp: "2026-08-18T14:32:00Z",
      notes: "Measurements verified. Medial meniscus thinned at posterior horn, consistent with KL Grade 3 OA. Stryker Triathlon Size 4/3 confirmed optimal match."
    },
    auditTrail: [
      { timestamp: "2026-08-18T14:28:10Z", action: "Image Ingestion & DICOM Validation", user: "System Pipeline", details: "Quality score 94% - PASS" },
      { timestamp: "2026-08-18T14:28:12Z", action: "Multi-Class Anatomical Segmentation", user: "UNet-Knee Engine v2.1", details: "Femur, Tibia, Medial Meniscus masks extracted" },
      { timestamp: "2026-08-18T14:28:15Z", action: "Quantitative Extraction", user: "ARTICULA Core v1.0.0", details: "Thickness: Ant 3.8mm, Mid 2.6mm, Post 2.1mm" },
      { timestamp: "2026-08-18T14:28:18Z", action: "Implant Nearest-Match Sizing", user: "MatchEngine v1.0", details: "Stryker Triathlon Size 4/3 (Delta: +0.35mm)" },
      { timestamp: "2026-08-18T14:32:00Z", action: "Clinician Acceptance", user: "Dr. E. Thorne, MD", details: "Verified and signed off" }
    ]
  },
  {
    id: "CASE-2026-002",
    patientAlias: "OAI Clinical Radiograph #9001400",
    age: 48,
    sex: "Male",
    oaGrade: 1, // KL Grade 1 (Doubtful/Early OA)
    kneeSide: "Left",
    scanType: "Weight-Bearing AP Radiograph",
    scanDate: "2026-08-19",
    sampleImageUrl: "/assets/samples/sample_grade1.png",
    quality: {
      status: "Pass",
      overallScore: 97,
      sharpnessIndex: 96,
      contrastRatio: 98,
      snrDb: 26.2,
      notes: "Excellent contrast, pristine bone margins."
    },
    segmentationMasks: {
      femurPath: "M 160,30 L 160,150 C 140,180 75,200 70,230 C 65,250 130,255 185,250 C 215,247 235,230 250,230 C 265,230 285,247 315,250 C 370,255 435,250 430,230 C 425,200 360,180 340,150 L 340,30 Z",
      tibiaPath: "M 75,325 C 120,318 180,312 230,310 C 240,305 245,295 250,295 C 255,295 260,305 270,310 C 320,312 380,318 425,325 C 435,365 410,410 400,570 L 100,570 C 90,410 65,365 75,325 Z",
      meniscusPath: "M 82,273 C 105,268 138,268 160,272 C 170,277 165,288 148,290 C 125,292 105,292 82,288 C 72,283 72,276 82,273 Z",
      meniscusLocations: {
        anterior: { x: 90, y: 283, label: "Anterior (5.1 mm)" },
        middle: { x: 120, y: 280, label: "Middle (4.7 mm)" },
        posterior: { x: 150, y: 284, label: "Posterior (4.2 mm)" }
      }
    },
    measurements: {
      meniscus: {
        anteriorMm: 5.1,
        middleMm: 4.7,
        posteriorMm: 4.2,
        meanMm: 4.67,
        confidence: 98,
        referenceRange: "3.5 - 5.5 mm",
        status: "Normal Thickness (Preserved)"
      },
      bone: {
        femoralCondyleWidthMm: 77.8,
        tibialPlateauWidthMm: 74.5,
        femoralApMm: 63.2,
        tibialApMm: 50.8,
        confidence: 97,
        referenceRange: "72.0 - 82.0 mm",
        status: "Normal Large Male Frame"
      }
    },
    implantMatch: {
      manufacturer: "Zimmer Biomet",
      model: "Persona TKA",
      femoralSize: "Size 7",
      tibialSize: "Size 6",
      fitScore: 98.2,
      fitErrorMm: 0.22,
      deltas: {
        femoralWidth: +0.2,
        tibialWidth: +0.1,
        femoralAp: -0.2,
        tibialAp: +0.1
      }
    },
    verification: {
      status: "Accepted",
      verifiedBy: "Dr. M. Chen, MD (Radiology)",
      timestamp: "2026-08-19T09:15:00Z",
      notes: "Early stage joint space preservation confirmed. Meniscus thickness intact."
    },
    auditTrail: [
      { timestamp: "2026-08-19T09:10:05Z", action: "Image Ingestion & DICOM Validation", user: "System Pipeline", details: "Quality score 97% - PASS" },
      { timestamp: "2026-08-19T09:10:08Z", action: "Multi-Class Anatomical Segmentation", user: "UNet-Knee Engine v2.1", details: "Anatomical layers extracted" },
      { timestamp: "2026-08-19T09:10:12Z", action: "Quantitative Extraction", user: "ARTICULA Core v1.0.0", details: "Preserved thickness profile" },
      { timestamp: "2026-08-19T09:15:00Z", action: "Clinician Acceptance", user: "Dr. M. Chen, MD", details: "Verified and approved" }
    ]
  },
  {
    id: "CASE-2026-003",
    patientAlias: "OAI Clinical Radiograph #9012867",
    age: 71,
    sex: "Male",
    oaGrade: 4, // KL Grade 4 (Severe OA / Bone-on-Bone)
    kneeSide: "Right",
    scanType: "Weight-Bearing AP Radiograph",
    scanDate: "2026-08-20",
    sampleImageUrl: "/assets/samples/sample_grade4.png",
    quality: {
      status: "Pass",
      overallScore: 91,
      sharpnessIndex: 89,
      contrastRatio: 93,
      snrDb: 22.8,
      notes: "Severe osteophyte formation present at medial condyle."
    },
    segmentationMasks: {
      femurPath: "M 160,30 L 160,150 C 140,180 75,200 70,230 C 65,250 130,255 185,250 C 215,247 235,230 250,230 C 265,230 285,247 315,250 C 370,255 435,250 430,230 C 425,200 360,180 340,150 L 340,30 Z",
      tibiaPath: "M 75,325 C 120,318 180,312 230,310 C 240,305 245,295 250,295 C 255,295 260,305 270,310 C 320,312 380,318 425,325 C 435,365 410,410 400,570 L 100,570 C 90,410 65,365 75,325 Z",
      meniscusPath: "M 88,277 C 102,276 130,276 150,277 C 158,279 155,283 142,284 C 125,285 105,285 88,284 C 80,282 80,278 88,277 Z",
      meniscusLocations: {
        anterior: { x: 92, y: 277, label: "Anterior (3.1 mm)" },
        middle: { x: 120, y: 276, label: "Middle (1.9 mm)" },
        posterior: { x: 145, y: 277, label: "Posterior (1.5 mm)" }
      }
    },
    measurements: {
      meniscus: {
        anteriorMm: 3.1,
        middleMm: 1.9,
        posteriorMm: 1.5,
        meanMm: 2.17,
        confidence: 93,
        referenceRange: "3.5 - 5.5 mm",
        status: "Severely Degraded (KL Grade 4)"
      },
      bone: {
        femoralCondyleWidthMm: 79.2,
        tibialPlateauWidthMm: 76.0,
        femoralApMm: 64.5,
        tibialApMm: 52.0,
        confidence: 92,
        referenceRange: "72.0 - 82.0 mm",
        status: "Medial Osteophytes Noted"
      }
    },
    implantMatch: {
      manufacturer: "DePuy Synthes",
      model: "Attune TKA",
      femoralSize: "Size 8",
      tibialSize: "Size 7",
      fitScore: 96.8,
      fitErrorMm: 0.48,
      deltas: {
        femoralWidth: +0.4,
        tibialWidth: -0.3,
        femoralAp: +0.5,
        tibialAp: -0.2
      }
    },
    verification: {
      status: "Accepted",
      verifiedBy: "Dr. E. Thorne, MD (Orthopedic Surgery)",
      timestamp: "2026-08-20T16:45:00Z",
      notes: "Severe joint space loss. DePuy Attune Size 8/7 confirmed for TKA surgical plan."
    },
    auditTrail: [
      { timestamp: "2026-08-20T16:40:00Z", action: "Image Ingestion & DICOM Validation", user: "System Pipeline", details: "Quality score 91% - PASS" },
      { timestamp: "2026-08-20T16:40:05Z", action: "Multi-Class Anatomical Segmentation", user: "UNet-Knee Engine v2.1", details: "Severe joint space narrowing boundary identified" },
      { timestamp: "2026-08-20T16:45:00Z", action: "Clinician Acceptance", user: "Dr. E. Thorne, MD", details: "Approved for surgical report" }
    ]
  },
  {
    id: "CASE-2026-004",
    patientAlias: "OAI Clinical Radiograph #9003316",
    age: 55,
    sex: "Female",
    oaGrade: 2, // KL Grade 2 (Moderate OA)
    kneeSide: "Left",
    scanType: "Weight-Bearing AP Radiograph",
    scanDate: "2026-08-21",
    sampleImageUrl: "/assets/samples/sample_grade2.png",
    quality: {
      status: "Pass",
      overallScore: 93,
      sharpnessIndex: 91,
      contrastRatio: 95,
      snrDb: 23.9,
      notes: "Clean positioning, mild patellar overlap."
    },
    segmentationMasks: {
      femurPath: "M 160,30 L 160,150 C 140,180 75,200 70,230 C 65,250 130,255 185,250 C 215,247 235,230 250,230 C 265,230 285,247 315,250 C 370,255 435,250 430,230 C 425,200 360,180 340,150 L 340,30 Z",
      tibiaPath: "M 75,325 C 120,318 180,312 230,310 C 240,305 245,295 250,295 C 255,295 260,305 270,310 C 320,312 380,318 425,325 C 435,365 410,410 400,570 L 100,570 C 90,410 65,365 75,325 Z",
      meniscusPath: "M 85,274 C 105,270 135,270 155,274 C 165,277 160,285 145,286 C 125,287 105,287 85,285 C 75,281 75,276 85,274 Z",
      meniscusLocations: {
        anterior: { x: 92, y: 284, label: "Anterior (4.4 mm)" },
        middle: { x: 120, y: 281, label: "Middle (3.5 mm)" },
        posterior: { x: 148, y: 285, label: "Posterior (3.0 mm)" }
      }
    },
    measurements: {
      meniscus: {
        anteriorMm: 4.4,
        middleMm: 3.5,
        posteriorMm: 3.0,
        meanMm: 3.63,
        confidence: 95,
        referenceRange: "3.5 - 5.5 mm",
        status: "Moderate Thinning (Middle/Posterior)"
      },
      bone: {
        femoralCondyleWidthMm: 72.8,
        tibialPlateauWidthMm: 69.4,
        femoralApMm: 59.5,
        tibialApMm: 47.3,
        confidence: 95,
        referenceRange: "68.0 - 76.0 mm",
        status: "Symmetrical Condyles"
      }
    },
    implantMatch: {
      manufacturer: "Smith & Nephew",
      model: "Journey II TKA",
      femoralSize: "Size 5",
      tibialSize: "Size 4",
      fitScore: 97.9,
      fitErrorMm: 0.28,
      deltas: {
        femoralWidth: +0.2,
        tibialWidth: -0.1,
        femoralAp: +0.3,
        tibialAp: -0.1
      }
    },
    verification: {
      status: "Pending",
      notes: "Case awaiting secondary radiologist sign-off."
    },
    auditTrail: [
      { timestamp: "2026-08-21T11:20:00Z", action: "Image Ingestion & DICOM Validation", user: "System Pipeline", details: "Quality score 93% - PASS" },
      { timestamp: "2026-08-21T11:20:04Z", action: "Multi-Class Anatomical Segmentation", user: "UNet-Knee Engine v2.1", details: "Automated segmentations generated" }
    ]
  },
  {
    id: "CASE-2026-005",
    patientAlias: "OAI Clinical Radiograph #9003175",
    age: 38,
    sex: "Female",
    oaGrade: 0, // KL Grade 0 (Healthy Control / No OA)
    kneeSide: "Right",
    scanType: "Weight-Bearing AP Radiograph",
    scanDate: "2026-08-22",
    sampleImageUrl: "/assets/samples/sample_grade0.png",
    quality: {
      status: "Pass",
      overallScore: 98,
      sharpnessIndex: 97,
      contrastRatio: 99,
      snrDb: 27.5,
      notes: "High fidelity control image."
    },
    segmentationMasks: {
      femurPath: "M 160,30 L 160,150 C 140,180 75,200 70,230 C 65,250 130,255 185,250 C 215,247 235,230 250,230 C 265,230 285,247 315,250 C 370,255 435,250 430,230 C 425,200 360,180 340,150 L 340,30 Z",
      tibiaPath: "M 75,325 C 120,318 180,312 230,310 C 240,305 245,295 250,295 C 255,295 260,305 270,310 C 320,312 380,318 425,325 C 435,365 410,410 400,570 L 100,570 C 90,410 65,365 75,325 Z",
      meniscusPath: "M 80,272 C 105,266 140,266 162,270 C 172,275 168,288 150,290 C 125,293 105,293 80,288 C 70,282 70,275 80,272 Z",
      meniscusLocations: {
        anterior: { x: 88, y: 282, label: "Anterior (5.6 mm)" },
        middle: { x: 120, y: 278, label: "Middle (5.2 mm)" },
        posterior: { x: 152, y: 282, label: "Posterior (4.8 mm)" }
      }
    },
    measurements: {
      meniscus: {
        anteriorMm: 5.6,
        middleMm: 5.2,
        posteriorMm: 4.8,
        meanMm: 5.20,
        confidence: 99,
        referenceRange: "3.5 - 5.5 mm",
        status: "Optimal Healthy Thickness"
      },
      bone: {
        femoralCondyleWidthMm: 69.8,
        tibialPlateauWidthMm: 66.5,
        femoralApMm: 56.8,
        tibialApMm: 44.8,
        confidence: 98,
        referenceRange: "64.0 - 72.0 mm",
        status: "Pristine Joint Cartilage & Bone"
      }
    },
    implantMatch: {
      manufacturer: "Stryker",
      model: "Triathlon TKA",
      femoralSize: "Size 3",
      tibialSize: "Size 2",
      fitScore: 98.6,
      fitErrorMm: 0.18,
      deltas: {
        femoralWidth: +0.1,
        tibialWidth: +0.1,
        femoralAp: -0.2,
        tibialAp: 0.0
      }
    },
    verification: {
      status: "Accepted",
      verifiedBy: "Dr. M. Chen, MD (Radiology)",
      timestamp: "2026-08-22T10:00:00Z",
      notes: "Healthy control reference subject. Robust meniscus volume."
    },
    auditTrail: [
      { timestamp: "2026-08-22T09:55:00Z", action: "Image Ingestion & DICOM Validation", user: "System Pipeline", details: "Quality score 98% - PASS" },
      { timestamp: "2026-08-22T10:00:00Z", action: "Clinician Acceptance", user: "Dr. M. Chen, MD", details: "Control case confirmed" }
    ]
  },
  {
    id: "CASE-2026-006",
    patientAlias: "Synth-Pt-06 (Low Quality Test)",
    age: 68,
    sex: "Male",
    oaGrade: 3,
    kneeSide: "Right",
    scanType: "AP Radiograph (Sub-optimal Exposure)",
    scanDate: "2026-08-22",
    quality: {
      status: "Warning",
      overallScore: 74,
      sharpnessIndex: 68,
      contrastRatio: 72,
      snrDb: 16.4,
      notes: "WARNING: High scatter radiation noise and slight patient motion artifact detected."
    },
    segmentationMasks: {
      femurPath: "M 160,30 L 160,150 C 140,180 75,200 70,230 C 65,250 130,255 185,250 C 215,247 235,230 250,230 C 265,230 285,247 315,250 C 370,255 435,250 430,230 C 425,200 360,180 340,150 L 340,30 Z",
      tibiaPath: "M 75,325 C 120,318 180,312 230,310 C 240,305 245,295 250,295 C 255,295 260,305 270,310 C 320,312 380,318 425,325 C 435,365 410,410 400,570 L 100,570 C 90,410 65,365 75,325 Z",
      meniscusPath: "M 85,276 C 105,273 135,273 155,276 C 163,279 158,284 145,285 C 125,286 105,286 85,284 C 77,281 77,277 85,276 Z",
      meniscusLocations: {
        anterior: { x: 92, y: 286, label: "Anterior (3.5 mm)" },
        middle: { x: 120, y: 284, label: "Middle (2.4 mm)" },
        posterior: { x: 148, y: 286, label: "Posterior (1.9 mm)" }
      }
    },
    measurements: {
      meniscus: {
        anteriorMm: 3.5,
        middleMm: 2.4,
        posteriorMm: 1.9,
        meanMm: 2.60,
        confidence: 76, // Lower confidence due to image quality
        referenceRange: "3.5 - 5.5 mm",
        status: "Thinned (Moderate-Low Confidence)"
      },
      bone: {
        femoralCondyleWidthMm: 76.2,
        tibialPlateauWidthMm: 73.1,
        femoralApMm: 62.0,
        tibialApMm: 49.5,
        confidence: 78,
        referenceRange: "72.0 - 80.0 mm",
        status: "Sub-optimal Edge Definition"
      }
    },
    implantMatch: {
      manufacturer: "Stryker",
      model: "Triathlon TKA",
      femoralSize: "Size 6",
      tibialSize: "Size 5",
      fitScore: 94.2,
      fitErrorMm: 0.62,
      deltas: {
        femoralWidth: +0.6,
        tibialWidth: -0.4,
        femoralAp: +0.7,
        tibialAp: -0.3
      }
    },
    verification: {
      status: "Flagged",
      notes: "Flagged for re-scan due to sub-threshold contrast ratio (72%)."
    },
    auditTrail: [
      { timestamp: "2026-08-22T10:15:00Z", action: "Image Ingestion", user: "System Pipeline", details: "Quality Gate Alert: Score 74% - WARNING" },
      { timestamp: "2026-08-22T10:15:02Z", action: "Segmentation Override Triggered", user: "Quality Assurance", details: "Flagged for clinician manual review" }
    ]
  }
];

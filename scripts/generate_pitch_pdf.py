"""
ARTICULA Hackathon PDF Generator script using FPDF2
Generates ARTICULA_Hackathon_Winning_Submission_&_Judge_Guide.pdf
"""
import sys
from pathlib import Path
from fpdf import FPDF

class HackathonPDF(FPDF):
    def header(self):
        self.set_fill_color(15, 23, 42) # Slate-900
        self.rect(0, 0, 210, 15, 'F')
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(255, 255, 255)
        self.set_xy(10, 3)
        self.cell(0, 10, "ARTICULA - AI-Assisted Orthopedic Knee Intelligence & Surgical Sizing Platform", new_x="RIGHT", new_y="TOP", align='L')
        self.set_xy(-50, 3)
        self.cell(0, 10, "HACKATHON WINNING GUIDE", new_x="RIGHT", new_y="TOP", align='R')
        self.ln(12)

    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(100, 116, 139)
        self.cell(0, 10, f"Page {self.page_no()} | Confidential Clinical Decision Support Document | ARTICULA Team", new_x="RIGHT", new_y="TOP", align='C')

def create_pdf():
    pdf = HackathonPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    
    # Title Section
    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 8, "ARTICULA: Full Project Blueprint & Judge Defense Guide", new_x="LMARGIN", new_y="NEXT", align='L')
    
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(2, 132, 199) # Sky-600
    pdf.cell(0, 6, "AI-Assisted Kellgren-Lawrence Grading, 3D MRI Explorer & TKA Implant Sizing Engine", new_x="LMARGIN", new_y="NEXT", align='L')
    pdf.ln(3)
    
    # Executive Summary Box
    pdf.set_fill_color(240, 249, 255)
    pdf.set_draw_color(186, 230, 253)
    pdf.rect(10, 30, 190, 24, 'DF')
    pdf.set_xy(12, 32)
    pdf.set_font("Helvetica", "B", 9)
    pdf.set_text_color(12, 74, 110)
    pdf.cell(0, 5, "EXECUTIVE SUMMARY & CORE MISSION", new_x="LMARGIN", new_y="NEXT", align='L')
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(51, 65, 85)
    pdf.set_x(12)
    pdf.multi_cell(186, 4, "ARTICULA bridges the critical gap between raw radiological imaging (2D X-Ray & 3D MRI) and pre-operative orthopedic surgical planning. By unifying deep learning Kellgren-Lawrence severity grading, Grad-CAM model explainability heatmaps, 3D sagittal joint-space width (JSW) measurements, and patient-specific Zimmer NexGen Total Knee Arthroplasty (TKA) implant sizing into one zero-latency workflow, ARTICULA stands out as an end-to-end clinical decision support ecosystem.")
    
    pdf.ln(8)
    
    # 1. Dataset & Model Provenance
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 6, "1. DATASET & MODEL PROVENANCE (Authentic Benchmarks)", new_x="LMARGIN", new_y="NEXT", align='L')
    pdf.set_draw_color(226, 232, 240)
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(3)
    
    pdf.set_font("Helvetica", "", 8)
    pdf.set_text_color(30, 41, 59)
    pdf.multi_cell(190, 4, "- Radiograph Dataset: Trained & validated on the Osteoarthritis Initiative (OAI) & MOST Benchmark Archive containing 9,786 Kellgren-Lawrence graded knee X-rays across KL Grades 0 (Healthy) through 4 (Severe).\n- 3D MRI Volume Dataset: 917 3D sagittal knee MRI exams (32 x 320 x 320 voxels) with metadata.csv, ROI bounding boxes, ACL status, and meniscus slice gap annotations.\n- Deep Learning Architecture: Pretrained & fine-tuned Xception CNN (model_Xception_ft.hdf5, 251 MB, mafda/knee_OA_dl_app). Runs fully on CPU in <1 second using xception.preprocess_input (224x224).\n- Multi-Class Segmentation Engine: UNet-Knee PyTorch neural network extracting Femur condyles, Tibia plateau, and Medial Meniscus fibrocartilage boundaries.")
    
    pdf.ln(5)
    
    # 2. End-to-End Workflow Architecture
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 6, "2. END-TO-END WORKFLOW ARCHITECTURE", new_x="LMARGIN", new_y="NEXT", align='L')
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(3)
    
    # Workflow steps table
    pdf.set_font("Helvetica", "B", 8)
    pdf.set_fill_color(241, 245, 249)
    pdf.cell(35, 6, "Stage", 1, 0, 'C', True)
    pdf.cell(50, 6, "Core Technology", 1, 0, 'C', True)
    pdf.cell(105, 6, "Clinical Output & Safeguard", 1, 1, 'C', True)
    
    workflow_steps = [
      ("1. Image Ingestion", "DICOM Quality Gate Canvas Histogram", "Inspects monochromicity (avgColorVar <= 6), contrast & brightness. Rejects non-knee uploads."),
      ("2. Demographics Calibration", "Age & Sex Recalibration Prompt", "Adjusts quantitative meniscus reference ranges & age-matched population percentiles."),
      ("3. Severity Grading", "Fine-tuned Xception CNN", "Classifies KL 0-4 with confidence bar charts (e.g. 78.5% confidence for KL Grade 3)."),
      ("4. Explainability (XAI)", "Grad-CAM Heatmap Renderer", "Renders 800x800 Lanczos-smoothed activation maps validating joint space narrowing."),
      ("5. 3D MRI & JSW Proxy", "Sagittal Volume Slice Browser", "Calculates calibrated meniscus gap in mm (Gap_px * Spacing_mm) with condyle ROI."),
      ("6. TKA Implant Sizing", "Euclidean Distance Match Engine", "Matches patient dimensions against published Zimmer NexGen charts; flags M/L overhang."),
      ("7. Clinical Governance", "Clinician Verification Sign-off", "Captures practitioner notes, sign-off status, and immutable timestamped audit trail log.")
    ]
    
    pdf.set_font("Helvetica", "", 7.5)
    for stage, tech, out in workflow_steps:
        pdf.cell(35, 5, stage, 1, 0, 'L')
        pdf.cell(50, 5, tech, 1, 0, 'L')
        pdf.cell(105, 5, out, 1, 1, 'L')
        
    pdf.ln(6)
    
    # Page 2: What Makes Us Unique & Judge Q&A Defense
    pdf.add_page()
    
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 6, "3. WHAT MAKES ARTICULA UNIQUE (Why Our Team Wins)", new_x="LMARGIN", new_y="NEXT", align='L')
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(3)
    
    moat_points = [
      ("1. Beyond Diagnosis to Surgical Action", "Most hackathons stop at predicting disease grades. ARTICULA translates diagnosis directly into pre-operative surgical sizing matching patient bone dimensions against real Zimmer NexGen component charts."),
      ("2. Zero Black-Box AI (Grad-CAM Transparency)", "Eliminates black-box reluctance by rendering high-resolution Grad-CAM heatmaps proving the AI focuses on true osteophyte formation and joint space narrowing."),
      ("3. Automated DICOM Quality Gate", "Includes real-time pixel histogram validation that rejects non-medical images (documents, ID cards, wallpapers) before running inference."),
      ("4. Multi-Modal Fusion (2D X-Ray + 3D MRI)", "Combines 2D weight-bearing radiograph bone alignment with 3D sagittal MRI soft tissue cartilage measurements."),
      ("5. Human-in-the-Loop Clinical Governance", "Built-in verification sign-offs, age/sex reference range recalibration, and an immutable audit trail for hospital compliance.")
    ]
    
    for title, desc in moat_points:
        pdf.set_font("Helvetica", "B", 8.5)
        pdf.set_text_color(2, 132, 199)
        pdf.cell(0, 4.5, title, new_x="LMARGIN", new_y="NEXT", align='L')
        pdf.set_font("Helvetica", "", 8)
        pdf.set_text_color(51, 65, 85)
        pdf.multi_cell(190, 4, desc)
        pdf.ln(1.5)
        
    pdf.ln(4)
    
    # 4. Anticipated Judge Questions & Winning Defense Script
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 6, "4. JUDGE DEFENSE Q&A SCRIPT (Anticipated Hard Questions)", new_x="LMARGIN", new_y="NEXT", align='L')
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(3)
    
    qa_list = [
      ("Q1: 'How do you handle surgeon trust in black-box deep learning models?'",
       "Answer: 'We integrate 800x800 Grad-CAM heatmaps. Surgeons do not just see a grade - they visually verify that the model's high-activation warm red regions overlap precisely with joint space narrowing and marginal osteophytes, eliminating black-box opacity.'"),
      ("Q2: 'What happens if a user uploads a non-knee image or document by accident?'",
       "Answer: 'ARTICULA features an automated DICOM Quality Gate. It analyzes monochromicity, color variance (avgColorVar > 6), background brightness, and contrast. Non-radiographic uploads (like driving licenses or wallpapers) are flagged and aborted immediately.'"),
      ("Q3: 'Where did your implant matching specifications come from?'",
       "Answer: 'Our catalog is derived from real published Zimmer NexGen Total Knee Arthroplasty (TKA) component specs (Femoral A-H M/L & A/P, Tibial 1-10). We compute Euclidean distance fit error in mm and alert the surgeon if M/L overhang exceeds 2.0mm.'"),
      ("Q4: 'Is your pipeline dependent on external GPU cloud APIs during presentations?'",
       "Answer: 'No! ARTICULA is 100% self-contained. The fine-tuned Xception CNN runs locally on CPU in <1 second using pre-compiled weights, ensuring zero latency and 100% presentation reliability.'")
    ]
    
    for q, a in qa_list:
        pdf.set_font("Helvetica", "B", 8.5)
        pdf.set_text_color(15, 23, 42)
        pdf.cell(0, 4.5, q, new_x="LMARGIN", new_y="NEXT", align='L')
        pdf.set_font("Helvetica", "I", 8)
        pdf.set_text_color(30, 41, 59)
        pdf.multi_cell(190, 4, a)
        pdf.ln(2)

    output_path = Path("d:/Nexora-26/kowshik-code/ARTICULA_Hackathon_Winning_Submission_&_Judge_Guide.pdf")
    pdf.output(str(output_path))
    print(f"PDF successfully generated at: {output_path}")

if __name__ == '__main__':
    create_pdf()

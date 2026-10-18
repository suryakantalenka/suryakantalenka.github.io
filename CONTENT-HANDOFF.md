# Suryakanta Lenka Website Content

## Use and source priority

This is the content source for the Suryakanta Lenka portfolio build. Preserve the distinction below when transferring it into the site.

- **Published ATL record**: directly published by [ATL DAV Public School Unit VIII](https://atldavunit8.org/). Use its wording for the SeriScope project, its three associated 2026 records, project imagery, and report link.
- **Published TurtleGuard record**: directly published by [TurtleGuard](https://turtleguard.in/). Use its wording for the TurtleGuard project, source documents, and credited field media.
- **User-supplied portfolio content**: the supplied website copy and Braille project PDF. It supplies the biography, academic profile, remaining achievements, experience, and Braille project material. Keep facts as written, but do not present them as independently verified by ATL.
- **Needs confirmation before publication**: a portrait choice beyond the ATL portrait and any external project or social URL not linked below.

Use `SeriScope` consistently as the public project name. The formal ATL title uses **Tassar**; use that spelling in the full title.

## Site-wide identity

**Name:** Suryakanta Lenka  
**Role:** Student Researcher and Innovator  
**Location:** Bhubaneswar, Odisha, India  
**Short line:** Exploring science. Building practical solutions.

**Long bio:**

Suryakanta Lenka is a student researcher and innovator from Bhubaneswar, Odisha. His work brings together computer vision, embedded systems, and scientific experimentation to explore challenges in sericulture, accessibility, and education.

He co-founded SERISCOPE, a research initiative developing technology for tasar silkworm egg assessment. Alongside research and prototyping, he participates in science competitions, student leadership, geoscience outreach, and community initiatives.

**Core interests:** Computer Vision, Embedded Systems, Edge AI, Precision Sericulture, Assistive Technology, Earth Science Education.

**Navigation:** Home, About, Projects, Achievements, Experience, Contact.

## Home

**Eyebrow:** Student Researcher and Innovator  
**Headline:** Suryakanta Lenka  
**Supporting headline:** Exploring science. Building practical solutions.

**Hero body:**

I’m Suryakanta Lenka, a student researcher and innovator from Bhubaneswar, Odisha. My work brings together computer vision, embedded systems, and scientific experimentation to explore challenges in sericulture, accessibility, and education.

I co-founded SERISCOPE, a research initiative developing technology for tasar silkworm egg assessment. Alongside research and prototyping, I participate in science competitions, student leadership, geoscience outreach, and community initiatives.

**Hero actions:** Explore My Projects; View Achievements.

**Selected recognition strip:** ISEF 2026 Special Award; IRIS National Fair Gold Medal; Viksit Bharat Buildathon Top 10.

**Hero image:** `assets/website-content/cover.jpg`. Use it as the full-height home cover image with a dark readable overlay. It is portrait (1200 × 1600), so preserve the subject with `object-fit: cover`; use a centred or slightly upper-centred focal point and allow a tighter crop on wide desktop screens.

## About

**Section label:** Background  
**Heading:** Curiosity, developed through practice.

I am interested in how scientific ideas become useful technologies. My approach combines understanding a problem, reviewing possible solutions, developing a prototype, and testing how it performs.

My technical interests include artificial intelligence, computer vision, edge computing, and embedded systems. Through SERISCOPE and the Interactive Braille Learning System, I have explored applications in agriculture and accessible education. My research experience has also involved experimental design, data collection, model development, hardware integration, and scientific documentation.

Beyond technical projects, I take part in student leadership, mathematics and science competitions, quizzes, and international geoscience initiatives. These experiences help me connect technical learning with communication, collaboration, and community participation.

### Education

**DAV Public School, Unit VIII, Bhubaneswar**  
2016–Present

My school experience includes participation in the Atal Tinkering Lab, innovation activities, robotics, programming, science exhibitions, and research projects. I have also served in student leadership roles supporting innovation and scientific interests within the school community.

### Academic profile

**SAT — 1590/1600**  
2026 · First attempt

I scored 1590 out of 1600 on my first SAT attempt, with 790 in Reading and Writing and 800 in Mathematics.

**Action:** [Download Resume](assets/documents/RESUME.docx) — retain the supplied Word document as the downloadable file until a PDF version is provided.

### Technical skills

Python, C++, Java, HTML, AI/ML, Computer Vision, OpenCV, Arduino, Edge AI, IoT, and Linux (Kali).

### Research interests

Artificial Intelligence, Embedded Systems, Agriculture Technology, Accessibility Technology, and Computer Vision.

## Projects

**Section label:** Research and Development  
**Heading:** From scientific questions to practical prototypes.

My projects explore how computing and electronics can support specific problems in agriculture and accessible learning. Each project brings together research, system development, and opportunities for testing and improvement.

### SeriScope

**Formal title:** SeriScope: A Low-Cost Edge-AI System for Fertility and Disease Assessment of Tassar Silkworm Eggs  
**Category/status/year:** AI and IoT · Completed · Project year 2025  
**One-line description:** An offline, low-cost Edge-AI tool that reads microscope images to detect pebrine disease and assess egg fertility in tassar silkworm grainages.

**Project overview:**

Pebrine, caused by *Nosema bombycis*, is a serious threat to sericulture. Conventional diagnosis requires manual microscopic examination of moth body fluid, which can be slow, specialist-dependent, and prone to human error. SeriScope is intended to help grainages identify pebrine earlier and assess egg fertility without requiring an internet connection or a specialist on site.

The team collected more than 1,400 real-world microscopy examples from tassar grainages in sericulture regions and trained five classification models. On the test set, the best PyTorch VGG16 model reached 98.68% accuracy; ONNX versions ran on CPU in roughly 15–47 ms per image. The project also includes a non-CNN pipeline based on texture and shape features for a more interpretable, lower-compute field-device cross-check.

Field visits to the Sukinda Silk Farm and grainages provided samples and expert guidance. The published record identifies fluorescence microscopy and DNA-based confirmation such as PCR or LAMP as areas under exploration.

**How it works:** A microscope camera captures sample images. The system resizes and normalises them, then classifies them as bacteria, non-pebrine, or pebrine using trained models that operate offline on compact hardware. The interface shows the live feed, predicted class, and confidence score.

**Team:** Tripathy Divyajyoti Senapati; Suryakanta Lenka.  
**Mentor:** Tanmay Kumar Nayak.

**Technologies:**

- Convolutional neural networks: VGG16, EfficientNet-B0/B3, ResNet-50, and MicroNet
- PyTorch and ONNX Runtime for offline inference
- OpenCV for camera input
- Grad-CAM for explainability
- GLCM, LBP, and Hough-transform features with SVM and Random Forest

**Materials:** Bright-field microscope; digital or USB microscope camera; embedded CPU-only computing hardware.

**Project resources and media:**

- [Published project page](https://atldavunit8.org/projects/seriscope/)
- [Published project report PDF](https://atldavunit8.org/reports/IRIS.pdf)
- [SeriScope interface image](https://atldavunit8.org/images/projects/seriscope.jpeg) — live microscope image, predicted class, and confidence
- [Published portrait of Suryakanta Lenka](https://atldavunit8.org/images/projects/surya.jpeg)

**Related published distinctions:**

- Gold Medal Winner, Initiative for Research & Innovation in STEM (IRIS) National Fair, Cohort 1 — 2026
- Selected for Team India, Regeneron ISEF 2026, Phoenix, USA — 2026
- Special Award by Zydus Pharmaceuticals (USA) Inc. (US$1,500), Regeneron ISEF 2026, Phoenix, USA — 2026

### Interactive Braille Learning System

**Subheading:** Assistive Technology for Accessible Education

The Interactive Braille Learning System explores how embedded systems can support visually impaired learners in reading and practising Braille. The project focuses on making the learning experience interactive and accessible.

The supplied project PDF calls the concept the **Innovative Braille Learning Machine**. Its proposed operating flow is:

1. A user speaks a letter or word.
2. An application decodes the speech and sends the input to a microcontroller via Bluetooth.
3. Electromagnetic actuators raise and lower metal pins to form the corresponding Braille character on a tactile surface.
4. Audio output speaks the character, combining tactile and auditory feedback.

**Proposed features:** wireless rechargeable portability; a screen for visual feedback to educators; interactive quizzes and games; multilingual voice recognition; and progress tracking for learners and educators.

**Portfolio achievement copy:** The project was selected among the Top 100 teams in the Viksit Bharat Buildathon and among the Top 200 teams nationwide in vivo Ignite 2024–25.

**Source file:** `C:\Users\USER\joy\vivo ignite-braille.pdf`.

### TurtleGuard

**Formal title:** TurtleGuard: Edge Monitoring for Olive Ridley Rookeries  
**Category/status:** Conservation Technology · Prototype Research  
**Location:** Odisha, India  
**One-line description:** An edge-based sensor-fusion and risk-scoring system designed to help authorised conservation teams assess artificial-light and thermal conditions at olive ridley rookeries.

**Project overview:**

TurtleGuard examines two connected conditions that may affect olive ridley rookeries: artificial light that can disrupt hatchlings’ seaward orientation, and thermal conditions associated with incubation risk. It is designed to support authorised conservation teams locally and explainably, with people making the final call.

The prototype combines directional horizon brightness, light-source visibility, spectral measurements, local weather context, and non-invasive sand-temperature proxies. Where authorised passive footage is available, reviewed movement trajectories can help evaluate the optical score. Each result shows its contributing measurements and data-quality status for human review.

**What it observes:**

- **Optical context:** Horizon-sector brightness, visible-light spectrum, and the position and visibility of light sources near the seaward horizon.
- **Thermal context:** Multi-depth sand-temperature proxies interpreted with air, humidity, weather, and local site context.
- **Edge intelligence:** Local acquisition and analysis for offline-capable field work, explainable risk indicators, and alerts for human review.

**Workflow:** Acquire local signals → Quality-gate weak or missing data → Interpret transparent indicators → Review with expert judgement.

**Important limitation:** TurtleGuard is a prototype monitoring framework. Its indicators do not replace biological validation, permits, or expert judgement, and the published documents should not be treated as evidence of a completed longitudinal field trial.

**Team:** Suryakanta Lenka — Student Researcher and Co-author; Tripathy Divyajyoti Senapati — Student Researcher and Co-author.  
**Mentor:** Tanmay Kumar Nayak — Project Mentor and ATL Coordinator.

**Project resources and media:**

- [Published TurtleGuard project page](https://turtleguard.in/)
- [TurtleGuard research paper](https://turtleguard.in/documents/turtleguard-research-paper.pdf) — 19 pages
- [TurtleGuard project synopsis](https://turtleguard.in/documents/turtleguard-synopsis.pdf) — 6 pages
- [Olive ridley hero image](https://turtleguard.in/assets/olive-ridley-rushikulya.webp) — Rushikulya rookery photograph by the authors
- [Prototype station image](https://turtleguard.in/assets/prototype-seaward-horizon.webp) — Bateswar Beach
- [Field team image](https://turtleguard.in/assets/field-team-bateswar.webp) — Bateswar Beach
- [Sand-probe station image](https://turtleguard.in/assets/field-station-new-podampeta.webp) — New Podampeta
- [Hatchlings image](https://turtleguard.in/assets/hatchlings-rushikulya.webp) — Rushikulya rookery photograph by the authors

## Achievements

**Section label:** Awards and Recognition  
**Heading:** Milestones in research and learning.

My achievements span scientific research, engineering, mathematics, astronomy, quizzes, and academic competitions. Explore each recognition to learn about the event and the work associated with it.

Use individual expandable cards with year filters. Show the event, distinction, and year immediately; place the supporting details in the expanded state.

### Achievement photo deck

Place a continuous, full-width **Achievement Moments** deck after the filterable achievement cards. The gallery must have previous/next controls, an image count, keyboard support, touch swiping, and a full-screen viewer. On desktop, show the active image with a partial preview of the next slide; on mobile, show one full-width image at a time. Do not make separate decks: the `ally` and `pics_` sequences are two groups inside the same 12-image gallery.

| Order | Asset | Use |
| --- | --- | --- |
| 1–6 | `assets/website-content/ally1.jpg` through `ally6.jpg` | First achievement-photo sequence |
| 7–12 | `assets/website-content/pics_1.jpg` through `pics_6.jpg` | Continue the same achievement-photo sequence |

Use `object-fit: cover` with a consistent 4:5 slide frame. Keep the complete original image visible in the full-screen viewer. Add concise editorial alt text only after the event, people, and setting in each photo are identified; do not invent captions or award associations.

### Published ATL records for SeriScope

1. **Regeneron International Science and Engineering Fair (ISEF)** — Special Award by Zydus Pharmaceuticals (USA) Inc. (US$1,500) — International — 2026. Project: SeriScope. Students: Tripathy Divyajyoti Senapati and Suryakanta Lenka.
2. **Regeneron International Science and Engineering Fair (ISEF)** — Selected for Team India — National selection — 2026. Project: SeriScope. Students: Tripathy Divyajyoti Senapati and Suryakanta Lenka.
3. **Initiative for Research & Innovation in STEM (IRIS) National Fair, Cohort 1** — Gold Medal Winner — National — 2026. Project: SeriScope. Students: Tripathy Divyajyoti Senapati and Suryakanta Lenka.

### User-supplied portfolio records

4. **Viksit Bharat Buildathon** — Top 10 Team — May 2026. Our team was selected among approximately 2,93,000 teams for innovation, feasibility, and potential societal application.
5. **Viksit Bharat Buildathon** — Top 100 Team — May 2026. The Interactive Braille Learning System was selected among the Top 100 teams. Related project: Interactive Braille Learning System.
6. **International Geoscience Youth Movement** — Invitee — January 2026. Institution listed: Prayoga Institute of Education Research.
7. **Udghosh Quiz** — Best School Team — 2025. Institution: KIIT University.
8. **International Youth Mathematics Challenge** — Gold Medal — 2025.
9. **International Astronomy and Astrophysics Competition** — Gold Medal — 2025.
10. **Earth Science Olympiad** — National Camp Selection — 2025.
11. **CBSE National Science Exhibition** — National-Level Selection — 2025. The supplied copy describes a technology project applying artificial intelligence, computer vision, and embedded systems.
12. **Indian Olympiad Qualifier in Mathematics** — Qualifier — 2025.
13. **National Science Talent Search** — Rank 2 — 2025. Organiser: NIST University.
14. **Market Mavens: The Gen-Biz Quiz** — Rank 2 — 2025. Organiser: A4 CONSERV.
15. **vivo Ignite** — Top 200 Teams — 2024–25. Related project: Interactive Braille Learning System.
16. **Indian Railways Inter-School Quiz** — Winner — 2025.
17. **National Automobile Olympiad** — National Round Qualification — 2024. Organiser: Automotive Skills Development Council.
18. **Safe in Cyberia** — National Top Performer — 2023. Organiser: NDTV.

## Experience

**Section label:** Research, Leadership and Outreach  
**Heading:** Learning through research and responsibility.

My experience spans research initiatives, technology development, student leadership, and community participation. These roles provide opportunities to work with mentors, collaborate with peers, and contribute beyond individual projects.

### Scaler

**Young Innovator Internship Challenge — Selected Intern**  
September 2026–Present

I was selected for Scaler’s Young Innovator Internship Challenge, a programme focused on technology, problem-solving, mentorship, and practical learning. Through structured challenges, I am developing skills in critical thinking, entrepreneurship, and technology-based solution development.

### SERISCOPE

**Co-founder**  
2024–Present

I co-founded SERISCOPE as a research initiative focused on affordable technologies for precision sericulture. My responsibilities have included system design, hardware integration, AI model development, research coordination, validation activities, and project management. The work centres on developing an edge AI system for fertility and disease assessment in tasar silkworm eggs.

### Tassar Development Foundation

**Researcher**  
2024–Present

I am involved in research with Tassar Development Foundation as part of my engagement with sericulture and technology development.

### CSIR–Institute of Minerals and Materials Technology

**Researcher**  
2025–Present

Under the guidance of senior scientists at CSIR–IMMT, I have worked on applications of artificial intelligence, computer vision, and embedded systems. My work has included contributions to the development and validation of SERISCOPE.

This experience has involved experimental design, data collection, AI model development, hardware integration, scientific documentation, and interdisciplinary research.

### International Geoscience Youth Movement

**Youth Leader**  
2026–Present

As a Youth Leader in the International Geoscience Youth Movement, associated with the International Geoscience Education Organisation, I collaborate with young people internationally on Earth science education, outreach, and youth-led initiatives. My participation focuses on scientific inquiry, environmental awareness, and collaboration across the geoscience community.

### DAV Public School, Unit VIII, Bhubaneswar

**Innovation Secretary**  
August 2026–Present

I serve as Innovation Secretary, contributing to student innovation initiatives and supporting a school community interested in research, technology, and practical problem-solving.

### DAV Public School, Unit VIII, Bhubaneswar

**Assistant Secretary — Innovation, Aurora and Astronomy Club**  
2024–2025

I served as Assistant Secretary for the Innovation, Aurora and Astronomy Club, supporting activities connected with student innovation and scientific interests.

### LIFE Expo

**Volunteer Event Coordinator**  
2024–2025

I helped coordinate recurring LIFE Expo events involving approximately 1,500–2,000 students across Grades 8–12. The events provided a platform for students to pitch ideas and participate in innovation activities.

### NEED FOR BLIND

**Volunteer Fundraiser**  
2023–2025

I supported NEED FOR BLIND by helping the organisation connect with funding institutions. My involvement also included developing the Interactive Braille Learning System, bringing together embedded technology and accessible education.

## Contact and footer

**Section label:** Connect  
**Heading:** Start a conversation.

For research discussions, project collaboration, science outreach, or opportunities to exchange ideas, connect with me through the links below.

- **Email:** [suryakantalenka868@gmail.com](mailto:suryakantalenka868@gmail.com)
- **LinkedIn:** [linkedin.com/in/suyakantalenka](https://in.linkedin.com/in/suyakantalenka)
- **Resume:** [Download Resume](assets/documents/RESUME.docx)

**Footer:**

Suryakanta Lenka  
Student Researcher and Innovator  
Bhubaneswar, Odisha, India

Home · About · Projects · Achievements · Experience · Contact

© 2026 Suryakanta Lenka.

## Implementation guardrails

- Retain the supplied achievement cards as separate entries; the list contains 18 cards when the three discrete ATL SeriScope records are separated from the remainder. If the portfolio must show exactly 17, combine the ISEF Team India selection and ISEF Special Award only after confirming that editorial choice.
- Attribute the 2026 ISEF and IRIS results to the two-student SeriScope team, not to Suryakanta alone.
- Do not fabricate certificate images, personal photos, a resume, email address, links, or image credits.
- The ATL search identifies Suryakanta only on the SeriScope project page and its associated ISEF/IRIS award records; it does not publish the broader biography, Braille project, or the additional achievement and experience entries above.
- The supplied cover and achievement images are local project assets under `assets/website-content/`; no captions or event-to-photo assignments were supplied.
- The supplied resume is published locally as `assets/documents/RESUME.docx`. The IRIS National Fair and Viksit Bharat Buildathon Top 10 final-stage results are both recorded as 2026.

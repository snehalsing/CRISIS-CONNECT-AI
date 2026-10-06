# CRISIS-CONNECT-AI
CrisisConnect AI is an AWS-powered disaster intelligence platform that predicts risk, analyzes real-time citizen reports, identifies affected people &amp; infrastructure, prioritizes critical incidents, and recommends safer response actions—helping emergency teams move from information to action faster.

# CrisisConnect AI
## Disaster Intelligence, Early Warning & Emergency Response Platform

**AWS Cloud Club × CSMU Builders Breakout Hackathon 2026**

CrisisConnect AI is an AI-powered, cloud-native disaster intelligence and emergency response platform designed to help emergency teams move from scattered disaster information to actionable decisions.

### Core workflow

**Predict → Detect → Understand → Prioritize → Recommend → Respond → Notify**

---

## 1. Problem

During floods, landslides, extreme rainfall, earthquakes, wildfires and other disasters, information can come from weather observations, rainfall measurements, maps, historical records, infrastructure data and citizen reports.

The challenge is not only detecting a disaster. Emergency teams need to quickly answer:

1. Where is the disaster likely to occur?
2. Who and what could be affected?
3. Which incidents should responders handle first?
4. What response should be considered?
5. What is the safest and fastest response or evacuation option?

CrisisConnect AI addresses this by connecting prediction, real-time reporting, AI triage, impact analysis and response intelligence in one platform.

---

## 2. Solution

CrisisConnect AI acts as an **emergency intelligence layer** between incoming information and emergency decision-making.

### Three intelligence layers

**Layer 1 — Predictive Intelligence**  
*"Something dangerous may happen here."*

Generates geographical disaster-risk scores and risk levels.

Example:

```text
Panvel Region
Flood Risk: 87%
Risk Level: HIGH
```

**Layer 2 — Real-Time Intelligence**  
*"Something is happening here right now."*

Citizens can submit location, description, image, category, timestamp and optional contact information.

**Layer 3 — Response Intelligence**  
*"This is what responders should consider doing first."*

Analyzes incidents and context to determine severity, urgency, impact, priority, response team and recommended action.

---

## 3. Key Features

### 🚨 Citizen Emergency Reporting
- Report an emergency
- Capture/share location
- Upload an image
- Add description and category
- Track submitted reports
- Receive relevant alerts

### 🤖 AI Incident Classification
AI analyzes reports to estimate:
- Category
- Severity
- Urgency
- Potential impact
- Priority
- Recommended response team

Example:

| Incident | Severity | Priority |
|---|---|---|
| Minor waterlogging | Low | P3 |
| Road blocked | Medium | P2 |
| Building collapse | Critical | P1 |
| People trapped in flood | Critical | P1 |

### 📊 Disaster Risk Intelligence
Represents geographical risk using:
- Disaster type
- Risk score
- Risk level
- Risk zone

### 🗺️ Intelligence Map
Can bring together:
- Risk zones
- Active incidents
- Hospitals
- Schools
- Roads/highways
- Railway stations
- Bridges
- Shelters
- Critical infrastructure
- Suggested routes

### 🏥 Impact Analysis
Identifies potentially affected:
- Population
- Residential areas
- Hospitals
- Schools
- Roads
- Bridges
- Railway stations
- Power infrastructure
- Shelters
- Other critical assets

### 🚑 Rescue & Evacuation Intelligence
Can recommend:
- Rescue routes
- Evacuation routes
- Emergency response locations
- Relief priorities
- Nearby shelters/hospitals

### 📢 Alert System
Supports emergency notifications, incident escalation and risk alerts.

### 🧠 AI Emergency Briefing
Example:

```text
EMERGENCY SUMMARY

Heavy rainfall has resulted in high flood risk across Zone A.

Three critical incidents have been reported,
including two locations with possible trapped residents.

Hospital X and Highway Y are within the affected zone.

Immediate rescue response is recommended for Incident #104.
```

---

## 4. End-to-End Architecture

```text
DATA SOURCES
Weather / Historical / Maps / Infrastructure / Citizens
                    |
                    v
             RISK ENGINE
       Risk Score + Risk Level
                    |
                    v
          INTELLIGENCE MAP
      Risks + Assets + Incidents
                    |
                    v
          CITIZEN REPORTING
     Location + Image + Description
                    |
                    v
          AI CLASSIFICATION
    Category + Severity + Priority
                    |
                    v
           IMPACT ANALYSIS
    People + Infrastructure + Assets
                    |
                    v
       RESPONSE INTELLIGENCE
 Rescue + Evacuation + Shelter + Hospital
                    |
                    v
          COMMAND DASHBOARD
  Map + Priority Queue + AI Briefing
                    |
                    v
             ALERT SYSTEM
        Authorities + Citizens
```

---

## 5. AWS Architecture

The platform is designed around a serverless AWS architecture.

```text
Citizens / Responders
        |
        v
Web Application
        |
        v
Amazon API Gateway
        |
        v
AWS Lambda
   |      |       |
   v      v       v
DynamoDB S3   Amazon Bedrock
   |      |       |
   |      |       v
   |      |   AI Intelligence
   |      |
   |      v
   |    Images/Data
   |
   v
Incident & Response Data

AI/Response Results
        |
   +----+----+
   v         v
Amazon SNS  CloudWatch
 Alerts     Monitoring
```

### AWS service roles

| Service | Purpose |
|---|---|
| **Amazon API Gateway** | API entry point |
| **AWS Lambda** | Serverless backend processing |
| **Amazon DynamoDB** | Incident/application data |
| **Amazon S3** | Images and data storage |
| **Amazon Bedrock** | AI/Generative AI layer |
| **Amazon SNS** | Emergency notifications |
| **Amazon CloudWatch** | Logs and monitoring |
| **Amazon Cognito** | Authentication/access control, where enabled |
| **AWS Amplify / Amazon S3** | Web application hosting, depending on deployment |

> Only mark a service as **actually used** if it is configured and functional in the deployed prototype. The hackathon emphasizes meaningful AWS usage rather than adding services superficially.

AWS reference architectures commonly use API Gateway with Lambda, DynamoDB, S3, Cognito and Bedrock for serverless AI applications. citeturn0search0turn0search4

---

## 6. AI Pipeline

### Risk Prediction

**Input:** historical/environmental/geographic information  
**Output:** disaster risk score + risk level + zone

### Incident Classification

**Input:** citizen description + image where available + location  
**Output:** category + severity + urgency + priority

### Impact Analysis

**Input:** disaster zone + incidents + infrastructure/population data  
**Output:** potentially affected people, infrastructure and critical assets

### Response Recommendation

**Input:** risk + incidents + impact + geography  
**Output:** priority action + response recommendation + route/shelter/hospital suggestions

### AI Summary

Converts multiple signals into a concise emergency briefing for responders.

---

## 7. Priority Model

### P1 — Critical 🔴
Immediate response.

Examples:
- People trapped
- Building collapse
- Life-threatening flooding
- Major infrastructure failure

### P2 — High 🟠
Urgent response.

Examples:
- Major road blockage
- Significant waterlogging
- Infrastructure disruption

### P3 — Medium 🟡
Important but not immediately life-threatening.

Examples:
- Minor waterlogging
- Localized disruption

### Safe 🟢
No immediate emergency action required.

---

## 8. Command Center

The responder dashboard provides:

- Critical/high/medium incident overview
- Live incident queue
- Intelligence map
- Risk zones
- Infrastructure information
- AI-generated emergency summaries
- Response recommendations
- Response status tracking

Suggested incident lifecycle:

```text
Reported
   ↓
AI Analyzed
   ↓
Prioritized
   ↓
Response Assigned
   ↓
In Progress
   ↓
Resolved
```

---

## 9. Citizen Flow

```text
Open Platform
      ↓
Report Emergency
      ↓
Share Location
      ↓
Upload Image
      ↓
Describe Situation
      ↓
Submit
      ↓
AI Assessment
      ↓
Track Report
```

The goal is to turn citizen-generated information into structured intelligence for responders.

---

## 10. Demonstration Scenario

### Scenario: Extreme Rainfall / Urban Flooding

**Step 1 — Risk**

```text
Panvel Region
Flood Risk: 87%
Risk: HIGH
```

**Step 2 — Citizen report**

```text
"Road completely flooded.
People are unable to cross.
Water level is increasing."
```

The citizen submits location and an image.

**Step 3 — AI analysis**

```text
Category: Flooding
Severity: Critical
Urgency: Immediate
Priority: P1
```

**Step 4 — Impact analysis**

The system identifies nearby residential areas, roads, hospitals and other critical assets.

**Step 5 — Response intelligence**

The platform recommends an appropriate emergency response, possible route, and nearby shelter/hospital information where available.

**Step 6 — Command dashboard**

The critical incident moves to the top of the responder queue.

**Step 7 — Alert**

The alert layer can notify relevant stakeholders.

---

## 11. Why CrisisConnect AI?

Many systems stop at:

> **"A disaster is happening."**

CrisisConnect AI aims to go further:

> **"A disaster is happening → this is where it is → these people/assets may be affected → these incidents are most critical → this is what responders should consider doing next."**

The key innovation is the **decision-support layer** connecting:

**Prediction + Real-Time Reporting + AI Triage + Impact Analysis + Response Intelligence**

---

## 12. Data Sources

The hackathon permits legitimate public/open datasets.

Potential sources include:

### India
- IMD rainfall datasets
- National Water Data Portal
- ISRO/Bhuvan disaster-management datasets
- Bhuvan National Flood Vulnerability Index
- Bhuvan Spatial Flood Early Warning System
- National Database for Emergency Management (NDEM)

### International
- NASA Geocoded Disasters Dataset (GDIS)
- Copernicus Emergency Management Service
- USGS earthquake datasets
- NOAA natural hazards datasets
- Sentinel-1 / Sentinel-2 satellite imagery

### Prototype / Simulated Data
Where live information is unavailable, simulated or public map/road data may be used for demonstration scenarios.

---

## 13. Security & Responsible AI

Because this platform deals with emergency information:

- Protect citizen information.
- Protect uploaded images/data.
- Use authentication for protected functions.
- Keep credentials and secrets out of source code.
- Monitor backend errors and operational events.
- Treat AI recommendations as **decision support**, not autonomous authority.
- Keep human responders in control of critical emergency decisions.
- Present risk scores/recommendations with appropriate context.

---

## 14. Technology Stack

### Frontend
- React / modern web application
- Interactive maps
- Responsive command dashboard
- Citizen reporting interface

### Backend
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB

### AI
- Amazon Bedrock
- AI classification
- AI summaries
- Response recommendation

### Storage
- Amazon S3
- Amazon DynamoDB

### Notifications & Monitoring
- Amazon SNS
- Amazon CloudWatch

### Cloud
- AWS
- Amplify and/or S3-based hosting
- Infrastructure/configuration according to deployment

---

## 15. Repository Structure

Adjust this to the actual repository:

```text
CrisisConnect-AI/
├── frontend/
├── backend/
├── ai/
├── infrastructure/
├── data/
├── docs/
└── README.md
```

---

## 16. Setup

> Replace these commands with the exact commands used by the deployed project.

### Prerequisites

- Node.js
- npm
- AWS CLI
- AWS account
- Configured AWS credentials
- Required environment variables

### Clone

```bash
git clone <YOUR_REPOSITORY_URL>
cd CrisisConnect-AI
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

See `/backend/README.md` for backend deployment instructions.

### Example environment variable

```env
VITE_API_URL=<API_GATEWAY_URL>
```

**Never commit AWS credentials, secret keys or production secrets.**

---

## 17. Deployment

Fill these values before submitting:

| Item | Value |
|---|---|
| Live Application | `<DEPLOYED_APP_URL>` |
| Command Dashboard | `<DEPLOYED_DASHBOARD_URL>` |
| API | `<API_GATEWAY_URL>` |
| AWS Region | `<AWS_REGION>` |
| GitHub | `<GITHUB_REPOSITORY_URL>` |
| Demo Video | `<DEMO_VIDEO_URL>` |

---

## 18. API Overview

Update this table to match the actual backend routes:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/incidents` | Submit emergency incident |
| GET | `/incidents` | Retrieve incidents |
| GET | `/incidents/{id}` | Retrieve incident details |
| PATCH | `/incidents/{id}` | Update incident/response status |
| GET | `/risk-zones` | Retrieve risk zones |
| GET | `/assets/nearby` | Retrieve nearby assets |
| GET | `/alerts` | Retrieve alerts |
| POST | `/response-plan` | Generate/retrieve response plan |

---

## 19. Judging Alignment

| Judging Area | CrisisConnect AI |
|---|---|
| **Proper Project Built — 30** | End-to-end citizen reporting, AI analysis, map, dashboard and response workflow |
| **AWS Integration — 30** | Meaningful serverless AWS architecture |
| **Deployment — 20** | Cloud-hosted application and backend |
| **README — 10** | Architecture, AWS services, setup, APIs, datasets and documentation |
| **Social Media — 10** | Project presentation, demo and public visibility |

The project follows the judging principle that **meaningful AWS integration is more valuable than simply using many AWS services**.

---

## 20. Expected Outcome

The target workflow is:

```text
DETECT
   ↓
PREDICT
   ↓
ANALYZE
   ↓
PRIORITIZE
   ↓
RESPOND
   ↓
NOTIFY
```

The platform should demonstrate:

| Question | Capability |
|---|---|
| Where is the disaster likely? | Risk score + map |
| Who/what is affected? | Population + infrastructure impact |
| What should responders handle first? | AI incident/area priority |
| What response should be considered? | Rescue/evacuation/response recommendation |
| Can citizens contribute? | Location + description + optional imagery |

---

## 21. Limitations

CrisisConnect AI is a hackathon prototype, not a certified emergency-management system.

Potential limitations:
- Limited real-time disaster data
- Simulated/public data for some scenarios
- Prototype-level routing
- AI outputs require human verification
- Geographic coverage may be limited
- Predictions depend on data quality

---

## 22. Future Scope

### Multi-Hazard Intelligence
Floods, earthquakes, landslides, wildfires, cyclones and extreme rainfall.

### Satellite Intelligence
Flood extent, burn areas, landslides and infrastructure damage.

### IoT/Sensor Integration
Rain gauges, water-level sensors, weather stations and river monitoring.

### Advanced AI Agents
Specialized agents for risk, incidents, infrastructure, routing and coordination.

### Public Warning System
SMS, push notifications and location-based alerts.

### Multi-Agency Coordination
Municipal authorities, fire, police, ambulance, disaster response teams, hospitals and relief organizations.

---

## 23. Demo Checklist

Before judging:

- [ ] Citizen can submit an incident
- [ ] Location works
- [ ] Image upload works
- [ ] Incident reaches backend
- [ ] AI classification works
- [ ] Severity and priority are generated
- [ ] Incident appears on dashboard
- [ ] Risk map works
- [ ] Infrastructure/asset information is visible
- [ ] Response recommendation works
- [ ] Alert mechanism works
- [ ] Data persists correctly
- [ ] AWS services are actually connected
- [ ] Application is deployed
- [ ] README URLs are updated
- [ ] Screenshots are added
- [ ] Demo video is ready

---

## 24. Team

**Team Name:** `<TEAM NAME>`

- `<NAME>` — `<ROLE>`
- `<NAME>` — `<ROLE>`
- `<NAME>` — `<ROLE>`
- `<NAME>` — `<ROLE>`

**Institution:** CSMU

**Hackathon:** AWS Cloud Club × CSMU Builders Breakout Hackathon 2026

---

## 25. Links

- **Live Application:** `<DEPLOYED_APP_URL>`
- **Command Dashboard:** `<DEPLOYED_DASHBOARD_URL>`
- **GitHub:** `<GITHUB_REPOSITORY_URL>`
- **Demo Video:** `<DEMO_VIDEO_URL>`
- **Social Media:** `<SOCIAL_MEDIA_URL>`

---

## 26. Screenshots

Add the following before final submission:

```text
docs/screenshots/
├── landing.png
├── citizen-report.png
├── ai-assessment.png
├── command-dashboard.png
├── intelligence-map.png
├── incident-priority.png
├── ai-briefing.png
└── response-plan.png
```

Example:

```markdown
## Command Dashboard

![Command Dashboard](docs/screenshots/command-dashboard.png)

## Intelligence Map

![Intelligence Map](docs/screenshots/intelligence-map.png)
```

---

## 27. Project Vision

We want disaster management to move from:

```text
Reactive
   ↓
Data-Driven
   ↓
Predictive
   ↓
Intelligent
   ↓
Proactive
```

CrisisConnect AI aims to help emergency teams spend less time collecting and interpreting scattered information and more time taking the right action at the right location.

---

# CrisisConnect AI

### **Predict the risk. Detect the incident. Understand the impact. Prioritize the response. Recommend the action. Notify the people.**

---

## Hackathon Reference

This README is aligned with the **CrisisConnect AI — AWS Cloud Club × CSMU Builders Breakout Hackathon 2026 Problem Statement**, including its requirements for disaster-risk prediction, vulnerable-area/asset identification, citizen reporting, AI classification and prioritization, rescue/evacuation intelligence, AWS integration, functional modules, expected workflow and judging criteria.

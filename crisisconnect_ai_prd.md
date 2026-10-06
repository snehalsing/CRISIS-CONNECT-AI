# CRISISCONNECT AI

**Disaster Intelligence, Early Warning & Emergency Response Platform**
**Product Requirements Document (PRD)**

**Color Palette Reference:**

* PRIMARY CLAY: `#BE8F87`

* BLUSH: `#DEB9AD`

* SAND: `#DEC9BF`

* COOL GRAY: `#B5B7BB`

* SAGE GRAY: `#9BADAF`

* CRITICAL: `#EF4444`

* HIGH RISK: `#F97316`

* MEDIUM: `#F59E0B`

* SAFE: `#22C55E`

*Hackathon implementation blueprint for Antigravity / coding-agent execution*

## 1. Executive Summary

CrisisConnect AI is a cloud-native disaster intelligence and emergency response platform. The product should convert heterogeneous environmental data and real-time citizen reports into actionable intelligence for emergency teams: predict where risk is rising, identify people and infrastructure that may be affected, rank incidents, recommend response or evacuation actions, and notify relevant users.

The source problem statement defines the core challenge as answering four questions: where the disaster is likely to occur, who/what will be affected, which incidents responders should handle first, and what the safest/fastest response or evacuation plan is.

This PRD turns the supplied problem statement into an implementable frontend/product blueprint. Where the source does not prescribe an implementation detail, this document labels it as a product recommendation rather than a mandatory requirement.

## 2. Source Requirements Summary

| Area | Required capability | 
| ----- | ----- | 
| **Disaster risk prediction** | Generate geographical risk score / level for hazards such as urban flooding, river overflow, landslides, extreme rainfall, earthquakes and wildfires. | 
| **Vulnerable areas & assets** | Identify potentially affected population, residential areas, hospitals, schools, roads/highways, railway stations, bridges, power infrastructure, emergency shelters and other critical infrastructure. | 
| **Citizen reporting** | Accept location, image, description, incident category, optional contact information and timestamp. | 
| **AI incident intelligence** | Determine category, severity, potential impact, urgency, recommended response team and priority level. | 
| **Rescue & evacuation intelligence** | Recommend rescue route, evacuation route, emergency response location, relief distribution priority and nearest shelter/hospital where applicable. | 
| **AI summary** | Generate concise emergency briefing from the available situation data. | 
| **Alerts** | Emergency notifications, incident escalation and risk alerts. | 
| **Cloud/AWS** | Use AWS services meaningfully; suggested services include Amplify/S3, API Gateway, Lambda, DynamoDB, Bedrock, SNS, SageMaker/Lambda, CloudWatch, Cognito, Secrets Manager and CDK/CloudFormation. | 
| **Expected flow** | Detect → Predict → Analyze → Prioritize → Respond → Notify. | 

## 3. Product Goals

* Create one shared operational picture for citizens and emergency responders.

* Make AI decisions visible and actionable rather than hidden in the backend.

* Use the map as the primary spatial interface for risk, incidents, infrastructure, shelters and routes.

* Keep emergency information visually obvious through consistent P1/P2/P3 semantics.

* Demonstrate a complete, deployable hackathon flow rather than many disconnected features.

* Demonstrate AWS through real functionality instead of service-count decoration.

## 4. Target Users

| User | Primary needs | 
| ----- | ----- | 
| **Citizen** | Report an emergency quickly, share location/evidence, see relevant alerts, track submitted reports and find safety resources. | 
| **Emergency responder** | See live incidents, risk zones and impacted assets; understand AI prioritization; dispatch teams; plan routes; escalate incidents. | 
| **Emergency/admin operator** | Monitor overall situation, verify system status, coordinate resources and publish alerts. | 
| **Hackathon judge/demo viewer** | Understand the value proposition and see the Detect → Predict → Analyze → Prioritize → Respond → Notify flow within minutes. | 

## 5. Product & UX Principles

* Calm by default, urgent only when the situation is urgent.

* Neutral surfaces; semantic colors are reserved for emergency meaning.

* Map-centric responder experience.

* Citizen flow should be mobile-first and minimal.

* Every AI recommendation should expose the decision, confidence where available, and a concise reason.

* Every critical object should have a next action: dispatch, escalate, route, notify or track.

* Use clear status and timestamps so responders can understand recency.

## 6. Final Visual Design System

The user-provided palette image is the basis for all non-semantic interface colors. The warm clay, blush, sand, cool gray and sage-gray tones replace the previously suggested navy/cyan palette. The emergency colors remain semantic and unchanged.

| Token | Hex | Role | Recommended use | 
| ----- | ----- | ----- | ----- | 
| **Primary Clay** | `#BE8F87` | Brand / primary accent | Brand mark, selected navigation, subtle primary accents, non-emergency CTA emphasis. | 
| **Blush** | `#DEB9AD` | Secondary accent | Soft highlights, AI/info panels, subtle focus states, supporting visual accents. | 
| **Sand** | `#DEC9BF` | Background tint | Page background sections, empty states, gentle map overlays where appropriate. | 
| **Cool Gray** | `#B5B7BB` | Neutral UI | Borders, dividers, inactive map features, controls, muted surfaces. | 
| **Sage Gray** | `#9BADAF` | Calm support accent | Secondary status, resource chips, non-critical map infrastructure, calm data visualizations. | 
| **Critical** | `#EF4444` | P1 | Critical incidents, life-threatening status, escalation actions. | 
| **High Risk** | `#F97316` | P2 | High-risk incidents and zones. | 
| **Medium Risk** | `#F59E0B` | P3 | Medium-risk incidents and zones. | 
| **Safe Green** | `#22C55E` | Safe | Safe zones, resolved items, available resources. | 
| **Primary Text** | `#17191C` | Typography | Headings and high-priority text. | 
| **Secondary Text** | `#5F6368` | Typography | Descriptions, labels and supporting metadata. | 
| **White** | `#FFFFFF` | Surface | Cards, modals, major controls. | 
| **Dark Graphite** | `#16181D` | Navigation | Sidebar/header only where a strong anchor is needed; not the dominant page background. | 

*Color rule: the four semantic emergency colors are the only strong alarm colors. The five provided palette colors form the visual identity and neutral-support system. Do not introduce cyan, neon blue, purple or unrelated accent colors.*

## 7. Information Architecture

| Section | Key screens | 
| ----- | ----- | 
| **Public/Citizen** | Landing / Live Situation, Report Emergency, My Reports, Alerts, Nearby Shelters/Hospitals | 
| **Responder** | Command Dashboard, Intelligence Map, Incidents, Incident Detail, Impact Analysis, Response Planner, Alert Center, AI Briefing | 
| **Admin/Platform** | Resources, Analytics/Reports, Settings, System/Feed status, authentication and access management. | 

## 8. Detailed Frontend Requirements

### 8.1 Landing / Live Situation

* Show product name, current operating status and a concise live situation summary.

* Expose the current dominant hazard and risk score/level.

* Show key KPIs: population at risk, active incidents, critical incidents and affected assets.

* Provide primary entry points: Report Emergency, View Live Map and Alerts.

* On mobile, prioritize emergency action and current alerts above secondary analytics.

### 8.2 Citizen: Report Emergency

* Incident category selector with locally relevant hazard types.

* Location input with current-location action and manual correction.

* Image upload / camera capture.

* Description text area.

* Optional contact information.

* Automatic timestamp.

* Submission confirmation with AI processing status and generated incident ID.

* Post-submit status page showing classification, severity, priority, response status and timeline.

### 8.3 Responder: Command Dashboard

* Live P1/P2/P3 incident counters.

* Large Intelligence Map as the primary surface.

* AI Situation Summary card.

* Priority incident queue.

* Response resource panel.

* Recent alerts feed.

* Weather and risk forecast summary when data is available.

* System status strip for data feeds, AI models, communication and map services.

### 8.4 Intelligence Map

* Map layers should include: risk zones, incident locations, critical infrastructure, shelters/hospitals, and suggested routes. Optional layers can include population density, residential areas, schools, roads/highways, railway stations, bridges and power infrastructure.

* Risk zones use the four semantic colors with transparency; avoid opaque overlays that hide roads.

* Incidents use P1/P2/P3 color semantics.

* Infrastructure should remain mostly neutral so risk and incidents stand out.

* Selecting a map object should open a detail drawer with context and next actions.

* Route visualization should distinguish recommended and alternate routes.

### 8.5 Incident Detail Drawer

* Incident ID, category, severity, priority, confidence where available, timestamp and location.

* Citizen description and image evidence.

* AI impact assessment: estimated people affected, nearby critical infrastructure and risk-zone overlap where available.

* AI recommendation and recommended response team.

* Actions: dispatch, view route, escalate, send alert and update status.

* Incident timeline showing received → analyzed → assigned → in progress → resolved.

### 8.6 Response Planner

* Select target incident or zone.

* Show recommended rescue or evacuation route on map.

* Show route distance and ETA if routing data is available.

* Show nearest shelter/hospital where applicable.

* Show recommended response team and response location.

* Explain route choice in plain language.

* Provide alternate route and escalation options when the primary route is unsafe.

### 8.7 Alerts

* Risk alerts

* Emergency notifications

* Incident escalation notifications

* Read/unread and severity indicators

* Targeting by role/region if supported

* Clear audit timestamp and originating incident/risk signal

## 9. AI Intelligence Requirements

The source document encourages an AI/ML pipeline. The exact model family is not prescribed; implementation choices may be made by the engineering team as long as the required outputs are demonstrated.

| AI task | Input | Required output | Frontend presentation | 
| ----- | ----- | ----- | ----- | 
| **Risk prediction** | Historical + environmental data | Disaster Risk Score / level | Risk card + geographic heat/zone overlay + trend | 
| **Incident classification** | Citizen report text/image | Incident category + severity | AI classification block + incident badge | 
| **Impact analysis** | Disaster zone + population/infrastructure data | Potential impact | Affected population + asset list + map highlights | 
| **Response recommendation** | Risk + incidents + affected assets | Priority + response plan | Recommended action + route + team | 
| **AI summary** | All available signals | Concise emergency briefing | Situation Summary card + changes since last update | 

## 10. AI Explainability UI

Recommended enhancement: every AI recommendation should offer a “Why?” view. Example factors can include number of people potentially trapped, critical infrastructure proximity, increasing hazard level, reported severity and route safety. This is a product recommendation for trust and judge clarity, not a source-mandated model behavior.

## 11. AWS Architecture Requirements

| Concern | Suggested AWS service | Frontend/product responsibility | 
| ----- | ----- | ----- | 
| **Web app hosting** | AWS Amplify / Amazon S3 | Deploy the web app and manage environments. | 
| **API layer** | Amazon API Gateway | Expose incident, dashboard, alert and AI endpoints. | 
| **Backend processing** | AWS Lambda | Process submissions, scoring workflows and integrations. | 
| **Incident database** | Amazon DynamoDB | Store incidents, statuses, priorities, users/resources and alert metadata. | 
| **Images/documents** | Amazon S3 | Store citizen evidence and related files. | 
| **Generative AI** | Amazon Bedrock | Generate incident summaries and response explanations/recommendations where appropriate. | 
| **Notifications** | Amazon SNS | Send emergency/risk/escalation notifications. | 
| **ML/model deployment** | SageMaker / Lambda | Run risk prediction or classification model as appropriate. | 
| **Monitoring** | CloudWatch | Track system health, errors and operational metrics. | 
| **Authentication** | Cognito | User sign-in and role-based access. | 
| **Secrets** | Secrets Manager | Protect credentials/configuration secrets. | 
| **Infrastructure** | CDK / CloudFormation | Repeatable cloud deployment. | 

*AWS selection principle: use a small number of services deeply. The problem statement explicitly says that functional, meaningful AWS usage is more valuable than using many services superficially.*

## 12. Data Sources / Demo Data

The source suggests publicly available datasets including Indian sources such as IMD rainfall data, National Water Data Portal, ISRO/Bhuvan disaster-management data, Bhuvan flood vulnerability/early-warning data and NDEM; and international sources such as NASA GDIS, Copernicus EMS, USGS, NOAA and Sentinel-1/2 imagery.

For the hackathon MVP, implement one strong flood/extreme-rainfall scenario end-to-end. Keep the data model extensible so the same incident and map architecture can later support landslides, earthquakes and wildfires.

## 13. Core Domain Model

| Entity | Key fields | 
| ----- | ----- | 
| **Incident** | id, timestamp, location, category, description, imageUrl, contact(optional), AI severity, priority, confidence, impact, recommendedTeam, status | 
| **RiskZone** | id, hazardType, geometry, score, riskLevel, validFrom, validTo, source, trend | 
| **Asset** | id, type, name, location, capacity/status where applicable, criticality, affected | 
| **RoutePlan** | id, incidentId/zoneId, routeType, geometry, distance, eta, safetyReason, alternateRoute | 
| **Alert** | id, type, severity, message, target, sourceId, timestamp, status | 
| **Resource** | id, type, name, location, availability, currentAssignment | 
| **AIAnalysis** | id, objectId, classification, severity, priority, confidence, summary, recommendation, rationale, createdAt | 

## 14. API Contract (Recommended)

| Endpoint | Purpose | 
| ----- | ----- | 
| `POST /incidents` | Create citizen incident report metadata and receive incident ID. | 
| `POST /incidents/{id}/evidence` | Upload/attach image evidence via S3 flow. | 
| `GET /incidents` | List/filter live incidents by priority/status/hazard/location. | 
| `GET /incidents/{id}` | Get incident detail and AI analysis. | 
| `POST /incidents/{id}/analyze` | Trigger/re-run AI classification and impact analysis. | 
| `PATCH /incidents/{id}/status` | Update response status. | 
| `GET /risk-zones` | Return current risk zones and scores. | 
| `GET /assets` | Return map assets/resources, optionally filtered by type. | 
| `POST /response-plans` | Generate/return route and response plan. | 
| `POST /alerts` | Create/send alert. | 
| `GET /alerts` | List alerts. | 
| `GET /dashboard/summary` | Return dashboard KPIs and AI briefing data. | 

## 15. Functional Acceptance Criteria

* A responder can open the dashboard and see current risk, incident priorities, affected assets and AI summary.

* A user can submit an incident with location, description and optional image.

* A submitted incident receives a visible category, severity and priority result.

* Critical incidents can be escalated and surfaced at the top of the queue.

* Incidents and risk zones are visible geographically.

* A responder can inspect affected infrastructure and population information where demo data supports it.

* A response/evacuation route can be shown for a selected incident or zone.

* A responder can see a recommended team/location and actionable next step.

* Alerts can be generated for risk changes and incident escalation.

* The system demonstrates the end-to-end Detect → Predict → Analyze → Prioritize → Respond → Notify flow.

* The deployed app is accessible and the core demo flow works without manual database edits.

## 16. Non-Functional Requirements

* **Responsive:** citizen experience must work on mobile widths; responder console optimized for desktop/laptop.

* **Accessible:** clear contrast, keyboard-friendly controls, readable type and non-color-only status communication.

* **Performance:** map and dashboard should show loading skeletons and avoid blocking the full UI while data/AI loads.

* **Reliability:** clear empty, loading, error and degraded-state experiences for external data sources.

* **Security:** role-aware access, protected uploads, no secrets embedded in frontend, validated inputs.

* **Observability:** errors and key cloud operations should be traceable through the chosen AWS monitoring stack.

## 17. Recommended Hackathon Demo Flow

1. **Prediction:** Open dashboard: show flood risk rising to a high score in the target region.

2. **Detection:** Open a simulated citizen report containing location, description and image.

3. **Understanding:** Show AI classification: flood / critical / P1, plus confidence and impact.

4. **Prioritization:** Incident jumps to the top of the command queue.

5. **Impact:** Open the incident and show affected population, hospital/road/shelter context.

6. **Response:** Generate the recommended rescue/evacuation route and response team.

7. **Notify:** Send/escalate an alert and show it in the alert center.

8. **Close the loop:** Update response status and show the incident timeline.

## 18. Judging Rubric Alignment

| Rubric | Points | How the product should demonstrate it | 
| ----- | ----- | ----- | 
| **Proper Project Built** | 30 | Working citizen flow, responder dashboard, map, AI classification/prioritization, response plan, strong UI/UX and end-to-end workflow. | 
| **AWS Integration** | 30 | Show actual integrations to the chosen AWS services, not logos only; document each service purpose. | 
| **Deployment** | 20 | Live deployed application, responsive UX, reliable cloud architecture and usable demo path. | 
| **README** | 10 | Setup, architecture, AWS services, screenshots, APIs, datasets and documentation. | 
| **Social Media Post** | 10 | Clear project story, demo/media quality, AWS/Cloud Club/CSMU visibility. | 

## 19. Build Plan for Antigravity

| Phase | Deliverables | 
| ----- | ----- | 
| **Phase 1 — Foundation** | Project scaffold, routing, palette, typography, layout shell, authentication placeholders/roles, responsive breakpoints. | 
| **Phase 2 — Data layer** | Types/models, API client, mock data provider, loading/error states, incident/risk/asset schemas. | 
| **Phase 3 — Citizen** | Report emergency flow, image upload UI, location UI, report tracking, alerts. | 
| **Phase 4 — Responder** | Dashboard, priority queue, intelligence map, incident detail drawer, infrastructure panels. | 
| **Phase 5 — AI** | Risk score display, incident classification, severity/priority, AI summary, recommendation and rationale. | 
| **Phase 6 — Response** | Route planner, shelters/hospitals, team/resource assignment, escalation and notifications. | 
| **Phase 7 — AWS** | Wire API Gateway/Lambda/DynamoDB/S3/Bedrock/SNS/Cognito/monitoring according to selected scope. | 
| **Phase 8 — QA & deployment** | Responsive QA, accessibility, empty/error states, demo seed data, deployment, README and demo script. | 

## 20. Component Inventory

* `AppShell`, `Sidebar`, `TopBar`, `Breadcrumbs`

* `RiskBadge`, `PriorityBadge`, `StatusBadge`, `KPIStatCard`

* `IncidentCard`, `PriorityQueue`, `IncidentTimeline`, `IncidentDetailDrawer`

* `AIInsightCard`, `AISummaryCard`, `ExplainDecisionPanel`

* `MapShell`, `MapLegend`, `MapLayerControl`, `MapMarker`, `RiskZoneOverlay`, `RouteOverlay`

* `ReportWizard`, `LocationPicker`, `ImageUploader`, `IncidentCategorySelector`

* `AlertFeed`, `AlertComposer`, `NotificationToast`

* `ResourceCard`, `ResourceList`, `ShelterCard`, `HospitalCard`

* `RoutePlanCard`, `DispatchAction`, `EscalationAction`

* `LoadingSkeleton`, `EmptyState`, `ErrorState`, `Offline/DegradedState`

## 21. Copy & Status Language

| State | Preferred UI copy | 
| ----- | ----- | 
| **P1** | Critical / Immediate Action | 
| **P2** | High Risk / Respond Soon | 
| **P3** | Medium Risk / Monitor | 
| **Safe** | Safe / No Active Threats | 
| **Processing** | Analyzing report… | 
| **Awaiting** | Awaiting response | 
| **In progress** | Response in progress | 
| **Resolved** | Incident resolved | 

## 22. Safety / Trust Requirements

* Do not present AI outputs as guaranteed truth; label them as recommendations/assessments.

* Display source/timestamp where feasible for live risk information.

* Keep citizen contact information optional and minimize exposure in responder views unless required for action.

* Never expose cloud credentials or secrets in browser code.

* Provide fallback messaging when live data, routing or AI services are unavailable.

## Appendix A — Source-to-Product Traceability

| Source section | PRD interpretation | 
| ----- | ----- | 
| **Problem statement** | Predict risk, identify affected communities/infrastructure, prioritize incidents, recommend response. | 
| **Challenge A** | Risk score / level for geographical areas. | 
| **Challenge B** | Affected population and critical assets represented geographically. | 
| **Challenge C** | Citizen report with location/image/description/category/optional contact/timestamp. | 
| **Challenge D** | AI category, severity, impact, urgency, response team and priority. | 
| **Rescue & evacuation** | Routes, response locations, relief priority, nearest shelter/hospital. | 
| **AI layer** | Risk prediction, classification, impact analysis, response recommendation, AI summary. | 
| **AWS** | Meaningful AWS integration across hosting, API, compute, data, AI, notifications, monitoring and auth. | 
| **Minimum modules** | Citizen interface, admin dashboard, AI engine, intelligence map, alert system. | 
| **Expected outcome** | Detect → Predict → Analyze → Prioritize → Respond → Notify. | 
| **Judging** | 30 project + 30 AWS + 20 deployment + 10 README + 10 social media. | 

## Appendix B — Definition of Done

* All core screens are wired into navigation and responsive.

* All core requirements have a visible UI path.

* At least one complete flood/extreme-rainfall scenario can be demonstrated from prediction to notification.

* AI outputs are visible in the incident and command-center flows.

* Map displays risk zones, incidents and key infrastructure/resources.

* Core API/AWS paths work in the deployed environment.

* No major loading, broken-image, overflow or empty-state defects remain.

* README includes architecture, setup, AWS services, APIs, datasets and screenshots.

* Demo can be delivered in a repeatable sequence without hand-editing production data.

## Appendix C — Antigravity Build Instruction

Use this document as the product source of truth. Build in vertical slices, prioritize the working hackathon demo path, preserve the palette exactly, and keep each AWS integration functional. Do not invent new product areas unless they improve a stated requirement.
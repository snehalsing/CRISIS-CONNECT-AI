# CrisisConnect AI

CrisisConnect AI is a next-generation, AWS-powered disaster intelligence, early warning, and emergency response platform. It fundamentally accelerates the mission-critical flow of crisis management: **Detect → Predict → Analyze → Prioritize → Respond → Notify**.

Designed for resilience during catastrophic events, the platform seamlessly connects mobile-first citizen reporting with an advanced, AI-driven responder command dashboard.

## 🚀 Key Features

*   **Citizen Reporting (Mobile-First):** Lightweight, geolocation-aware PWA allowing citizens to instantly report hazards, upload imagery, and receive real-time updates and evacuation routing.
*   **Command Dashboard:** High-contrast, premium dark/light mode interface providing a 10,000-foot view of the operational theater.
*   **Live Intelligence Map:** Real-time Mapbox/Leaflet integration visualizing risk zones, infrastructure, and priority incidents.
*   **AI Triage & Explainability:** Generative AI deeply analyzes incoming reports to calculate impact radius, predict infrastructure collapse, and recommend specific response dispatches (e.g., Swift Water Rescue). Explainability panels ensure transparent, non-black-box decision support.
*   **Evacuation Planner:** Dynamic routing logic that accounts for flooded roads and generates safe harbor routes with real-time shelter capacity metrics.
*   **Judge Demo Mode:** Built specifically for hackathon judging. Press `Ctrl + Shift + D` on the Dashboard to instantly simulate a severe, localized escalation event (Damodar River surge) to demonstrate real-time reactivity.

## 🏗️ Architecture & AWS Integration

CrisisConnect AI is built as a cloud-native React SPA (Vite + TypeScript + Tailwind CSS) designed to plug directly into AWS serverless architecture.

### Centralized API Service Layer
All data flows through `src/services/api.ts`. This abstracts the UI components from the underlying network requests. 

### AWS Services Utilized
*   **AWS API Gateway & AWS Lambda:** Handles RESTful endpoints for incident ingestion and triage.
*   **Amazon DynamoDB:** NoSQL data store for real-time, highly-available incident tracking.
*   **Amazon S3:** Cloud storage for citizen-uploaded disaster imagery.
*   **Amazon Cognito:** Secure, scalable identity management for Responder Command Staff.
*   **Amazon Bedrock (Generative AI):** Powers the backend AI assessment, priority scoring, and evacuation rationalization.

## 🛠️ Setup & Local Development

The project includes a robust **Offline Fallback Mode**. If AWS credentials are not provided, the application automatically intercepts network calls and simulates local mock data. This ensures the app is 100% functional out-of-the-box for hackathon judging.

### Prerequisites
*   Node.js (v18+)
*   npm

### Installation
```bash
git clone https://github.com/your-org/crisisconnect-ai.git
cd crisisconnect-ai
npm install
```

### Environment Variables
To connect the application to live AWS infrastructure, create a `.env` file in the project root:

```env
# AWS Infrastructure Environment Variables

# API Gateway Endpoint (Routes to Lambda)
VITE_AWS_API_GATEWAY_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/prod

# Amazon Cognito Configuration
VITE_AWS_COGNITO_USER_POOL_ID=us-east-1_xxxxxxxxx
VITE_AWS_COGNITO_CLIENT_ID=xxxxxxxxxxxxxxxxx

# Amazon S3 Bucket (For citizen incident imagery)
VITE_AWS_S3_BUCKET_NAME=crisisconnect-citizen-reports-us-east-1
VITE_AWS_REGION=us-east-1
```
*(See `.env.example` for reference. If `VITE_AWS_API_GATEWAY_URL` is omitted, the app defaults to Local Mock Mode).*

### Running the App
```bash
# Start the local development server
npm run dev

# Build for production
npm run build
```

## 🎨 Design System

CrisisConnect AI uses a strict, semantic design system to minimize cognitive load during high-stress scenarios.
*   **Primary Elements:** Clay (`#BE8F87`), Sand (`#DEC9BF`), Graphite (`#16181D`).
*   **Semantic Risk Tiers (Exclusive):**
    *   **P1 Critical:** Red (`#EF4444`)
    *   **P2 High Risk:** Orange (`#F97316`)
    *   **P3 Medium Risk:** Amber (`#F59E0B`)
    *   **Safe/Resolved:** Green (`#22C55E`)

## ♿ Quality Assurance & Accessibility
*   **Error Boundaries:** Graceful failure screens prevent white-screen crashes in the event of corrupt telemetry data.
*   **Offline Mode:** Persistent offline banners notify operators when running on cached data.
*   **Accessibility:** Colors are never used as the sole indicator of priority. Badges explicitly render text (e.g., `P1 Critical`). Keyboard focus rings (`focus-visible`) are enforced across the command dashboard for rapid navigation.

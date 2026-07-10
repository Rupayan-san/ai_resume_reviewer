# AI resume reviewer

## MVP
- upload PDF
- extract text from pdf
- send to gemini
- return analysis

## Return
    - ATS Score
    - Strengths
    - Weaknesses
    - Missing Skills
    - Suggestions

## Workflow
Client
↓
POST /resume/review
↓
Resume Controller
↓
Resume Service
↓
PDF Parser
↓
Prompt Builder
↓
LLM API
↓
Response Formatter
↓
Database
↓
JSON Response

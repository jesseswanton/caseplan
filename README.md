# CasePlan Application

CasePlan is a web-based application designed to manage case plans for individuals, with features like risk assessment, protective factors, and mini-CPT scoring. The application uses Next.js, React, and Bootstrap for the frontend and is deployed on Vercel.

## Features

### 1. Risk Factors Tab
- Includes a PSRA Risk Level dropdown with options: **Low**, **Moderate**, **High**.
- Provides dynamic checkboxes in sections such as:
  - Personality Pattern
  - Family, Associates, Attitudes, School/Work, and Substance Abuse.
  
### 2. Protective Factors Tab
- Sections with checkboxes can be added dynamically:
  - Family
  - Recreation
  - Associates
  - Attitudes
  - School/Work
  
### 3. Mini CPT Tab
- Includes 3 subtabs: **Assessment**, **Test**, and **Scoring**.
- **Assessment**: Includes a text field for "Test Administrator" and a date picker for "Test Date".
- **Test**: Displays numbered questions with dropdowns, text fields, and the ability to add custom questions with different input types.
- **Scoring**: Displays the results of the test, including "Test Results" and the **Risk Level**.

## Installation

Clone the Repository:
```bash
git clone https://github.com/jesseswanton/caseplan
cd caseplan
```

From your IDE:
1. ```npm install```

2. ```npm run dev```
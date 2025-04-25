# News Component Demo

This project implements a News Component based on the provided screenshot. The implementation uses React, TypeScript, and Ant Design to create a highly accurate reproduction of the design.

## Features

- Exact match to the design provided in the screenshot
- TypeScript interfaces for data structure
- Highlight of keywords in text
- Responsive design
- Optimized performance with useMemo and React.memo

## Technologies Used

- React 18
- TypeScript
- Ant Design
- SCSS for styling
- Day.js for date formatting

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Component Structure

The news component consists of:

- Header section with date, reach, and traffic information
- Title section
- Source information with domain, country, language, and authors
- Content section with highlighted keywords
- Footer section with tags and action icons

## Data Structure

The component uses the following interfaces:

```typescript
interface IData_TagItem {
  value: string;
  count: number;
}

interface IData_TrafficItem {
  value: string;
  count: number;
}

interface IData_SnippetNews {
  ID: number;
  TI: string;
  AB: string;
  URL: string;
  DOM: string;
  DP: string;
  LANG: string;
  REACH: number;
  KW: IData_TagItem[];
  AU: string[];
  CNTR: string;
  CNTR_CODE: string;
  SENT: string;
  TRAFFIC: IData_TrafficItem[];
  FAV: string;
  HIGHLIGHTS: string[];
}
``` 
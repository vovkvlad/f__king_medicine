# Repository Description: F**king Medicine

## Overview
**F**king Medicine** is a medication tracking web application built to help users keep track of how many times they've taken specific pills or medications. The app was created by a developer who got frustrated with losing track of their prescribed eye medication and built this solution over 2 evenings.

## Project Details
- **Name**: f_medicine
- **Version**: 0.1.0
- **Type**: Web application (Next.js/React)
- **Purpose**: Personal medication tracking and progress monitoring

## Technology Stack
- **Framework**: Next.js 10.0.3
- **Frontend**: React 17.0.1
- **UI Library**: Material-UI 4.11.2 (with dark theme)
- **Date Handling**: Day.js 1.9.7
- **Package Manager**: Yarn
- **Persistence**: Browser localStorage (with modular backend system)

## Architecture & Structure

### Core Components
```
├── pages/                    # Next.js pages
│   ├── _app.js              # App wrapper with Material-UI theme
│   ├── _document.js         # Custom document for SSR
│   └── index.js             # Main page entry point
├── src/
│   ├── components/          # UI components
│   │   ├── AddNewMedicine/  # Form to add new medications
│   │   ├── Cards/           # Display medication cards
│   │   ├── Header/          # App header
│   │   └── MainContainer/   # Main app container
│   ├── persistance-back-ends/
│   │   └── localStorage.js  # Local storage implementation
│   └── usePills.js          # Custom hook for pill management
└── theme.js                 # Material-UI dark theme (orange/amber)
```

### Key Features
1. **Add Medications**: Users can add new pills/medications to track
2. **Progress Tracking**: Track how many times a medication has been taken vs. required frequency
3. **Take Medication**: Increment progress when medication is taken
4. **Reset Progress**: Reset daily/periodic progress counters
5. **Remove Medications**: Delete medications from tracking list
6. **Persistent Storage**: Data saved in browser localStorage

### Core Functionality (`usePills.js`)
The main logic is encapsulated in a custom React hook that provides:
- `onPillAdd`: Add new medication to tracking list
- `onPillTaken`: Increment progress when medication is taken
- `onPillRemoved`: Remove medication from list
- `onProgressReset`: Reset progress counter
- Automatic persistence to backend on state changes

### Design Philosophy
- **Dark Theme**: Uses Material-UI dark theme with orange primary and amber secondary colors
- **Modular Backend**: Designed with pluggable persistence backends (currently only localStorage)
- **Simple UI**: Focus on functionality over aesthetics
- **Quick Development**: Built for speed rather than code quality (acknowledged by author)

## Current Limitations
- **Local Only**: Data stored only in browser localStorage
- **No Cloud Sync**: Cannot sync progress across devices
- **Code Quality**: Admits to lower code quality due to rapid development
- **Basic Features**: Minimal viable product with core functionality only

## Development Roadmap
- **Potential Future Improvements**: Cloud synchronization for cross-device tracking
- **Open to Contributions**: Author welcomes PRs and feature suggestions
- **Uncertain Timeline**: Author may or may not continue development

## Development Setup
```bash
# Install dependencies
yarn install
# or
npm install

# Run development server
yarn dev
# or
npm run dev

# Access at http://localhost:3000
```

## Target Audience
- Individuals who need to track multiple medications
- People frustrated with losing track of pill schedules
- Anyone needing a simple, fast medication tracking solution

## Author's Note
This app was born out of personal frustration and built as quickly as possible to solve an immediate problem. The author encourages contributions and feedback but makes no guarantees about future development or code quality improvements.
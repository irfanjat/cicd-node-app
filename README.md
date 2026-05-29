# CI/CD Node.js App

A Node.js application with automated CI/CD pipeline via GitHub Actions. On every push, the pipeline installs dependencies, runs tests, and reports status.

## Stack

- Node.js
- GitHub Actions
- npm

## Quick Start

```bash
npm install
npm test
npm start
```

## CI Pipeline

The workflow in `.github/workflows/` runs on every push:

1. Install dependencies
2. Run test suite
3. Report results

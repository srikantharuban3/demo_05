# demo_05
Demo repository 05 - Test Automation with CI/CD Pipeline

## Overview
This repository contains a comprehensive test suite with automated CI/CD pipeline that runs tests and generates detailed reports.

## CI/CD Pipeline Features
- ✅ Automated testing on push/PR
- 📊 Test coverage reporting
- 📋 HTML test reports
- 🚀 Automated deployment (on main branch)
- 💬 PR comments with test results

## Test Suite
The test suite is defined in `TestSuite.md` and includes:
- User Registration Tests
- User Login Tests  
- Password Reset Tests
- Profile Management Tests
- Product Search Tests

## Running Tests Locally
```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Generate HTML report
npm run test:html
```

## Pipeline Status
The CI/CD pipeline runs automatically on:
- Push to `main` or `develop` branches
- Pull requests to `main` branch

View the latest pipeline results in the [Actions tab](../../actions).
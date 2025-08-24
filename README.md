# Simple App

A simple Node.js Express app with multiple routes and in-memory user data.

## Features

- `/` → Welcome message
- `/users` → Get all users (GET)
- `/users/:id` → Get single user by ID (GET)
- `/users` → Add new user (POST with JSON body)

## Project Setup

1. Install dependencies:
```bash
npm install
2. Run the app
npm start
3. Access in browser
http://localhost:3000


Simple App with CI/CD

This repository contains a simple Node.js application with automated Continuous Integration (CI) and Continuous Deployment (CD) pipelines using GitHub Actions.

CI Pipeline

Trigger: Runs on every push to the branch (e.g., main or new)

Steps:

Checks out the code

Sets up Node.js

Installs dependencies (npm ci)

Runs linting (npm run lint)

Runs tests (npm test)

Builds the project (npm run build)

Zips the app and uploads it as an artifact

CD Pipeline

Trigger: Runs automatically when the CI Pipeline completes successfully

Steps:

Checks out the repository

Downloads the artifact from the CI workflow

Unzips the artifact

Installs dependencies

Starts the application on the self-hosted runner

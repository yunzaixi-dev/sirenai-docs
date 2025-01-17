# Technical Architecture

## Overview
This document outlines the technical architecture decisions and technology stack choices for our project.

## Technology Stack

### Objectives
- Ultimate Frontend Performance
  - Full FPS across all platforms
  - Ultra-low latency
  - Comprehensive offline support
- Maximum Data Security
  - End-to-end encryption
  - Local encryption
  - Multi-layer password protection
- Cross-Platform Support
  - Mobile: Android, iOS
  - Desktop: Windows, MacOS, Linux
- Cross-Platform Sync
  - End-to-end encrypted synchronization
  - Based on custom log-based sync engine
- Internationalization
  - Built with Flutter intl
  - Full multi-language support

### Frontend
- Framework: Flutter
  - Chosen for optimal native performance
  - True cross-platform compatibility
- Development Language: Dart
- State Management & DI
  - flutter_bloc for state management
  - get_it for dependency injection
- Local Database: Objectbox
  - Currently the only mature vector database solution for Flutter
  - Superior performance compared to SQLite
- Internationalization: Flutter intl

### Backend
- Development Language: TypeScript/Node.js
- Framework: NestJS
- Database: PostgreSQL
- ORM: TypeORM
- Authentication: Email-based authentication system

### DevOps & Infrastructure
- Version Control: Git
- CI/CD: GitHub Actions
- Deployment: Docker Compose
- Cloud Provider: TBD (Cost-effective solution)

## Key Architectural Decisions

### 1. Local-First Architecture
- Prioritize client-side processing
  - Improved performance
  - Enhanced privacy
  - Reduced server costs
- Migrate logic to Flutter frontend where possible
- Minimize server-side dependencies

### 2. Monolithic Backend
- Simplified backend architecture
- Avoid unnecessary microservices complexity
- Focus on essential server-side operations

### 3. Security-First Approach
- Comprehensive encryption strategy
  - All frontend data encrypted
  - Multiple encryption layers
- HTTPS enforcement
- Biometric authentication integration
- Regular security audits

## Development Guidelines

### Code Organization
- Feature-based folder structure
- Clear separation of concerns
- Reusable components and utilities

### Testing Strategy
- Unit tests for business logic
- Integration tests for API endpoints
- E2E tests for critical user flows

### Next Steps
- Develop strategy for Node.js to Flutter migration
- Implement core security features
- Set up cross-platform development environment

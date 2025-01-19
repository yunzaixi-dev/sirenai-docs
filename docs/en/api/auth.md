# Authentication API Documentation

This document provides detailed information about all authentication-related API endpoints.

## Basic Information

- Base URL: `https://n1-api.sirenai.org/v1`
- All requests and responses use JSON format
- All timestamps use ISO 8601 format
- All requests must set the `Content-Type: application/json` header

## API Endpoints

### 1. User Registration
- **Endpoint**: `/auth/register`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string",
    "verificationCode": "string",
    "recaptchaToken": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "success",
    "userId": "string"
  }
  ```

### 2. Email Verification Code
- **Endpoint**: `/auth/email/verify`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "string",
    "type": "string" // "register" or "reset-password"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "success"
  }
  ```

### 3. User Login
- **Endpoint**: `/auth/login`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string",
    "recaptchaToken": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "token": "string",
    "user": {
      "id": "string",
      "email": "string",
      "preferences": {
        "theme": "light|dark",
        "language": "zh|en"
      }
    }
  }
  ```

### 4. Password Reset Request
- **Endpoint**: `/auth/password/reset-request`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "string",
    "verificationCode": "string",
    "recaptchaToken": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Password reset link sent"
  }
  ```

### 5. Password Reset
- **Endpoint**: `/auth/password/reset`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "token": "string",
    "newPassword": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Password reset successful"
  }
  ```

### 6. User Preferences
- **Endpoint**: `/auth/preferences`
- **Method**: PUT
- **Headers**: Authorization: Bearer {token}
- **Request Body**:
  ```json
  {
    "theme": "light|dark",
    "language": "zh|en"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "preferences": {
      "theme": "light|dark",
      "language": "zh|en"
    }
  }
  ```

## Security Notes

### Rate Limits
- Login endpoint: 5 attempts per IP per minute
- Email verification code: 3 requests per email per hour
- Password reset: 3 attempts per account per day
- Registration: 3 accounts per IP per day
- Other endpoints: 60 requests per IP per minute
- Exceeding these limits will result in a 429 (Too Many Requests) status code

### Security Measures
- Registration, login, and password reset require reCAPTCHA token for bot prevention
- Email verification codes expire after 10 minutes
- Password requirements:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character
- Authentication tokens (JWT) expire after 24 hours

## Status Codes
- 200: Request successful
- 400: Bad request
- 401: Unauthorized or authentication failed
- 403: Forbidden
- 404: Resource not found
- 429: Too many requests
- 500: Internal server error

## Error Response Format
All endpoints return a unified error response format when an error occurs:
```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

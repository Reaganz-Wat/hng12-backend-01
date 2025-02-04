# Number Classification API

A RESTful API built with NestJS that classifies a number based on its mathematical properties and provides a fun fact.

## Overview

This API was developed as part of the HNG12 Internship Stage 1 task. It takes a number as input and returns various mathematical properties, including whether it is prime, perfect, odd/even, an Armstrong number, and the sum of its digits. It also fetches a fun fact about the number from an external API.

## Features

- Classifies numbers based on mathematical properties
- Checks if a number is prime, perfect, or an Armstrong number
- Determines parity (odd/even)
- Computes the sum of the digits
- Fetches a fun fact about the number
- Handles CORS
- Fast response time (< 500ms)
- Returns JSON responses with appropriate HTTP status codes

## Technologies Used

- NestJS (Node.js framework)
- TypeScript
- Node.js
- Jest (for testing)
- Axios (for external API calls)

## Live Demo

API Endpoint: [https://your-api-domain.com/api/classify-number](https://your-api-domain.com/api/classify-number)

## API Documentation

### Endpoint

```
GET /api/classify-number?number=<integer>
```

### Query Parameters

| Parameter | Type   | Required | Description           |
|-----------|--------|----------|----------------------|
| number    | string | Yes      | The number to classify |

### Response Format

#### 200 OK Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### 400 Bad Request Response

```json
{
  "number": "alphabet",
  "error": true
}
```

### Status Codes

- 200: Successful request
- 400: Bad request (invalid input)
- 500: Server error

## Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/number-classification-api.git
```

2. Install dependencies:
```bash
cd number-classification-api
yarn install
```

3. Create a `.env` file in the root directory and add your configuration:
```env
PORT=3000
API_BASE_URL=https://numbersapi.com/
```

4. Run the development server:
```bash
yarn start:dev
```

The API will be available at `http://localhost:3000`

## Testing

Run the test suite using:
```bash
yarn test
```

## Project Structure

```
src/
├── main.ts                 # Application entry point
├── app.module.ts           # Root module
├── app.controller.ts       # Controller handling requests
├── app.service.ts          # Business logic
├── app.controller.spec.ts  # Controller tests
├── utils.ts                # Utility functions for number classification
└── getNumber.dto.ts        # DTO for number classification response
```

## Deployment

This API is deployed on a publicly accessible endpoint. The deployment process involves:

1. Push changes to GitHub
2. Automatic deployment via Vercel
3. Configure environment variables on the deployment platform

## Related Resources
- [Numbers API](http://numbersapi.com/#42)
- [HNG Internship - Node.js Developers](https://hng.tech/hire/nodejs-developers)
- [NestJS Official Documentation](https://docs.nestjs.com/)

## Author

[Reagan Watmon]

# Double Payment Prevention System

A simple full-stack web application that demonstrates how duplicate payment requests can be prevented using idempotency keys.

Built with React.js and Python FastAPI, this project explores payment request handling, duplicate-click protection, and frontend-backend communication.

## Features

- Payment form with amount validation.
- Prevents repeated clicks while a payment is processing.
- Uses React `useRef` to maintain a synchronous payment lock.
- Generates unique UUID-based idempotency keys.
- Sends payment requests to a Python FastAPI backend.
- Backend checks whether an idempotency key has already been processed.
- Blocks duplicate requests with the same idempotency key.
- Allows a new payment attempt after changing the amount.

## Tech Stack

**Frontend**
- React.js
- JavaScript
- CSS
- Vite

**Backend**
- Python
- FastAPI
- Pydantic
- Uvicorn

**Concepts Practiced**
- React useState and useRef
- JavaScript async/await
- Fetch API
- REST API integration
- CORS
- UUID generation
- Idempotency

## Project Structure

```text
double-payment-prevention/
│
├── backend/
│   ├── main.py
│   └── venv/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/UdaySama/double-payment-prevention.git
```

```bash
cd double-payment-prevention
```

### 2. Setup React frontend

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The React application will run at:

```text
http://localhost:5173
```

### 3. Setup Python backend

Open another terminal:

```bash
cd backend
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate it on Linux:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install fastapi uvicorn
```

Start FastAPI:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

## How It Works

1. User enters a payment amount in the React application.
2. React validates the entered amount.
3. A unique UUID idempotency key is generated for the payment attempt.
4. The frontend sends the amount and idempotency key to the FastAPI backend.
5. The backend checks whether the key already exists.
6. If the key exists, the backend returns an already-processed response.
7. If the key is new, the backend processes the request and stores its result.

## API Endpoint

**POST** `/payment`

Request:

```json
{
  "amount": 500,
  "idempotency_key": "payment-test-123"
}
```

Successful response:

```json
{
  "amount": 500,
  "idempotency_key": "payment-test-123",
  "status": "success"
}
```

Duplicate request response:

```json
{
  "status": "already_processed",
  "message": "Payment already processed",
  "payment": {
    "amount": 500,
    "idempotency_key": "payment-test-123",
    "status": "success"
  }
}
```

## Learning Outcomes

Through this project, I practiced:

- Building a React application.
- Managing component state and references.
- Preventing duplicate button clicks.
- Generating and managing idempotency keys.
- Creating REST APIs using FastAPI.
- Connecting React with a Python backend.
- Handling asynchronous API requests.
- Understanding duplicate payment prevention.

## Future Improvements

- Integrate SQLite for persistent payment records.
- Add transaction history.
- Implement concurrency-safe idempotency handling.
- Add Docker and Docker Compose.
- Configure Nginx as a reverse proxy.
- Improve payment status and error handling.

## Important Note

This project is an educational prototype. It simulates payment processing and does not connect to a real payment gateway.

The current backend uses an in-memory dictionary for idempotency checking. Production systems require persistent storage, atomic transactions, and concurrency-safe duplicate request handling.

## Author

**Udaysinh Kalse**

- GitHub: [UdaySama](https://github.com/UdaySama)

---

If you found this project useful, feel free to ⭐ the repository!

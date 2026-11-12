from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[    "http://localhost:5173",
    "http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
processed_payments = {}

class PaymentRequest(BaseModel):
    amount: float
    idempotency_key: str


@app.get("/")
def home():
    return {"message": "Payment API is running"}



@app.post("/payment")
def make_payment(payment: PaymentRequest):

    key = payment.idempotency_key

    if key in processed_payments:
        print("Duplicate payment blocked!")

        return {
            "status": "already_processed",
            "message": "Payment already processed",
            "payment": processed_payments[key]
        }

    print("Processing new payment...")

    result = {
        "amount": payment.amount,
        "idempotency_key": key,
        "status": "success"
    }

    processed_payments[key] = result

    print("Payment processed successfully!")

    return result

import { useState, useRef } from "react";
import "./App.css";

function App() {
  const paymentLock = useRef(false);
  const paymentKeyRef = useRef(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handlePayment = async () => {
    console.log("Button clicked!");

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (paymentCompleted) {
      alert("This payment has already been completed!");
      return;
    }
    if (paymentLock.current) {
      console.log("Duplicate payment blocked!");
      return;
    }

    paymentLock.current = true;
    setPaymentCompleted(true);
    setLoading(true);

    if (!paymentKeyRef.current) {
      paymentKeyRef.current = crypto.randomUUID();
    }

    const idempotencyKey = paymentKeyRef.current;

    console.log("Idempotency Key:", idempotencyKey);

    try {
      const response = await fetch("http://127.0.0.1:8000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Number(amount),
          idempotency_key: idempotencyKey,
        }),
      });

      if (!response.ok) {
        throw new Error("Payment request failed");
      }

      const data = await response.json();

      console.log("Backend Response:", data);

      alert(data.message || "Payment processed successfully!");

      paymentKeyRef.current = null;
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. You can retry.");
    } finally {
      paymentLock.current = false;
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Payment System</h1>

      <div className="payment-card">
        <h2>Make a Payment</h2>

        <label>Enter Amount</label>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            setPaymentCompleted(false);
            paymentKeyRef.current = null;
          }}
        />

        <button onClick={handlePayment} disabled={loading || paymentCompleted}>
          {loading
            ? "Processing..."
            : paymentCompleted
              ? "Payment Completed"
              : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

export default App;

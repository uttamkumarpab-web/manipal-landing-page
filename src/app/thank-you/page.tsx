"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYou() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18215221480/jE67CMOM87kcEOjx2O1D",
      });
    }
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      background: "#f5f5f5",
    }}>
      <div style={{
        background: "white",
        padding: "48px",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "480px",
      }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>&#10004;</div>
        <h1 style={{ margin: "0 0 8px", color: "#1a1a1a" }}>Thank You!</h1>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          Your inquiry has been received successfully. Our team will get back to
          you shortly.
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "24px",
            padding: "12px 32px",
            background: "#1a56db",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: 600,
          }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

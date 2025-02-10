"use client";

import { FormRegister } from "@/app/components/formRegister";
import { PersonalData } from "@/app/components/personalData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const router = useRouter();

  const stepData = [
    { detail: "Create User", icon: "bi bi-pencil" },
    { detail: "Personal Data", icon: "bi bi-info-circle" },
    { detail: "Ageement", icon: "bi bi-book" },
    { detail: "Finish", icon: "bi bi-check-circle" },
  ];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username) return setError("Username is required.");
    if (!password) return setError("Password is required.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters.");
    if (password !== cfPassword) return setError("Passwords do not match.");

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ name: username, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || "Failed to register");
      sessionStorage.setItem("token", data.token);

      Swal.fire({ title: "Register successful!", icon: "success" });
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="d-flex flex-column w-100">
      {/* Step header */}
      <div className="nav nav-pills justify-content-center mb-4">
        {stepData.map((label, index) => (
          <div key={index} className="nav-item">
            <button
              className={`nav-link ${step === index + 1 ? "active" : ""}`}
              onClick={() => setStep(index + 1)}
            >
              {label.detail}
            </button>
          </div>
        ))}
        {/* Step content */}
        {step === 1 && <FormRegister />}
        {step === 2 && <PersonalData />}
      </div>
    </form>
  );
}

"use client";
import { FormRegister } from "@/app/components/formRegister";
import { PersonalData } from "@/app/components/personalData";
import { useState } from "react";

export default function Stepper() {
  const [step, setStep] = useState(1);

  const stepData = [
    { detail: "Create User", icon: "bi bi-pencil" },
    { detail: "Personal Data", icon: "bi bi-info-circle" },
    { detail: "Ageement", icon: "bi bi-book" },
    { detail: "Finish", icon: "bi bi-check-circle" },
  ];
  return (
    <form className="d-flex flex-column w-100">
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

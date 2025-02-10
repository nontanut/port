"use client";

import { Agreement } from "@/app/components/ageement";
import { FinishRegister } from "@/app/components/finishRegister";
import { FormRegister } from "@/app/components/formRegister";
import { PersonalData } from "@/app/components/personalData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  // State for Register Form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // State for Personal Data Form
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  // State for Agreement
  const [accept, setAccept] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const router = useRouter();

  const stepData = [
    { detail: "Create User", icon: "bi bi-pencil-square fs-4" },
    { detail: "Personal Data", icon: "bi bi-info fs-4" },
    { detail: "Ageement", icon: "bi bi-book fs-4" },
    { detail: "Finish", icon: "bi bi-check fs-4" },
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
    <form
      onSubmit={handleRegister}
      className="d-flex flex-column w-100"
      style={{ background: "#c1c1c1", minHeight: "100vh" }}
    >
      {/* Step header */}
      <div className="nav nav-pills justify-content-center mt-5 mb-3">
        {stepData.map((label, index) => (
          <div
            key={index}
            className="nav-item d-flex justify-content-center text-center align-items-center"
          >
            <button
              type="button"
              className={`nav-link rounded-circle border border-3 ${
                step === index + 1 ? "active bg-dark" : ""
              }`}
              onClick={() => setStep(index + 1)}
            >
              <i className={label.icon} />
            </button>
            <span className="mx-3">------</span>
          </div>
        ))}

        {/* Step content */}
        <div className="d-flex flex-column w-100">
          <div className="container d-flex align-items-center justify-content-center mt-5">
            <div
              className="d-flex flex-column align-items-center rounded p-5 bg-dark text-white"
              style={{ width: "370px" }}
            >
              {step === 1 && (
                <FormRegister
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  cfPassword={cfPassword}
                  setCfPassword={setCfPassword}
                  error={error}
                  loading={loading}
                />
              )}
              {step === 2 && (
                <PersonalData
                  name={name}
                  setName={setName}
                  surname={surname}
                  setSurname={setSurname}
                  birthday={birthday}
                  setBirthday={setBirthday}
                  gender={gender}
                  setGender={setGender}
                  phone={phone}
                  setPhone={setPhone}
                  zipcode={zipcode}
                  setZipcode={setZipcode}
                  address={address}
                  setAddress={setAddress}
                  error={error}
                  step={step}
                  setStep={setStep}
                />
              )}
              {step === 3 && <Agreement />}
              {step === 4 && <FinishRegister />}

              {/* Button */}
              <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn btn-secondary"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                >
                  Previous
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setStep(step + 1)}
                  disabled={step === 4}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

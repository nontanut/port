"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div
          className="d-flex flex-column align-items-center rounded p-5 bg-dark text-white"
          style={{ width: "370px" }}
        >
          <h1 className="fw-bold text-white">Register</h1>
          {error && <p className="text-danger text-center">{error}</p>}

          <label className="my-2">
            Username
            <br />
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
          </label>

          <label className="my-2">
            Password
            <br />
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </label>

          <label className="my-2">
            Confirm Password
            <br />
            <input
              name="cfPassword"
              type="password"
              value={cfPassword}
              onChange={(e) => setCfPassword(e.target.value)}
              aria-label="Confirm Password"
            />
          </label>

          <button
            className="btn btn-outline-warning fw-bold my-2 border-2"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

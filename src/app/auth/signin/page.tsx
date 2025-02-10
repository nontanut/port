"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function SignIn() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ name: username, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || "Failed to login");

      sessionStorage.setItem("token", data.token);

      Swal.fire({ title: "Login successful!", icon: "success" });
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="d-flex flex-column w-100">
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="d-flex flex-column align-items-center rounded p-5 bg-dark text-white">
          <h1 className="fw-bold text-white">Login</h1>
          {error && <p className="text-danger text-center">{error}</p>}
          <label className="my-2">
            Username
            <br />
            <input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            />
          </label>

          <div className="btn-group">
            <button
              className="btn btn-outline-danger fw-bold my-2 border-2"
              type="button"
              onClick={() => router.push("../auth/register")}
            >
              Register
            </button>

            <button
              className="btn btn-outline-warning fw-bold my-2 border-2"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

"use client";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const session = sessionStorage.getItem("token");
  if (session) {
    return (
      <>
        <div className="d-flex justify-content-between justify-items-between justify-content-end justify-items-end justify-content-end">
          <div>
            <button
              className="btn btn-danger fw-bold"
              onClick={() => {
                sessionStorage.clear();
                router.push("/");
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <button
        className="btn btn-warning fw-bold"
        onClick={() => router.push("/auth/signin")}
      >
        Login
      </button>
    </>
  );
};

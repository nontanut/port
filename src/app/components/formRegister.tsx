import { useRouter } from "next/navigation";

export const FormRegister = (porps: {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  cfPassword: string;
  setCfPassword: (value: string) => void;
  error: string | null;
  setError: (value: string | null) => void;
  loading: boolean;
}) => {
  return (
    <div className="d-flex flex-column w-100">
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div
          className="d-flex flex-column align-items-center rounded p-5 bg-dark text-white"
          style={{ width: "370px" }}
        >
          <h1 className="fw-bold text-white">Register</h1>
          {porps.error && (
            <p className="text-danger text-center">{porps.error}</p>
          )}

          <label className="my-2">
            Username
            <br />
            <input
              name="username"
              type="text"
              value={porps.username}
              onChange={(e) => porps.setUsername(e.target.value)}
              aria-label="Username"
            />
          </label>

          <label className="my-2">
            Password
            <br />
            <input
              name="password"
              type="password"
              value={porps.password}
              onChange={(e) => porps.setPassword(e.target.value)}
              aria-label="Password"
            />
          </label>

          <label className="my-2">
            Confirm Password
            <br />
            <input
              name="cfPassword"
              type="password"
              value={porps.cfPassword}
              onChange={(e) => porps.setCfPassword(e.target.value)}
              aria-label="Confirm Password"
            />
          </label>

          <button
            className="btn btn-outline-warning fw-bold my-2 border-2"
            type="submit"
            disabled={porps.loading}
          >
            {porps.loading ? (
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
    </div>
  );
};

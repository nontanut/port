"use client";
export const FormRegister = (porps: {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  cfPassword: string;
  setCfPassword: (value: string) => void;
  error: string | null;
}) => {
  return (
    <>
      <h3 className="fw-bold text-white">Create User</h3>
      {porps.error && <p className="text-danger text-center">{porps.error}</p>}

      <div className="container-fluid d-flex flex-column px-5">
        <label className="my-2">
          Username
          <br />
          <input
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            name="cfPassword"
            type="password"
            value={porps.cfPassword}
            onChange={(e) => porps.setCfPassword(e.target.value)}
            aria-label="Confirm Password"
          />
        </label>
      </div>
    </>
  );
};

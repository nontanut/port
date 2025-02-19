"use client";

import { Login } from "./login";

export const Nav = (props: { word: string; setWord: any }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Jakkrawan
        </a>
        <div className="d-flex flex-grow-1 justify-content-center flex-row">
          <form className="input-group search-width">
            <input
              className="rounded w-100 p-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.word}
              onChange={(e) => props.setWord(e.target.value)}
            />
          </form>
        </div>

        <button className="btn btn-secondary me-2 fw-bold" type="submit">
          <i className="bi bi-cart" />
        </button>
        <div className="d-flex h-100 login-custom-margin">
          <Login />
        </div>
      </div>
    </nav>
  );
};

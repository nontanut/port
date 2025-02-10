"use client";
import { useState } from "react";

export const LIMIT = 2;

export const Pagination = (props: {
  setPage: (e: number) => void;
  totalPage: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="pagination my-3 d-flex justify-content-center">
      <nav aria-label="...">
        <ul className="pagination" style={{ cursor: "pointer" }}>
          {Array.from({ length: props.totalPage }, (_, index) => (
            <li
              onClick={() => {
                setCurrentPage(index + 1);
                props.setPage(index + 1);
              }}
              className={
                currentPage === index + 1 ? " page-item active" : "page-item"
              }
              key={index}
            >
              <a className={"page-link"}>{index + 1}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

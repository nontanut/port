"use client";
import { useState, useMemo } from "react";
import { LIMIT, Pagination } from "./pagination";

export const data = [
  { test: "1", b: "a" },
  { test: "2", b: "b" },
  { test: "3", b: "c" },
];

export const Products = (props: { searchProducts: any }) => {
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(data.length / LIMIT);

  const filteredData = useMemo(() => props.searchProducts(data), [props, data]);
  const paginatedData = filteredData.slice((page - 1) * LIMIT, page * LIMIT);

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {paginatedData.length > 0 ? (
          paginatedData.map((item: any, index: number) => (
            <div className="col" key={index}>
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Product"
                />
                <div className="card-body">
                  <h5 className="card-title" id="title">
                    {item.test}
                  </h5>
                  <p className="card-text">
                    This is a description of the product.
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
      {filteredData.length > LIMIT && (
        <Pagination setPage={setPage} totalPage={totalPage} />
      )}
    </div>
  );
};

import React from "react";
import "./searchheader.scss";

function searchheader() {
  return (
    <div className="research">
      <div className="dropdown">
        <h3>All category</h3>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.81348 6.53326L7.55348 9.27326C7.67838 9.39743 7.84735 9.46712 8.02348 9.46712C8.1996 9.46712 8.36857 9.39743 8.49348 9.27326L11.1601 6.6066"
            stroke="#6A983C"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="bevel"
          />
        </svg>
      </div>

      <input placeholder="Search products..."></input>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.19303 11.4333C11.7704 11.4333 13.8597 9.34392 13.8597 6.7666C13.8597 4.18927 11.7704 2.09993 9.19303 2.09993C6.61571 2.09993 4.52637 4.18927 4.52637 6.7666C4.52637 9.34392 6.61571 11.4333 9.19303 11.4333Z"
          stroke="#151515"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        />
        <path
          d="M5.81319 10.24L2.68652 13.3667"
          stroke="#151515"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="bevel"
        />
      </svg>
    </div>
  );
}

export default searchheader;

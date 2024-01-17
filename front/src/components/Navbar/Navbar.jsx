import React from "react";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <button>Tasty</button>
      </div>
      <div>
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/add");
            }}
          >
            Add
          </li>
          <li>Basket</li>
          <li
            onClick={() => {
              navigate("/add");
            }}
          >
            Wishlist
          </li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

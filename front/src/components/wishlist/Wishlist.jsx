import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.counter.wishlist);
  const [type, setType] = useState("main");
  const navigate = useNavigate();
  return (
    <div>
      <p style={{ textAlign: "center", fontSize: "36px" }}>Wishlist</p>
      <div>{
        }</div>
    </div>
  );
}

export default Wishlist;

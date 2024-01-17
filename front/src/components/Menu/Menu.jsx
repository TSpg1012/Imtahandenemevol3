import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWishlist, fetchData } from "../../redux/slices/productSlice";
import "./menu.scss";
import image from "../../image/bg_1.jpg";
import { useNavigate } from "react-router-dom";
function Menu() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.counter.data);
  const wishlist = useSelector((state) => state.counter.wishlist);
  const [type, setType] = useState("main");
  const navigate = useNavigate();

  const filteredData = data.filter((elem) => elem.type == type);
  return (
    <div className="menu">
      <p>Discover Our Exclusive Menu</p>
      <div className="buttons">
        <button
          onClick={() => {
            setType("main");
          }}
        >
          Main
        </button>
        <button
          onClick={() => {
            setType("dessert");
          }}
        >
          Dessert
        </button>
        <button
          onClick={() => {
            setType("drink");
          }}
        >
          Drink
        </button>
      </div>

      <div className="products">
        {filteredData &&
          filteredData.map((elem) => (
            <div className="product">
              <div>
                <div>
                  <img
                    src={image}
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <p>{elem.name}</p>
                <div>
                  <p style={{ fontSize: "30px" }}>{elem.price}$</p>
                  <button
                    style={{
                      padding: "10px",
                      border: "none",
                      background: "Red",
                      color: "white",
                    }}
                    onClick={() => {
                      dispatch(addWishlist(elem));
                    }}
                  >
                    Add wishlist
                  </button>
                  <button
                    style={{
                      padding: "10px",
                      border: "none",
                      background: "blue",
                      color: "white",
                    }}
                    onClick={() => {
                      navigate("/" + elem.id);
                    }}
                  >
                    view
                  </button>
                </div>
              </div>
              <p>Meat, Potatoes, Rice, Tomatoe</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Menu;

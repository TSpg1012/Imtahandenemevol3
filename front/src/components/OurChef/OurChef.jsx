import React from "react";
import "./ourchef.scss";
import about from "../../image/about-2.jpg";

function OurChef() {
  return (
    <div className="ourChef">
      <div className="parts">
        <div className="image">
          <img src={about} alt="" />
        </div>

        <div className="info">
          <div className="about">
            <p>ABOUT TASTY</p>
            <p>Our chef cooks the most delicious food for you</p>
          </div>

          <div className="text">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurChef;

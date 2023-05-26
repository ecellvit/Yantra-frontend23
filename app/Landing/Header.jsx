import React from "react";
import Section1 from "./Section1";

export default function Header() {
  return (
    <div>
      <div className="header pt-28">
        <h1 className="main_h1">IGNiTIA</h1>

        <p className="para2">
        Shatter Limits, Forge Solutions and Spark Transformation
        </p>
      <div className="innovate_sec pt-60">
        <div className="innovate_wrapper text-white">
          <div className="features">
            <div className="feat_img">
              <img src="21.svg.svg" alt="" className="feature_img" />
            </div>
            <div className="feat_text">
              <p className="feat_h1">Innovate</p>
              <p className="feat_para text-white">
                Finding innovative solutions to complex real world problems to
                create an edge over your competitors while providing a viable
                alternative.
              </p>
            </div>
          </div>
          <div className="features">
            <div className="feat_img">
              <img src="div.svg" alt="" className="feature_img" />
            </div>
            <div className="feat_text">
              <p className="feat_h1">Ideate</p>
              <p className="feat_para">
                Generate and brainstorm creative ideas to solve a problem and
                achieve goals through the way.
              </p>
            </div>
          </div>
          <div className="features last">
            <div className="feat_img">
              <img src="toggle.svg" alt="" className="feature_img" />
            </div>
            <div className="feat_text">
              <p className="feat_h1">Actuate</p>
              <p className="feat_para">
                Execute a well-planned strategy with precision and agility, to
                produce tangible results while achieving desirable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      

    </div>
  );
}

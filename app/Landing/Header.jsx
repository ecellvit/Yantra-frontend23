import React from "react";
import Section1 from "./Section1";

export default function Header() {
  return (
    <div>
      <div className="header pt-[-10px]">
        {/* <h1 className="main_h1">
         
        </h1> */}

        <div className="ignite">
          <img src="withSponsor.png" alt="" />
        </div>

        {/* <p className="para2 mt-[-120px]">
          Shatter Limits, Forge Solutions and Spark Transformation
        </p> */}
        <div className="innovate_sec ">
          <div className="bg-slate-800 bg-opacity-50 rounded-lg mb-3">
            <div className="innovate_wrapper text-white">
              <div className="features">
                <div className="feat_img">
                  <img src="21.svg.svg" alt="" className="feature_img" />
                </div>
                <div className="feat_text">
                  <p className="feat_h1">Empower</p>
                  <p className="feat_para text-white">
                    Ignitia aims to empower individuals by providing them with
                    knowledge, skills, and opportunities to succeed in their
                    respective fields.
                  </p>
                </div>
              </div>
              <div className="features">
                <div className="feat_img">
                  <img src="div.svg" alt="" className="feature_img" />
                </div>
                <div className="feat_text">
                  <p className="feat_h1">Transform</p>
                  <p className="feat_para">
                    Ignitia is dedicated to transforming the way we think,
                    create, and innovate by fostering a collaborative and
                    dynamic environment.
                  </p>
                </div>
              </div>
              <div className="features last">
                <div className="feat_img">
                  <img src="toggle.svg" alt="" className="feature_img" />
                </div>
                <div className="feat_text">
                  <p className="feat_h1">Inspire</p>
                  <p className="feat_para">
                    Ignitia strives to inspire participants to reach new
                    heights, embrace their creativity, and make a positive
                    impact in their communities and industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

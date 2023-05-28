"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Section2() {
  const router = useRouter();
  const session = useSession();
  //console.log(session);
  const loginHandler = () => {
    signIn("google", {
      callbackUrl: "/getdetails",
    });
  };
  return (
    <div className="about_sec">
      <div className="about_wrapper">
        <div className="about_img_wrapper">
          <img src="ecellblue.png" width="425px" className="image" />
        </div>
        <div className="about_txt_wrap">
          <h1 className="about_h1 text-white">About Ignitia</h1>
          <p className="about_para text-white">
            Introducing <strong className="bld">Ignitia</strong>, a place where innovation meets collaboration. An extraordinary convergence of three 
            dynamic workshops: Aerodynamics and Rocket-Building, DevOps, and Product Management and to top it all, a 36-hour adrenaline-fueled adventure: the 
            Ignitia Hack, the ultimate test of skill, creativity, and endurance
            Ignitia is a collaboration of three renowned clubs: Team Sammard, ISTE, and E-Cell. Together, they have curated an immersive program that will push 
            the boundaries of your capabilities.

          </p>
          {/* <Link href="#" className="primary_btn w-button">
            Get Started{" "}
          </Link> */}
          <button
            onClick={() => {
              session.data ? router.push("/schedule") : loginHandler();
            }}
            className="primary_btn w-button"
          >
            {session.data ? "View Registered Events" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
}

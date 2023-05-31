"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Section6() {
  const router = useRouter();
  const session = useSession();
  const loginHandler = () => {
    signIn("google", {
      callbackUrl: "/getdetails",
    });
  };
  return (
    <div className="sound_sec">
      <div className="sound_section">
        <div className="sound_r">
          <h1 className="about_h1 sound text-white">Tracks Have been Released!</h1>
          <button
            onClick={() => {
              session.data ? router.push("/manage/hack") : loginHandler();
            }}
            className="primary_btn w-button"
          >
            {session.data ? "Submit your Idea" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
}

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import "../../../styles/landing.css";
import RegButton from "./RegButton";

async function getUserData(token) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.accessTokenBackend}`,
      "Access-Control-Allow-Origin": "*",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  let hasTeam;
  let userArray;
  if (session) {
    const userData = await getUserData(session);
    userArray = userData?.user.registeredEvents;
    hasTeam = userData?.user?.yantraTeamId;
  }

  const check = session && userArray[0];
  return (
    <div className="event-sec">
      <div className="event_wrapper">
        <h1 className="event_h1">
          The Ignitia Hack
        </h1>
        <br />
        <p className="text-2xl font-semibold text-center mb-1 leading-normal mt-4">
          Date : 02/06/2023
        </p>
        <p className="text-2xl font-semibold text-center mb-1 leading-normal mt-4">
          Time : 08:30 PM
        </p>
        <p className="text-2xl font-semibold text-center mb-1 leading-normal mt-4">
          TT Gallery-2
          <br />
        </p>
        <p className="form_para_small">
          {"Gear up for an adrenaline-fueled 36-hour marathon of creativity, collaboration, and innovation at the electrifying Ignitia Hack! This ultimate fusion of coding and business will push your limits and redefine what's possible for you and by you. Imagine a high-octane environment where brilliant minds from diverse backgrounds converge to solve real-world challenges. With laptops humming and ideas soaring, you'll be part of a dynamic community of hackers, developers, designers, and entrepreneurs."}
          <br />
        </p>
        <div className="evet_price_wrap">
          <div className="price_wrap">
            {/* <p className="para_med_event">Prize Pool</p> */}
            <p className="para_bold_event"> An Exciting Prize Pool Awaits!</p>
          </div>
          {/* <div className="price_wrap">
            <p className="para_med_event">2nd</p>
            <p className="para_bold_event">Coming Soon</p>
          </div>
          <div className="price_wrap">
            <p className="para_med_event">3rd</p>
            <p className="para_bold_event">Coming Soon</p>
          </div> */}
        </div>

        <RegButton check={check} userArray={userArray} hasTeam={hasTeam} />
      </div>
    </div>
  );
}
// {session && userArray[1] && <Link classNameName="eventbtn w-button" href="/manage/ehack">
// Go to Dashboard
// </Link>}

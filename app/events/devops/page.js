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
  let userArray;
  if (session) {
    const userData = await getUserData(session);
    userArray = userData?.user.registeredEvents;
  }

  const check = session && userArray[0];
  return (
    <div className="event-sec">
      <div className="event_wrapper">
        <h1 className="event_h1">
          DevOps
          <br />
        </h1>
        <p className="event_date ">
          Date &amp; Time : 31st March 2023, 9:00 PM
        </p>
        <p className="event_para">
          Venue: Sarojini Naidu SJT
          <br />
        </p>
        <p className="form_para_small">
          For those enchanted by the realm of technology, the DevOps workshop is a haven of innovation. Immerse yourself in the fast-paced world of software development and operations, and gain insights into the latest tools and methodologies. Unleash your coding prowess through the DevOps Workshop intricately curated by ISTE, VIT.
          <br />
        </p>
        <div className="evet_price_wrap">
          <div className="price_wrap">
            {/* <p className="para_med_event">Prize Pool</p> */}
            <p className="para_bold_event">Prize Pool - Rs 75,000</p>
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

        <RegButton check={check} userArray={userArray} />
      </div>
    </div>
  );
}
// {session && userArray[1] && <Link classNameName="eventbtn w-button" href="/manage/ehack">
// Go to Dashboard
// </Link>}

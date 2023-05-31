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
          Nexus
          <br />
        </h1>
        <br />
        <p className="text-2xl font-semibold text-center mb-1 leading-normal mt-4">
          Date : 01/06/2023
        </p>
        <p className="text-2xl font-semibold text-center mb-1 leading-normal mt-4">
          Time : 04:00 PM
        </p>
        <p className="text-2xl font-semibold text-center mb-1 leading-normal mt-4">
          TT Gallery-2
          <br />
        </p>
        <p className="form_para_small">
          Learn the art of identifying market needs, crafting compelling user experiences, and driving innovation. Acquire the skills to navigate the dynamic landscape of product management and make an impact in any industry through the Product Management Workshop. Ignite your passion for entrepreneurship, refine your skills and network with like-minded individuals with E-Cell, VIT.
          <br />
        </p>
        <div className="evet_price_wrap">
          <div className="price_wrap">
            {/* <p className="para_med_event">Prize Pool</p> */}
            {/* <p className="para_bold_event">Prize Pool - Rs 75,000</p> */}
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

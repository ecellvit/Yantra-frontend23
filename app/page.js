import Section1 from "./Landing/Section1";
import Section3 from "./Landing/Section3";
import "../styles/landing.css";
import Section2 from "./Landing/Section2";
import Section4 from "./Landing/Section4";
import Section6 from "./Landing/Section6";
import Faqsection from "./Landing/Faqsection";
import Header from "./Landing/Header";
import Footer from "./Landing/Footer";
import { getSession } from "@/lib/session";
import Maintimeline from "./mainTimeline";
import NotLoggedIn from "@/components/NotLoggedIn";
import AccordionPage from "@/components/AccordianSection";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/events`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getUserData(session) {
  if (session) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return "error";
    }
    return res.json();
  }
}

export default async function Home() {
  // const eventData = await getData();
  const eventData = { events: [], user: {registeredEvents:[0,0,0,0]} };
  const eventsArray = eventData.events;
  // const session = await getSession();
  const session = { accessTokenBackend: "" };
  // const userData = await getUserData(session);
  const userData = [];
  const userArray = [0,0,0,0];
  const hasTeam = userData?.user?.yantraTeamId;

  console.log(userArray);

  if (userData === "error") {
    return <NotLoggedIn />;
  }

  return (
    <div className="bg-black">
      <Header></Header>
      {/* <Section1 /> */}
      <Section2 />
      {/* section 3 here is what you can expect */}
      {/* <Section3 /> */}
      <Maintimeline
        eventsArray={eventsArray}
        userArray={userArray}
        hasTeam={hasTeam}
        session={session}
      />

      <Section4 />
      <AccordionPage />
      {/* <Faqsection></Faqsection> */}
      <Section6></Section6>
      <Footer />
    </div>
  );
}

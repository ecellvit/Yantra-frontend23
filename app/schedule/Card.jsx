"use client";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import refreshData from "../utils/refresh";

export default function Card({
  session,
  event,
  id,
  tit,
  userArray,
  setUserArray,
}) {
  const router = useRouter();
  const path = usePathname();

  let whatsappLink;
  if (event.title === "The Ignitia Hack") {
    whatsappLink = "https://chat.whatsapp.com/J5jN5qH3QmULX1FGTRlqcR";
  } else if (event.title === "T-10") {
    whatsappLink = "https://chat.whatsapp.com/DqLGTQZXgL9J4OkB0445mu";
  } else if (event.title === "DevOps") {
    whatsappLink = "https://chat.whatsapp.com/Dviy55N8RLz75lsWcmwgWe";
  } else if (event.title === "Nexus") {
    whatsappLink = "https://chat.whatsapp.com/Iatg4feZE5H0qR0TetvgS2";
  } else {
    whatsappLink = "";
  }

  function handleDeRegister(eventCode) {
    const newArray = userArray;
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/user/register`, {
      method: "PATCH",
      body: JSON.stringify({
        op: 1,
        eventCode: eventCode,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error?.errorCode) {
          toast.error(`${data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return false;
        }
        // newArray.splice(eventCode, 1, 0);
        // //console.log(newArray);
        // setUserArray(newArray);
        refreshData(router, path);
        toast("Event deregistered Successfully");

        return true;
      });
    return true;
  }

  function handleNavigation(title) {
    const route = title.toLowerCase();
    router.push(`/manage/${route}`);
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="date text-white">{event.date}</h1>
        <div
          className="bg-[#4f5055] bg-opacity-80 p-4 rounded-xl"
        >
          <h1 className="card_h1">{event.title} </h1>
          <p className="card_para">{event.description}</p>
          <div className="card_btn w-button mb-4">
            <a href={whatsappLink}>Join Whatsapp Group</a>
          </div>
          <div className="card_time">
            <div className="card_l text-white">
              <img src="clock.svg" alt="" className="svg_card" />
              <p className="timepara">{event.time} hours</p>
            </div>
            <div className="card_r text-white">
              <img src="location.svg" alt="" className="svg_card" />
              <p className="timepara">{event.location}</p>
            </div>
          </div>
          <button
            className="card_btn w-button"
            onClick={(e) => handleDeRegister(id)}
          >
            <>De-Register event</>
            <strong>→</strong>{" "}
          </button>

          <button
            className={`btn_card_last w-button ${
              event.title !== "Yantra" && "hidden"
            }`}
            onClick={(e) =>
              !session
                ? handleRegisterwithLogin(e, id)
                : handleNavigation(event.title)
            }
          >
            Manage Event<strong>→</strong>{" "}
          </button>
        </div>
      </div>
</>
);
}
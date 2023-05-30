"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import refreshData from "../utils/refresh";

export default function NewCard({
  event,
  id,
  isRegistered,
  userArray,
  eventsArray,
  hasTeam,
}) {
  const path = usePathname();
  const router = useRouter();
  //console.log("event id !!!!", id);
  //console.log("event Name !!!!", event);
  const { data: session, status } = useSession();
  const handleRegisterwithLogin = (id) => {
    // //console.log("clicked");
    localStorage.setItem("eventId", JSON.stringify(id));
    // //console.log(id);
    signIn("google", {
      callbackUrl: "/getdetails",
    });
    return;
  };

  function handleRegister(eventCode) {
    if (!session) {
      handleRegisterwithLogin(id);
    }

    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/user/register`, {
      method: "PATCH",
      body: JSON.stringify({
        op: 0,
        eventCode: eventCode,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
      cache: "no-store",
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
        toast("Event registered Successfully");
        refreshData(router, path);
        router.push(`/schedule`);
        return true;
      });
    return true;
  }

  useEffect(() => {
    // console.log(localStorage.getItem("eventId"));
    if (localStorage.getItem("eventId")) {
      console.log(session);
      console.log(localStorage.getItem("eventId"));
      if (session) {
        if (localStorage.getItem("eventId") == 2) {
          if (userArray[0] === 0) {
            handleRegister(localStorage.getItem("eventId")) &&
              localStorage.removeItem("eventId");
          } else {
            console.log("Events Clashing");
            toast("Event's Clashing");
            localStorage.removeItem("eventId");
          }
        }
        if (localStorage.getItem("eventId") == 0) {
          if (userArray[2] === 0) {
            handleRegister(localStorage.getItem("eventId")) &&
              localStorage.removeItem("eventId");
          } else {
            console.log("Events Clashing");
            toast("Event's Clashing");
            localStorage.removeItem("eventId");
          }
        }

        if (
          localStorage.getItem("eventId") == 1 ||
          localStorage.getItem("eventId") == 3 ||
          localStorage.getItem("eventId") == 4
        ) {
          handleRegister(localStorage.getItem("eventId")) &&
            localStorage.removeItem("eventId");
        }
      }
    }
    refreshData(router, path);
    return;
  }, []);

  return (
    <>

      <div class="block max-w-sm p-6 min-h-full rounded-lg shadow  bg-zinc-700 bg-opacity-60">
        {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5> */}
        {/* <p class="font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        {/* </div> */}

        {/* <div className="timeline_wrapper ml-3"> */}
        {/* <div className="border-white rounded-3xl border-4 p-8"> */}
        <img className={`card_cont`} src={event?.imgUrl} alt="event_image" />
        <h1 className="card_h1 text-center">{event?.title} </h1>
        <div className="flex justify-center items-center">
          <p className="card_para">{event?.description}</p>
        </div>
        <h1 className="date text-white">{event?.date}</h1>
        <div className="card_time flex justify-center items-center">
          <div>
            <div className="card_l">
              <img src="clock.svg" alt="" className="svg_card" />
              <p className="timepara text-white">{event?.time} hours</p>
            </div>
            <div className="card_r">
              <img src="location.svg" alt="" className="svg_card" />
              <p className="timepara text-white">{event?.location}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="card_btn w-button"
            onClick={() => {
              // console.log(isRegistered);
              // if (event === eventsArray[4]) {
              //   return;
              // }
              // if (id === 0 && userArray !== undefined && userArray[2] === 1) {
              //   return;
              // }
              // if (id === 2 && userArray !== undefined && userArray[0] === 1) {
              //   return;
              // }
              if (id === 0) {
                console.log("fdsa")
                router.push("/manage/hack");
              } else {
                if (isRegistered === 0) {
                  return handleRegister(id);
                } else {
                  router.push("/schedule");
                }
              }
            }}
          >
            {!session ? (
              // (event === eventsArray[4]) ? <>Maximum Capacity Reached</> : <>Register event</>
              <>Register event</>
            ) : event != eventsArray[4] ? (
              id === 0 ? (
                hasTeam ? <>Manage Team<strong>→</strong></> :
                  <>
                    Register<strong>→</strong>
                  </>
              ) : id === 2 ? (
                <>
                  {isRegistered === 0 ? (
                    userArray[0] != 1 ? (
                      <>
                        Register<strong>→</strong>{" "}
                      </>
                    ) : (
                      <>
                        Register<strong>→</strong>{" "}
                      </>
                    )
                  ) : (
                    <>
                      Go to schedule<strong>→</strong>{" "}
                    </>
                  )}
                </>
              ) : (
                <>
                  {isRegistered === 0 ? (
                    <>
                      Register<strong>→</strong>{" "}
                    </>
                  ) : (
                    <>
                      Go to schedule<strong>→</strong>{" "}
                    </>
                  )}
                </>
                // )) : (<>Maximum Capacity Reached</>)}
              )
            ) : (
              <>
                {" "}
                Go to schedule<strong>→</strong>{" "}
              </>
            )}
            {/* <strong>→</strong>{" "} */}
          </button>
        </div>
        {/* <button className="btn_card_last w-button">
                          View Details<strong>→</strong>{" "}
                        </button> */}
        {/* </div> */}
      </div>
    </>
  );
}

import Taskbar from "@/app/componentsSSR/taskbar";
import AddMember from "@/components/addMember";
import NotyNav from "@/components/notyNav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

// async function yantraRegistered(session) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/yantra/user`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${session.accessTokenBackend}`,
//       "Access-Control-Allow-Origin": "*",
//     },
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

async function leaderSentInvites(session) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/api/yantra/addMember`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessTokenBackend}`,
        "Access-Control-Allow-Origin": "*",
      },
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// async function checkRegistered(session, data) {
//   data?.map(async (user) => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER}/api/yantra/user`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${session.accessTokenBackend}`,
//           "Access-Control-Allow-Origin": "*",
//         },
//         cache: "no-store",
//       }
//     );
//   });
// }

export default async function AddMembers() {
  const eventName = "yantra";
  const session = await getServerSession(authOptions);
  // const data = await yantraRegistered(session);
  const sentData = await leaderSentInvites(session);
  //console.log(sentData.requests);
  // const users = data?.yantraMembers;
  //console.log(data);
  return (
    <div>
      <Taskbar eventName={eventName} />
      <AddMember
        eventName={eventName}
        session={session}
        eventCode={1}
        sentData={sentData.requests}
      />
    </div>
  );
}

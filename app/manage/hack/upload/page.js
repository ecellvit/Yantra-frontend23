import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import RoundZero from "./Round0";
import Taskbar from "@/app/componentsSSR/taskbar";

export default async function page() {
    const session = await getServerSession(authOptions);

    return (
        <>
            <Taskbar eventName={"yantra"} />
            <RoundZero accessTokenBackend={session.accessTokenBackend} />
        </>
    )
}

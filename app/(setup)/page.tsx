import { db } from "@/lib/db";
import initialProfile from "../../lib/inintialProfile";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";

//base page
//if this goes swimmingly, we go to /server/serverid
//which then goes to the general page of that channel

const SetupPage = async () => {
  //check if user is in database
  const profile = await initialProfile();

  //find first server they are a part of
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  //if server, redirect to that server
  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  //if no server, prompt them to create a server
  return <InitialModal />;
};

export default SetupPage;

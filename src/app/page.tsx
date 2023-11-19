import Link from "next/link";
import Predstavitev from "./_components/Predstavitev";
import { CreatePost } from "~/app/_components/create-post";
import Navbar from "~/app/_components/Navbar";
import Data from "src/app/_components/Data";
import { api } from "~/trpc/server";
export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
   <div>
    <Navbar />
    <Predstavitev />
    <Data />
   </div>

        
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}

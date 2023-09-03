import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Head from "next/head";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";
import Loading from "~/components/Loading";

const notifyNoResults = () => toast("No results found.");

export default function Page() {
  const { data: sessionData } = useSession();
  const { fetchByType } = useFetch();

  const { data: userData, refetch: refetchUser } = api.user.getOne.useQuery(
    {
      id: sessionData?.user.id as string,
    },
    {
      onSuccess: () => null,
    }
  );

  useEffect(() => {
    fetchByType("&query=pasta&offset=0")
      .then((res) => {
        if (res?.data.results[0]) {
          console.log(res);
        } else {
          console.error(
            `No results found for request: ${res?.request.responseURL}`
          );

          notifyNoResults();
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!sessionData) return <Loading />;

  return (
    <>
      <Head>
        <title>Cupboard - Dashboard</title>
        <meta name="description" content="Your dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <h1 className="text-5xl">Hi, {userData?.name?.split(" ")[0]}!</h1>
          <h3 className="text-2xl">
            Here is some recipes we think you'll love.
          </h3>
        </header>
        <button
          className="bg-white/10 text-white hover:bg-white/20 rounded-full px-10 py-3 font-semibold no-underline transition"
          onClick={() => void signOut({ redirect: true, callbackUrl: "/" })}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}

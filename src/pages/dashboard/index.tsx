import axios from "axios";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Head from "next/head";

export default function Page() {
  const { fetchByType } = useFetch();
  useEffect(() => {
    fetchByType("&query=pastrxfaf")
      .then((res) => {
        if (res?.data.results[0]) {
          console.log(res);
        } else {
          throw new Error(
            `No results found for request: ${res?.request.responseURL}`
          );
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Head>
        <title>Cupboard - Dashboard</title>
        <meta name="description" content="Your dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
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

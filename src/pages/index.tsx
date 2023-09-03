import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { type GetServerSideProps } from "next";
import Image from "next/image";
import APP_LOGO from "../assets/images/cupboardlogo-teal.png";
import { PiCookingPotDuotone } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cupboard - Home</title>
        <meta name="description" content="Your recipe hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <header className="flex items-center">
            <PiCookingPotDuotone className="text-7xl text-teal-dark" />
            <Image src={APP_LOGO} alt="logo" width={200} objectFit="contain" />
          </header>

          <button
            className="bg-white/10 text-white hover:bg-white/20 rounded-full px-10 py-3 font-semibold no-underline transition"
            onClick={() => void signIn()}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

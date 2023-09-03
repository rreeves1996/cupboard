import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Head from "next/head";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";
import { v4 } from "uuid";
import Loading from "~/components/Loading";
import DashboardCard from "~/components/DashboardCard";

const notifyNoResults = () => toast("No results found.");

export default function Page() {
  const { data: sessionData } = useSession();
  const { fetchByType } = useFetch();

  const [dishData, setDishData] = useState<DashboardDishData[]>([]);

  const { data: userData, refetch: refetchUser } = api.user.getOne.useQuery(
    {
      id: sessionData?.user.id as string,
    },
    {
      onSuccess: () => null,
    }
  );

  useEffect(() => {
    fetchByType(
      "&query=pasta&addRecipeInformation=true&addRecipeNutrition=true&offset=0&number=8"
    )
      .then((res) => {
        if (res?.data.results[0]) {
          console.log(res);
          setDishData(res.data.results);
        } else {
          console.error(
            `No results found for request: ${res?.request.responseURL}`
          );

          notifyNoResults();
        }
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(dishData);

  if (!sessionData) return <Loading />;

  return (
    <>
      <Head>
        <title>Cupboard - Dashboard</title>
        <meta name="description" content="Your dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full">
        <section className="flex w-1/4">
          <h1 className="text-4xl">hello</h1>
        </section>
        <section className="flex w-3/4 flex-col">
          <header className="text-offblack">
            <h1 className="text-5xl font-bold">
              Hi, {userData?.name?.split(" ")[0]}!
            </h1>
            <h3 className="text-2xl">
              Here are some recipes we think you'll love.
            </h3>
          </header>

          <section className="grid grid-cols-4 gap-2">
            {dishData.map((dish) => (
              <DashboardCard
                key={v4()}
                id={dish.id}
                title={dish.title}
                prepTime={dish.readyInMinutes}
                ingredientCount={dish.nutrition.ingredients.length()}
                calories={dish.nutrition.nutrients[0]?.amount}
                imageUrl={dish.image}
                imageType={dish.imageType}
              />
            ))}
          </section>

          <button
            className="bg-white/10 text-white hover:bg-white/20 rounded-full px-10 py-3 font-semibold no-underline transition"
            onClick={() => void signOut({ redirect: true, callbackUrl: "/" })}
          >
            Sign Out
          </button>
        </section>
      </div>
    </>
  );
}

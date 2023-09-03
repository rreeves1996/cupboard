import React from "react";
import axios from "axios";

export default function useFetch() {
  const fetchByType = async (params: string) => {
    try {
      const res: ResponseData = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}${params}`
      );

      return res;
    } catch (err) {
      console.error(err);
    }
  };
  return { fetchByType };
}

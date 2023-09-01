import { signOut } from "next-auth/react";
import React from "react";

export default function index() {
  return (
    <div>
      {" "}
      <button
        className="bg-white/10 text-white hover:bg-white/20 rounded-full px-10 py-3 font-semibold no-underline transition"
        onClick={() => void signOut({ redirect: true, callbackUrl: "/" })}
      >
        Sign Out
      </button>
    </div>
  );
}

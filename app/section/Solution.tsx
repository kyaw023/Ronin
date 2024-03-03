"use client";

import { useState } from "react";

export function Solution() {
  const [solution, setSolution] = useState([
    {
      id: 1,
      img: "https://cdn.skymavis.com/explorer-cdn/ronin-website/decentralization.png",
      title: "Decentralization",
      para: "Ronin uses DPoS to allow the token holders to participate in the selection of 22 validators.",
    },
    {
      id: 2,
      img: "https://cdn.skymavis.com/explorer-cdn/ronin-website/security.png",
      title: "Security",
      para: "The community selects 12 (trusted) Governing Validators to ensure Ronin's security.",
    },
    {
      id: 3,
      img: "https://cdn.skymavis.com/explorer-cdn/ronin-website/scalability.png",
      title: "Scalability",
      para: "Near-instant transactions and negligible transaction fees.",
    },
    {
      id: 4,
      img: "https://cdn.skymavis.com/explorer-cdn/ronin-website/user-experience.png",
      title: "User Experience",
      para: "A seamless blockchain experience, tailored for game developers and players.",
    },
  ]);
  return (
    <div className=" max-w-screen-xl mx-auto mt-20 px-4 md:px-0">
      <div>
        <h5 className=" text-2xl text-slate-500 ">Solution</h5>
        <h1 className=" md:text-6xl text-3xl font-medium mt-3 mb-12">
          Technology that Scales
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-8">
        {solution.map((f) => {
          return (
            <div
              key={f.id}
              className=" border-2 border-slate-500 bg-slate-900 px-10 py-10 rounded-2xl shadow-xl"
            >
              <img width={200} height={200} src={f.img} alt="" />
              <div className=" mt-8">
                <h1 className=" text-2xl font-semibold mb-3">{f.title}</h1>
                <p className=" max-w-sm">{f.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

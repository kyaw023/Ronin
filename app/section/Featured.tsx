"use client";

import { useState } from "react";

export function Featured() {
  
  const [features, setFeatures] = useState([
    {
      id: 1,
      img: "https://cdn.skymavis.com/explorer-cdn/ronin-website/satellite.png",
      title: "The #1 Web3 Gaming Community",
      para: "Deploy on Ronin and get instant access to an engaged community of Web 3 gamers.",
    },
    {
      id: 2,
      img: "https://cdn.skymavis.com/explorer-cdn/ronin-website/battle-trophy.png",
      title: "Battle-Tested",
      para: "Millions of users. Billions of dollars in NFT volume. Ronin has walked the walk.",
    },
    {
      id: 3,
      img: "https://cdn.skymavis.com/explorer-cdn/ronin-website/spinning-top.png",
      title: "Cost Optimized",
      para: "Transactions on Ronin are quick, cheap, and seamless.",
    },
    {
      id: 4,
      img: "https://cdn.skymavis.com/explorer-cdn/ronin-website/seamless-waves.png",
      title: "Seamless Deployment",
      para: "Ronin is EVM compatible, deploy your Ethereum applications quickly with no alterations.",
    },
  ]);

  return (
    <div className=" max-w-screen-xl mx-auto mt-20 px-4 md:px-0">
      <div>
        <h5 className=" text-2xl text-slate-500 ">Features</h5>
        <h1 className=" md:text-6xl text-3xl font-medium mt-3 mb-12">Web3 That Works</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-8">
        {features.map((f) => {
          return (
            <div key={f.id} className={` ${f.id === 1 && 'md:col-span-2'} ${f.id === 4 && 'md:col-span-2'}  border-2 border-slate-500 bg-slate-900 px-10 py-10 rounded-2xl shadow-xl`}>
              <img width={200} height={200} src={f.img} alt="" />
              <div className=" mt-8 ">
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

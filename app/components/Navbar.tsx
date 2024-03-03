"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { useState } from "react";
import { Light2Dark } from "./Light2Dark";
import { Learn } from "./NavComponent/Learn";
import { Participate } from "./NavComponent/Participate";
import { RNS } from "./NavComponent/RNS";
import { Community } from "./NavComponent/Community";

export function Nabvar() {
  const [drawIcon, setDrawIcon] = useState(false);
  const [navLi, setNavLi] = useState([
    {
      id: 1,
      title: "Become a Validator",
    },
    {
      id: 2,
      title: "Become a Delegator",
    },
    {
      id: 3,
      title: "Ronin Name Service",
    },
    {
      id: 4,
      title: "RNS Auction",
    },
    {
      id: 5,
      title: "Twitter",
    },
    {
      id: 6,
      title: "Discord",
    },
    {
      id: 6,
      title: "Blog",
    },
  ]);

  const drawIconHandler = () => {
    setDrawIcon(!drawIcon);
  };

  return (
    <>
      <div className=" bg-black fixed  shadow-inner w-full top-0 z-50 ">
        <div className=" max-w-screen-xl mx-auto px-4 md:px-0 py-4 flex items-center justify-between ">
          {/*logo  */}
          <div>
            <Image
              width={100}
              height={100}
              src="https://roninchain.com/static/images/ronin-nav-logo.svg"
            />
          </div>

          <div className=" relative">
            <ul
              className={` md:flex items-center gap-8 text-slate-50 md:bg-black top-16 md:top-0 transition-all duration-150 bg-slate-900 fixed md:static left-0 md:h-auto overflow-hidden md:overflow-visible right-0 bottom-0 select-none z-40 ${
                drawIcon ? "max-h-screen md:py-0 py-4" : "max-h-0 py-0"
              }`}
            >
              <div className=" md:flex md:gap-x-8">
                <Learn/>
              </div>

              <div className="hidden md:flex gap-x-8">
                <Participate/>
                <RNS/>
                <Community/>
                <li className="hover:text-blue-700">Blog</li>
              </div>

              <ul className=" md:hidden">
                {navLi.map((li, index) => (
                  <ul
                    key={index}
                    className=" flex items-center justify-between py-4 px-4 border-b-2 border-b-slate-600 md:px-0 md:py-0 md:border-none"
                  >
                    <li className="">{li.title}</li>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </div>
                  </ul>
                ))}
              </ul>
            </ul>
          </div>

          <div className=" flex items-center gap-x-3">
            <Button className=" bg-blue-700 text-slate-100 h-8 md:h-auto">
              Launch App
            </Button>
            <Light2Dark />
            <div
              onClick={drawIconHandler}
              className=" md:hidden active:scale-110"
            >
              {drawIcon ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

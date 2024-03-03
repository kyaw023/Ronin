"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export function Slider() {
  const [slideText, setSlideText] = useState([
    {
      id: 1,
      text: "It was essential for us to partner with a platform and team who understood how to make games and know the unique challenges game studios face. It was clear to us that gaming was in Ronin’s DNA and that we were aligned with the approach to community and how things should benefit the ecosystem and their players.",
      imgLink: "https://roninchain.com/static/images/Directive.png",
      title: "Atli Mar Sveinsson",
      para: "CEO and Co-Founder at Directive Games",
    },
    {
      id: 2,
      text: "Building on Ronin was truthfully an easy choice, when we consider how it was natively built for gaming, and how it scaled for Sky Mavis’ incredible gaming success, and the pairing with a world class Wallet, it’s the right fit for our ambitions.",
      imgLink: "https://roninchain.com/static/images/Tribes.png",
      title: "Glenn Mcguire",
      para: "Founder & CEO of Tribes Studio",
    },
    {
      id: 3,
      text: "Axie Infinity has paved the way for a new breed of digital games, attracting a strong community of players and enthusiasts. We are pleased to be the first cohort of game studios tapping into the power of the Ronin network.",
      imgLink: "https://roninchain.com/static/images/Bali.png",
      title: "Kim Yungwoo",
      para: "CEO of Bali Games",
    },
    {
      id: 4,
      text: "Ronin provides a robust, scalable, cost-effective infrastructure for Bowled.io and other built-in features. We get access to the global blockchain gaming community alongside many other projects so we can collaborate and deliver the best experience for gamers.",
      imgLink: "https://roninchain.com/static/images/Bowled.png",
      title: "Akshay Khandelwal",
      para: "Founder of Bowled.io",
    },
    {
      id: 5,
      text: "We chose Ronin because our mission is to build games and character IPs that are loved forever. From rewarding our longtime fans perpetual ownership of unique in-game items to having a community marketplace where players and creators can support each other, Battle Bears on Ronin makes all of this possible and more.",
      imgLink: "https://roninchain.com/static/images/sky-vu.png",
      title: "Ben Vu",
    },
    {
      id: 6,
      text: "Thanks to engaging gameplay, ease to use tooling and leading security - Ronin has become the top blockchain for gamers and Web3 investors. Deploying on Ronin was the highest priority to us to serve our community. The deployment process was incredibly smooth and we saw a surge in usage after we went live on Ronin!",
      imgLink: "https://roninchain.com/static/images/Metalend.png",
      title: "Sudjeev Singh",
      para: "Co-Founder of MetaLend",
    },
  ]);

  return (
    <div className="">
      <div className=" md:max-w-screen-xl max-w-[340px] mx-auto border shadow-xl rounded-3xl border-slate-500 select-none bg-slate-900 md:p-32 p-8 text-center z-50">
        <Carousel className=" z-0">
          <CarouselContent>
            {slideText.map((st) => {
              return (
                <CarouselItem key={st.id}>
                  <div>
                    <h1 className=" text-slate-100 md:text-4xl text-xl max-w-4xl  mx-auto mb-8">
                      {st.text}
                    </h1>
                    <img
                      className=" w-14 h-14 mx-auto mb-3"
                      src={st.imgLink}
                      alt=""
                    />
                    <p className=" text-slate-200 mb-3">{st.title}</p>
                    <h6 className=" text-slate-500">{st.para}</h6>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className=" md:w-14 md:h-14 absolute  md:left-0  -left-12  border-slate-500 shadow-xl active:scale-105" />
          <CarouselNext className="md:w-14 md:h-14 absolute -right-12 border-slate-500 shadow-xl active:scale-105" />
        </Carousel>
      </div>
    </div>
  );
}

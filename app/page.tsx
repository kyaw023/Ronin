import Image from "next/image";
import { Nabvar } from "./components/Navbar";
import { Hero } from "./section/Hero";
import { Slider } from "./section/Slider";
import { Featured } from "./section/Featured";
import { Solution } from "./section/Solution";
import { Participate } from "./section/Participate";
import { Transaction } from "./section/Transaction";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
       <Nabvar/>
       <Hero/>
       <Slider/>
       <Transaction/>
       <Featured/>
       <Solution/>
       <Participate/>
       <Footer/>
    </div>
  );
}

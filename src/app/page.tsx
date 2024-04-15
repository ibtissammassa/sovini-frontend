import { drupal } from "@/lib/drupal";
import { DrupalNode } from "next-drupal";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";

//images
import Hand_drawn_accents_left from "../../public/Hand-drawn-accents-left.png";
import Underline from "../../public/Underline.png";
import Hand_drawn_accents_right from "../../public/Hand-drawn-accents-right.png";


export default async function Home() {
  return (
  <div className="relative bg-[url('/HomePic.jpg')] w-full h-screen gap-4 px-44 text-center bg-cover flex flex-col items-center justify-center text-white">
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
    <div className="relative ">
      <h1 className="text-7xl font-bold z-10">Solve problems all around the world</h1>
      <Image className="absolute" alt="accent" src={Hand_drawn_accents_left}/>
      <Image className="absolute right-1/3 -bottom-1" alt="underline" src={Underline}/>
      <Image className="absolute right-0" alt="accent" src={Hand_drawn_accents_right}/>
    </div>
    <p className="text-lg z-10">Fund compaigns and missions in all the 234 countries on the globe</p>
    <div className="flex z-10 flex-col items-center gap-2 justify-center mt-5">
      <Button><Link href='/'>Get Started</Link></Button>
      <span className="text-sm">Already have an account? <Link className="underline" href='#'>login</Link></span>
    </div>
  </div>
  );
}

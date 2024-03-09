import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
      <div className="absolute bottom-[0.9rem] text-sm md:text-base flex  items-center justify-between rounded-lg overflow-hidden p-4 md:p-4 custom-bg z-[-1]">
        <p>
          Woven and wrought by Mohd Aadil, an alchemist of design, in the spirit
          of the Witcher&apos;s path.
        </p>
      </div>
    </main>
  );
}

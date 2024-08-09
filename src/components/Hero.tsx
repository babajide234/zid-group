import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { GridBackgroundDemo } from "./ui/grid-bg"
import { TypewriterEffect } from "./ui/typewriter-effect"

const Hero = () => {

  const words = [
    {
      text: "Pioneering",
    },
    {
      text: "Global",
    },
    {
      text: "Growth",
    },
    {
      text: "in",
    },
    {
      text: "Agriculture,",
    },
    {
      text: "Real",
    },
    {
      text: "Estate,",
    },
    {
      text: "and",

    },
    {
      text: "Mining",

    },
  ];
  return (
    <GridBackgroundDemo>
      <MaxWidthWrapper>
        <div className=" flex w-3/4 gap-5 justify-center flex-col mx-auto ">
          <TypewriterEffect words={words} className=" text-4xl"/>
          <div className=" w-4/5 mx-auto text-center">
            <p className=" text-xl text-gray-400">From Raw Materials to Finished Goods: Delivering Excellence at Every Step with Sustainable Solutions and Innovative Practices</p>
          </div>
          <div className="w-4/5 mx-auto text-center">
            <div className=" flex items-center justify-center gap-5">
              <Button className=" rounded-full bg-gray-500">Learn more</Button>
              <Button>Send us a message</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </GridBackgroundDemo>
  )
}

export default Hero
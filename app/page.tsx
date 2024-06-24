"use client";
import Image from "next/image";
import { projects } from "./data/projects";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect, useLayoutEffect } from "react";
import SmoothScrolling from "./components/SmoothScrolling";
import { time } from "console";

export default function Home() {
  const row1 = Object.keys(projects).slice(0, 4);
  const row1Clone = Object.keys(projects).slice(0, 3);
  const row2 = Object.keys(projects).slice(4, 8);
  const row2Clone = Object.keys(projects).slice(4, 7);
  // const row1Ref: any = useRef();
  const container = useRef(null);
  const row1ref = useRef(null);
  const row2ref = useRef(null);
  const row3ref = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        fastScrollEnd: 1000,
        preventOverlaps: true,
        // ease: "none",
        // markers: true,
      },
    });

    const row1Height = document.querySelector("#row1")?.clientHeight || 0;
    const row2Height = document.querySelector("#row2")?.clientHeight || 0;
    console.log(row1Height);
    const row1ToScroll = row1Height - window.innerHeight + 60;
    const row2ToScroll = row2Height - window.innerHeight + 60;
    timeline
      .fromTo(row1ref.current, { transform: `translateY(-2.5rem)` }, { transform: `translateY(-${row1ToScroll}px)`, ease: "none" })
      .fromTo(row2ref.current, { transform: `translateY(-${row2ToScroll}px)` }, { transform: `translateY(-2.5rem)`, ease: "none" }, 0)
      .fromTo(row3ref.current, { transform: `translateY(-2.5rem)` }, { transform: `translateY(-${row1ToScroll}px)`, ease: "none" }, 0);
    // .from(row1ref.current, { transform: `translateY(20vh)` })
    // .from(row2ref.current, { transform: `translateY(20vh)` })
    // .to(row1ref.current, { transform: `translateY(${row1Height}px)` })
    // .to(row2ref.current, { transform: `translateY(-${row2Height}px)` });
    // if (document.querySelector(".column__container") != null) {
    //   window.lenis.options.infinite = true;
    // }
  }, []);
  return (
    <main className=" min-h-screen h-[300vh] items-center justify-between py-12 overflow-hidden">
      <div id="container" className=" px-20 fixed top-0 left-0 w-full h-full" ref={container}>
        <div className="grid grid-cols-3 gap-20 overflow-hidden py-10">
          <SmoothScrolling>
            <div ref={row1ref} id="row1" className="flex flex-col overflow-scroll">
              {row1.map((key) => (
                <div className="w-full py-10" key={key}>
                  <img className="w-full" src={projects[key].banner} alt="" />
                </div>
              ))}
              {row1Clone.map((key) => (
                <div className="w-full py-10" key={key}>
                  <img className="w-full" src={projects[key].banner} alt="" />
                </div>
              ))}
            </div>
            <div ref={row2ref} id="row2" className="flex flex-col overflow-scroll">
              {row2.map((key) => (
                <div className="w-full py-10" key={key}>
                  <img className="w-full" src={projects[key].banner} alt="" />
                </div>
              ))}
              {row2Clone.map((key) => (
                <div className="w-full py-10" key={key}>
                  <img className="w-full" src={projects[key].banner} alt="" />
                </div>
              ))}
            </div>
            <div ref={row3ref} id="row3" className="flex flex-col overflow-scroll">
              {row1.map((key) => (
                <div className="w-full py-10" key={key + "3"}>
                  <img className="w-full" src={projects[key].banner} alt="" />
                </div>
              ))}
              {row1Clone.map((key) => (
                <div className="w-full py-10" key={key + "3cs"}>
                  <img className="w-full" src={projects[key].banner} alt="" />
                </div>
              ))}
            </div>
          </SmoothScrolling>
        </div>
      </div>
    </main>
  );
}

{
  /* <div className="absolute top-0 left-0 w-full h-full">
          <div className="overflow-hidden w-full">
            <div className="flex gap-10 w-full overflow-scroll">
              {row1.map((key) => (
                <div className="w-[450px] min-w-[450px]">
                  <img src={projects[key].banner} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <div className="flex gap-10 w-full">
              {row2.map((key) => (
                <div className="w-[450px] min-w-[450px]">
                  <img src={projects[key].banner} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div> */
}

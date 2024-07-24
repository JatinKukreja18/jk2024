"use client";
import Image from "next/image";
import { projects } from "./data/projects";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect, useLayoutEffect } from "react";
import SmoothScrolling from "./components/SmoothScrolling";
import { time } from "console";
import Demo from "./components/Demo";
import ProjectCard from "./components/ProjectCard";

function duplicateNodes(parentId: string, initialCount: number) {
  const parentElement = document.querySelector("#" + parentId);
  const ParentChildren = parentElement?.children || [];
  const ParentContent = Array.from(ParentChildren);
  console.log(parentId);

  if (ParentChildren.length === initialCount * 2) {
    console.log("do nothing");
  } else {
    ParentContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");

      parentElement?.appendChild(duplicatedItem);
    });
  }
}

export default function Home() {
  const row1 = Object.keys(projects).slice(0, 4);
  const row2 = Object.keys(projects).slice(4, 8);
  const row3 = Object.keys(projects).slice(8, 12);
  // const row1Ref: any = useRef();
  const container = useRef(null);
  const row1ref = useRef(null);
  const row2ref = useRef(null);
  const row3ref = useRef(null);

  useLayoutEffect(() => {
    duplicateNodes("row1", row1.length);
    duplicateNodes("row2", row2.length);
    duplicateNodes("row3", row3.length);

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
    const row3Height = document.querySelector("#row2")?.clientHeight || 0;

    const row1ToScroll = row1Height - window.innerHeight;
    const row2ToScroll = row2Height - window.innerHeight;
    const row3ToScroll = row3Height - window.innerHeight;
    // console.table([row1Height, window.innerHeight, row1ToScroll]);
    const row1fromOffset = row1Height / 2 - window.innerHeight - 40;
    const row2fromOffset = row2Height / 2 - window.innerHeight - 40;
    const row3fromOffset = row3Height / 2 - window.innerHeight - 30;
    timeline
      .fromTo(
        row1ref.current,
        { transform: `translateY(-40px)` },
        { transform: `translateY(-${row1ToScroll - row1fromOffset}px)`, ease: "none" }
      )
      .fromTo(
        row2ref.current,
        { transform: `translateY(-${row2ToScroll - row2fromOffset}px)` },
        { transform: `translateY(-40px)`, ease: "none" },
        0
      )
      .fromTo(
        row3ref.current,
        { transform: `translateY(-40px)` },
        { transform: `translateY(-${row3ToScroll - row3fromOffset}px)`, ease: "none" },
        0
      );
    // .fromTo(
    //   row3ref.current,
    //   { transform: `translateY(-${fromOffset}px)` },
    //   { transform: `translateY(-${row1ToScroll}px)`, ease: "none" },
    //   0
    // );
  }, []);
  return (
    <main className=" min-h-screen h-[300vh] overflow-hidden">
      <div id="container" className=" px-8 lg:px-20 fixed top-0 left-0 w-full h-full" ref={container}>
        <div className="grid grid-cols-3 gap-8 lg:gap-20 overflow-hidden py-10">
          <SmoothScrolling>
            <div ref={row1ref} id="row1" className="flex flex-col overflow-scroll">
              {row1.map((key) => (
                <ProjectCard key={key + 1} project={projects[key]} />
              ))}
            </div>
            <div ref={row2ref} id="row2" className="flex flex-col overflow-scroll">
              {row2.map((key) => (
                <ProjectCard key={key + 2} project={projects[key]} />
              ))}
            </div>
            <div ref={row3ref} id="row3" className="flex flex-col overflow-scroll">
              {row3.map((key) => (
                <ProjectCard key={key + 3} project={projects[key]} />
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

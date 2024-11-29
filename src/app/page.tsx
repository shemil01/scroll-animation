"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const rows = containerRef.current.querySelectorAll(".row");

    rows.forEach((row) => {
      const leftImage = row.querySelector(".left");
      const rightImage = row.querySelector(".right");

      // Animate left image to move left and up
      gsap.to(leftImage, {
        x: -200, // Move left
        y: -50, // Slightly up
        rotation: -10, // Slight rotation
        scrollTrigger: {
          trigger: row,
          start: "top 80%", // Start animation when the row is 80% into the viewport
          end: "top 20%", // End animation
          scrub: true, // Smooth animation during scroll
        },
      });

      // Animate right image to move right and up
      gsap.to(rightImage, {
        x: 200, // Move right
        y: -50, // Slightly up
        rotation: 10, // Slight rotation
        scrollTrigger: {
          trigger: row,
          start: "top 80%", // Start animation when the row is 80% into the viewport
          end: "top 20%", // End animation
          scrub: true, // Smooth animation during scroll
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    return Array.from({ length: 3 }, (_, i) => (
      <div key={i} className="row relative w-full m-4 flex justify-center gap-8">
        {/* Left Image */}
        <div className="left relative w-2/5 h-80 rounded-lg overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src={`/img-${2 * i + 1}.jpg`}
            alt={`Image ${2 * i + 1}`}
          />
        </div>

        {/* Right Image */}
        <div className="right relative w-2/5 h-80 rounded-lg overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src={`/img-${2 * i + 2}.jpg`}
            alt={`Image ${2 * i + 2}`}
          />
        </div>
      </div>
    ));
  };

  return (
    <div>
      {/* Section 1 */}
      {/* <section className="relative flex justify-center items-center">
        <div>
          <img
            className="object-cover h-full w-full"
            src="/gf.png"
            alt="Intro Background"
          />
        </div>
      </section> */}

      {/* Section 2 */}
      <section ref={containerRef} className="relative flex flex-col items-center">
        <div>
          <img
            className="object-cover h-full w-full"
            src="/intro.jpeg"
            alt="Intro Image"
          />
        </div>
        <div className="text-center mt-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Vivamus tincidunt ligula vitae turpis consequat feugiat.</p>
          <p>Proin ac mauris id risus feugiat suscipit et id lectus.</p>
        </div>
        {generateRows()}
      </section>

      {/* Section 3 */}
      <section className="h-[200px] flex justify-center items-center bg-gray-200">
        <p>Placeholder for additional content</p>
      </section>
    </div>
  );
}

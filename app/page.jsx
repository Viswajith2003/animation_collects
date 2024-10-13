"use client";
import { useEffect } from "react";
import Square from "./Square";
import ParallaxBackground from "./Parallex";

export default function Home() {
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");

    if (bgAnimation) {
      const numberOfColorBoxes = 400;

      for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("colorBox");
        bgAnimation.appendChild(colorBox);
      }
    }
  }, []);

  return (
    <div>
      <Square/>
      {/* <ParallaxBackground/> */}
    </div>
  );
}

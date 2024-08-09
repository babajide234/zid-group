import React from "react";

export function GridBackgroundDemo({ children}:{ children?: React.ReactNode}) {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {children}
    </div>
  );
}

import React from "react";

const ParticleAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-screen h-screen">
      <div
        className="particle bg-yellow-300 w-4 h-4 rounded-full absolute animate-particle1"
        style={{ zIndex: 10, top: "40%", left: "10%" }}
      ></div>
      <div
        className="particle bg-blue-300 w-4 h-4 rounded-full absolute animate-particle2"
        style={{ zIndex: 10, top: "40%", left: "20%" }}
      ></div>
      <div
        className="particle bg-red-300 w-4 h-4 rounded-full absolute animate-particle3"
        style={{ zIndex: 10, top: "40%", left: "30%" }}
      ></div>
    </div>
  );
};

export default ParticleAnimation;

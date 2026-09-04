"use client";

import RoomEnvironment from "./RoomEnvironment";
import Monitor from "./Monitor";
import Desk from "./Desk";
import BackgroundRobot from "./BackgroundRobot";

export default function AIRoom() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none opacity-45 sm:opacity-55 lg:opacity-75 transition-opacity duration-1000"
    >
      {/* Ambient Room Environment Backing */}
      <RoomEnvironment />

      {/* Main Workspace Composition — Positioned strategically in the back center-right to frame Hero smoothly */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-12 xl:pr-24">
        <div className="relative w-full max-w-xl flex flex-col items-center scale-75 sm:scale-90 md:scale-95 lg:scale-100 translate-y-12 sm:translate-y-8">
          {/* Dual Monitors on Desk */}
          <div className="relative z-10 translate-y-2">
            <Monitor />
          </div>

          {/* Android Robot Positioned in Chair Facing Desk/Monitor */}
          <div className="relative z-20 -mt-10 sm:-mt-12">
            <BackgroundRobot />
          </div>

          {/* Modern Desk Surface with Keyboard and Peripherals */}
          <div className="relative z-30 -mt-8 sm:-mt-10 w-full">
            <Desk />
          </div>
        </div>
      </div>

      {/* Vignette Overlay & Soft Radial Fade to prevent any competition with Hero foreground */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#020617_90%)] pointer-events-none" />
    </div>
  );
}

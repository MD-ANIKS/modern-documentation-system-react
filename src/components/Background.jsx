import React from "react";

export default function Background() {
  return (
    <div className="background fixed w-full h-full z-[2] pointer-events-none">
      <h1 className="absolute w-full text-center top-5 font-semibold text-sm text-zinc-600">
        Documents
      </h1>

      <h3 className="text-zinc-900 font-semibold text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Docs.
      </h3>
    </div>
  );
}

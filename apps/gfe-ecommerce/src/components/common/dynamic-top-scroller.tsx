'use client'

import dynamic from "next/dynamic";

const DynamicTopScroller = dynamic(() => import("./top-scroller"), {
  ssr: false,
});

export default DynamicTopScroller;
"use client";

import { useEffect } from "react";

const TopScroller = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return <div></div>;
};

export default TopScroller;
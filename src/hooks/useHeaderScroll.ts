import React, { useEffect, useState } from "react";

function useHeaderScroll() {
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setOnScroll(window.scrollY > window.innerHeight - 50);
      setOnScroll(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    onScroll,
  };
}

export default useHeaderScroll;

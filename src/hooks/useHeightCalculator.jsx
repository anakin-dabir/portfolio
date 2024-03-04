import { useState, useEffect } from "react";

const useHeightCalculator = () => {
  const [height, setHeight] = useState(
    window.innerWidth >= 824 ? window.innerHeight - 260 : window.innerHeight - 320
  );
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 824) {
        setHeight(window.innerHeight - 260);
      } else {
        setHeight(window.innerHeight - 320);
      }
    };
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return { height };
};

export default useHeightCalculator;

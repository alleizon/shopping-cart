import { useEffect, useState } from "react";

const useResizeWindow = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [hideFilters, setHideFilters] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setHideFilters(width < 900);
  }, [width]);

  return hideFilters;
};

export default useResizeWindow;

// CustomMediaQuery.js
import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", handleChange);

    // Set initial value
    setMatches(media.matches);

    // Cleanup
    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;

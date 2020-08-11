import React, { useState, useEffect } from "react";
import QuestionPanel from "./QuestionPanel";
import { questions } from "../questions";

export default function QuestionPanelContainer(props) {
  const { currentIndex, questionTracker } = props;
  const size = useWindowSize();

  return (
    <div>
      {size.height < 800 ? null : (
        <QuestionPanel currentIndex={currentIndex} questionTracker={questionTracker} />
      )}
    </div>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

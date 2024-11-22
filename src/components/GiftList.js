// src/components/GiftList.js
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import GiftCard from "./GiftCard";
import "./GiftList.css";
import gifts from "../data/gifts";

const GiftList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleSwipeLeft();
    } else if (event.key === "ArrowLeft") {
      handleSwipeRight();
    }
  };

  const handleSwipeLeft = () => {
    if (currentIndex < gifts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(),
    onSwipedRight: () => handleSwipeRight(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    gifts.length > 0 && (
      <div {...handlers} className="gift-list">
        <GiftCard
          key={gifts}
          gift={JSON.parse(
            process.env[gifts[currentIndex]].replace(/\\"/g, '"')
          )}
        />
      </div>
    )
  );
};

export default GiftList;

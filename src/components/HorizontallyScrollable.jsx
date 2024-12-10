import React, { useRef } from "react";

export default function HorizontallyScrollable({ children, className = "" }) {
  const scrollRef = useRef();

  const handleMouseDown = (evt) => {
    evt.preventDefault();
    const oldX = evt.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (evt) => {
      const newX = evt.pageX;
      const offset = newX - oldX;
      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleMouseUp = () => {
      // Remove the event listeners when the mouse is released
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    // Add event listeners for dragging
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={className} ref={scrollRef} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
}

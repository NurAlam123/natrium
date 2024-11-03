import { useEffect } from "react";

const useMouseHoverEffect = () => {
  useEffect(() => {
    // For computer
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseleave", resetCursorOnEnd);

    // For phones
    document.addEventListener("touchmove", touchMoveEvent);
    document.addEventListener("touchend", resetCursorOnEnd);
  }, []);

  return () => {
    document.removeEventListener("mousemove", mouseMoveEvent);
    document.removeEventListener("mouseleave", resetCursorOnEnd);
    document.removeEventListener("touchmove", touchMoveEvent);
    document.removeEventListener("touchend", resetCursorOnEnd);
  };
};

const mouseMoveEvent = (event: MouseEvent) => {
  const x = event.clientX;
  const y = event.clientY;
  changeCursorOnMove(x, y);
};

const touchMoveEvent = (event: TouchEvent) => {
  const touch = event.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;
  changeCursorOnMove(x, y);
};

const changeCursorOnMove = (x: number, y: number) => {
  const cursorDiv = document.querySelector(".cursor") as HTMLDivElement;

  if (!cursorDiv) return;

  cursorDiv.style.setProperty("--x", `${x}px`);
  cursorDiv.style.setProperty("--y", `${y}px`);
  cursorDiv.style.opacity = "1";
  cursorDiv.style.setProperty("--visible", "inherit");
  cursorDiv.style.setProperty("--visibility-delay", "0s");
  cursorDiv.style.setProperty("--visibility-timing", "ease-in");
};

const resetCursorOnEnd = () => {
  const cursorDiv = document.querySelector(".cursor") as HTMLDivElement;

  if (!cursorDiv) return;

  cursorDiv.style.setProperty("--visible", "hidden");
  cursorDiv.style.opacity = "0";
  cursorDiv.style.setProperty("--visibility-delay", "0.4s");
  cursorDiv.style.setProperty("--visibility-timing", "ease-out");
};

export default useMouseHoverEffect;

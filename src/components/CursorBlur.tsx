"use client";

import useMouseHoverEffect from "@/hooks/useMouseHoverEffect";

const CursorBlur = () => {
  useMouseHoverEffect();

  return <div className="cursor" />;
};

export default CursorBlur;

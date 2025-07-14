import React from "react";
import { Button } from "../ui/button";

const WhiteBackgroundButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Button
      className="bg-white text-black text-2xl px-16 py-7 rounded-full cursor"
      style={{ cursor: "url('/images/cursor.png'), auto" }}
    >
      {children}
    </Button>
  );
};

export default WhiteBackgroundButton;

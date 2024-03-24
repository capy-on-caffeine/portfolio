import React from "react";
import { Link } from "react-router-dom";

const Hyperlink = ({ children, to }) => {
  const sectionHash = `#${to}`;
  return (
    <Link
      to={sectionHash}
      className="relative flex flex-1 cursor-pointer items-center justify-center"
    >
      {children}
    </Link>
  );
};

export default Hyperlink;

import React from "react";

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (<>
  <h2>{title}</h2>
  </>);
};

export default Header;

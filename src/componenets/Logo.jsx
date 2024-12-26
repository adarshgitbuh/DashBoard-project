import React from "react";
import logoImg from "/niveus.png";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="Logo" width={50} height={50} />
    </div>
  );
}

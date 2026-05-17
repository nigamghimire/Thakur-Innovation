import React from "react";
import logoWhite from "../assets/logo.white.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-56 w-auto" }: LogoProps) {
  return (
    <div className="flex items-center">
      <img 
        src={logoWhite} 
        alt="Thakur Innovation Logo" 
        className={className}
      />
    </div>
  );
}

import React from "react";
import logo from "../assets/logo.png";

export default function Logo({ className = "h-40 w-auto" }: { className?: string }) {
  return (
    <div className="flex items-center">
      <img 
        src={logo} 
        alt="Thakur Innovation Logo" 
        className={className}
      />
    </div>
  );
}

"use client";

import React from "react";

interface QRCodeSVGProps {
  url?: string;
  size?: number;
  className?: string;
}

export const QRCodeSVG: React.FC<QRCodeSVGProps> = ({
  url = "https://github.com/prasad1271",
  size = 140,
  className = "",
}) => {
  return (
    <div
      className={`p-3 rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center border border-slate-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-slate-900"
      >
        {/* Outer Corner Finder Pattern Top Left */}
        <rect x="2" y="2" width="7" height="7" fill="currentColor" />
        <rect x="3" y="3" width="5" height="5" fill="white" />
        <rect x="4" y="4" width="3" height="3" fill="currentColor" />

        {/* Outer Corner Finder Pattern Top Right */}
        <rect x="20" y="2" width="7" height="7" fill="currentColor" />
        <rect x="21" y="3" width="5" height="5" fill="white" />
        <rect x="22" y="4" width="3" height="3" fill="currentColor" />

        {/* Outer Corner Finder Pattern Bottom Left */}
        <rect x="2" y="20" width="7" height="7" fill="currentColor" />
        <rect x="3" y="21" width="5" height="5" fill="white" />
        <rect x="4" y="22" width="3" height="3" fill="currentColor" />

        {/* Timing Lines & Micro Data Modules */}
        <rect x="10" y="3" width="2" height="2" fill="currentColor" />
        <rect x="13" y="2" width="2" height="2" fill="currentColor" />
        <rect x="16" y="4" width="2" height="2" fill="currentColor" />
        
        <rect x="3" y="10" width="2" height="2" fill="currentColor" />
        <rect x="6" y="12" width="2" height="2" fill="currentColor" />
        <rect x="10" y="10" width="3" height="3" fill="currentColor" />
        <rect x="14" y="9" width="2" height="2" fill="currentColor" />
        <rect x="17" y="11" width="2" height="2" fill="currentColor" />
        
        <rect x="20" y="10" width="2" height="2" fill="currentColor" />
        <rect x="23" y="12" width="3" height="2" fill="currentColor" />
        <rect x="22" y="15" width="2" height="3" fill="currentColor" />

        {/* Center Alignment / Logo Grid */}
        <rect x="11" y="14" width="7" height="7" fill="#0284c7" />
        <rect x="13" y="16" width="3" height="3" fill="white" />

        <rect x="2" y="14" width="2" height="2" fill="currentColor" />
        <rect x="5" y="16" width="2" height="2" fill="currentColor" />
        <rect x="8" y="15" width="2" height="2" fill="currentColor" />

        <rect x="10" y="22" width="2" height="2" fill="currentColor" />
        <rect x="13" y="24" width="3" height="2" fill="currentColor" />
        <rect x="18" y="20" width="2" height="2" fill="currentColor" />
        <rect x="21" y="22" width="3" height="2" fill="currentColor" />
        <rect x="24" y="20" width="2" height="3" fill="currentColor" />
        <rect x="20" y="25" width="4" height="2" fill="currentColor" />
        <rect x="25" y="25" width="2" height="2" fill="currentColor" />
      </svg>
    </div>
  );
};

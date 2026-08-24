"use client";

import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

interface QRCodeSVGProps {
  url?: string;
  size?: number;
  className?: string;
  darkColor?: string;
  lightColor?: string;
}

export const QRCodeSVG: React.FC<QRCodeSVGProps> = ({
  url = "https://github.com/prasad1271",
  size = 120,
  className = "",
  darkColor = "#0f172a",
  lightColor = "#ffffff",
}) => {
  const [svgString, setSvgString] = useState<string>("");

  useEffect(() => {
    QRCode.toString(
      url,
      {
        type: "svg",
        margin: 1,
        color: {
          dark: darkColor,
          light: lightColor,
        },
        errorCorrectionLevel: "M",
      },
      (err, string) => {
        if (!err && string) {
          setSvgString(string);
        }
      }
    );
  }, [url, darkColor, lightColor]);

  return (
    <div
      className={`p-2.5 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-200 overflow-hidden relative group/qr ${className}`}
      style={{ width: size, height: size }}
    >
      {svgString ? (
        <div
          className="w-full h-full [&>svg]:w-full [&>svg]:h-full transition-transform duration-300 group-hover/qr:scale-105"
          dangerouslySetInnerHTML={{ __html: svgString }}
        />
      ) : (
        <div className="w-full h-full bg-slate-100 animate-pulse rounded-lg" />
      )}
    </div>
  );
};


import Image from "next/image";
import React from "react";

interface buttonprops {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant:
    | "btn_dark_green"
    | "btn_green"
    | "btn_white_text"
    | "btn_dark_green_outline";
  full?: boolean;
}

export default function Button({
  type = "button",
  title,
  icon,
  variant,
  full,
}: buttonprops) {
  return (
    <button
      type={type}
      className={`${variant} flexCenter gap-2 rounded-full border ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      {title}
    </button>
  );
}

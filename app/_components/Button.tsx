import Image from "next/image";
import React from "react";

interface buttonprops {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: "btn_dark_green" | "btn_green" | "btn_white_text";
}

export default function Button({
  type = "button",
  title,
  icon,
  variant,
}: buttonprops) {
  return (
    <button
      type={type}
      className={`${variant} flexCenter gap-2 rounded-full border`}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      {title}
    </button>
  );
}

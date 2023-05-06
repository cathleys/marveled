import React from "react";
import { CustomButton } from "./button.style";
import Link from "next/link";

type ButtonProps = {
  label: string;
  href: {} | string;
  onClick?: () => void;
};

export function PageButton({ label, href, onClick }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <CustomButton onClick={onClick}>{label}</CustomButton>
    </Link>
  );
}

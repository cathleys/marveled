import React from "react";
import { CustomButton } from "./page-button.style";
import Link from "next/link";

type ButtonProps = {
  label: string;
  href: string;
};

export function PageButton({ label, href }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <CustomButton>{label}</CustomButton>
    </Link>
  );
}

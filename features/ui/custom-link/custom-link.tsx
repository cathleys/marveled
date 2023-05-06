import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

type CustomLinkProps = {
  href: string;
  label?: string;
  target?: string;
};

const Anchor = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 0.5rem;

  &:focus {
    color: #f2c94d;
  }
`;
export function CustomLink({ href, label, target }: CustomLinkProps) {
  return (
    <Anchor href={href} passHref target={target}>
      {label}
    </Anchor>
  );
}

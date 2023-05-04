import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

type CustomLinkProps = {
  href: string;
  label?: string;
};

const Anchor = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0 0.5rem;

  &:focus {
    color: orange;
  }
`;
export function CustomLink({ href, label }: CustomLinkProps) {
  return (
    <Anchor href={href} passHref>
      {label}
    </Anchor>
  );
}

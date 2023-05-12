import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

type CustomLinkProps = {
  href: string;
  label?: string;
  target?: string;
  isActive: boolean;
};

const ListItem = styled.li<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0.3rem;
  background: ${({ isActive }) => (isActive ? "#344054" : "transparent")};
  border-radius: 0.2rem;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  padding: 0 0.5rem;
  color: white;
`;
export function CustomLink({ href, label, target, isActive }: CustomLinkProps) {
  return (
    <ListItem isActive={isActive}>
      <Anchor href={href} passHref target={target}>
        {label}
      </Anchor>
    </ListItem>
  );
}

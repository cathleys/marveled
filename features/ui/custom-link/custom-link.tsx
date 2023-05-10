import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

type CustomLinkProps = {
  href: string;
  label?: string;
  target?: string;
  isActive: boolean;
};

const ListItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0.5rem;
  background: ${({ isActive }) => (isActive ? "#344054" : "transparent")};

  border-radius: 0.3rem;
`;

const Anchor = styled(Link)<{ isActive?: boolean }>`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? " #f2c94d" : " white")};
  padding: 0 0.5rem;
`;
export function CustomLink({ href, label, target, isActive }: CustomLinkProps) {
  return (
    <ListItem isActive={isActive}>
      <Anchor href={href} passHref target={target} isActive={isActive}>
        {label}
      </Anchor>
    </ListItem>
  );
}

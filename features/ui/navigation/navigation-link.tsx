import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import MenuItem from "@mui/material/MenuItem";
type NavigationLinkProps = {
  href: string;
  label?: string;
  target?: string;
};

export const ListItem = styled(MenuItem)`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0.3rem;
  border-radius: 0.2rem;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  padding: 0 0.5rem;
  color: black;
`;
export function NavigationLink({ href, label, target }: NavigationLinkProps) {
  return (
    <ListItem>
      <Anchor href={href} passHref target={target}>
        {label}
      </Anchor>
    </ListItem>
  );
}

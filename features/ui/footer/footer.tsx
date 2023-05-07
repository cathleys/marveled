import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  background: #343a40;
  color: white;
`;
export const Anchor = styled(Link)`
  text-decoration: none;
  color: white;
`;
type FooterProps = {
  copyright: string;
};

export function Footer({ copyright }: FooterProps) {
  return <Container>Copyright {copyright + "ED"}</Container>;
}

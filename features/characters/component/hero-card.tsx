import { Routes } from "@config/routes";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

type CardProps = {
  name: string;
  id: number;
  thumbnail: string;
};

const Card = styled.div`
  border: 1px solid black;
  border-radius: 0.3rem;
  overflow: hidden;
  animation: fadeIn 0.3s ease-in-out forwards;
  position: relative;
`;
const Image = styled.img`
  min-width: 100%;
`;
export default function HeroCard({ id, thumbnail }: CardProps) {
  return (
    <Link href={`${Routes.hero}/${id}`} passHref>
      <Card>
        <Image src={thumbnail} alt="thumbnail" />
      </Card>
    </Link>
  );
}

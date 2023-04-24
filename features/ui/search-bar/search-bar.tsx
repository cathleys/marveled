import React, { useRef } from "react";
import { Input } from "./search-bar.style";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Routes } from "@config/routes";

export function SearchBar() {
  let inputRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <Input type="search" placeholder="Search your hero..." ref={inputRef} />
      <Link href={`${Routes.characters}`} passHref>
        <Button
          variant="outlined"
          style={{ color: "white", border: "1px solid white" }}
        >
          Search
        </Button>
      </Link>
    </form>
  );
}

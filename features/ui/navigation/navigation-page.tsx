import * as React from "react";
import { Routes } from "@config/routes";
import { NavigationLink, TransparentButton } from "@features";
import { NavItems } from "@features/ui/search-container/search-container.style";
import Menu from "@mui/material/Menu";

const menuItems = [
  { label: "Characters A-Z", href: Routes.characterIndex },
  { label: "Comics", href: Routes.comics },
  { label: "Favorites", href: Routes.favorites },
  { label: "Take A Quiz", href: Routes.quiz },
];
export function NavigationPage() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TransparentButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </TransparentButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <NavItems>
          {menuItems.map((menuItem, index) => (
            <NavigationLink key={index} {...menuItem} />
          ))}
        </NavItems>
      </Menu>
    </>
  );
}

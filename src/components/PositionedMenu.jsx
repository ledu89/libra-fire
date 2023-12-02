import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaArrowRight } from "react-icons/fa";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src="../assets/hamburger.svg" />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <a href="#">Asortimen</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <a href="#">Installateursnetwerk</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#">
            Up-To-Date{" "}
            <span>
              <FaArrowRight />
            </span>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#">
            Services{" "}
            <span>
              <FaArrowRight />
            </span>
          </a>{" "}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#">
            Wie zijn wij{" "}
            <span>
              <FaArrowRight />
            </span>
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}

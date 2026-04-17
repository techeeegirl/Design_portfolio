import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/Navigation.css";

export function Navigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{ borderBottom: 1, borderColor: "divider" }}
      className="navigation"
      bgcolor="#02735E"
    >
      <Tabs
        aria-label="scrollable tabs"
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        value={value}
        centered
      >
        <Tab label="Home" href="#home" />
        <Tab label="Projects" href="#projects" />
        <Tab label="Skills" href="#skills" />
        <Tab label="Contact" href="#contact" />
      </Tabs>
    </Box>
  );
}

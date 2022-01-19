import React from "react";
import { Box, MenuIcon } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default MenuToggle;

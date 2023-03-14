import React, { useContext } from "react";
// Import link
import { Link } from "react-router-dom";
// Import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// Import components
import CartItem from "../components/CartItem";
// Import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return <div>Sidebar</div>;
};
//34.01
export default Sidebar;

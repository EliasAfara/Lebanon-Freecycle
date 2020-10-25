import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  SidebarBtn,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleNavBar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleNavBar}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggleNavBar}>
            About
          </SidebarLink>
          <SidebarLink to="/donations" onClick={toggleNavBar}>
            Donations
          </SidebarLink>
          <SidebarLink to="/requests" onClick={toggleNavBar}>
            Requests
          </SidebarLink>
          <SidebarLink to="/login" onClick={toggleNavBar}>
            Login
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarBtn to="/register" onClick={toggleNavBar}>
            Join for free
          </SidebarBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

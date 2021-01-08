import styled from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #ffdf6c;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const SidebarLink = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  border-radius: 50px;
  margin-bottom: 30px;
  font-size: 1.5rem;
  color: #fff;
  list-style: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #1890ff;
    transition: 0.2s ease-in-out;
  }
  &.active {
    color: #1890ff;
    border-left: 2px solid #1890ff;
    border-right: 2px solid #1890ff;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtn = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 200px;
  height: 50px;
  color: #fff;
  background: #1890ff;
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #1890ff;
    border: 2px solid #1890ff;
    font-weight: 600;
  }
  &.active {
    display: none;
  }
`;

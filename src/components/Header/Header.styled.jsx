import styled from "styled-components";
import { primaryFont } from "../fonts";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.4rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 6.4rem;
  z-index: 50;
  max-width: 1440px;
`;

export const HeaderNavMenu = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.mainTextColor};
  color: ${({ theme }) => theme.colors.headerTextColor};
  line-height: 1.28571;
  transition: all var(--primary-transition);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.pinkColor};
    transform-origin: right;
    transform: scaleX(0);
    transition: transform var(--primary-transition);
  }

  &:hover::before,
  &:focus::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.activeLinkColor};
  }

  &.active {
    color: ${({ theme }) => theme.colors.activeLinkColor};
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

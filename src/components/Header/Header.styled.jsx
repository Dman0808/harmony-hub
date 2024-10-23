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
  background-color: ${(p) => p.theme.colors.headerBg};
`;

export const HeaderNavMenu = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

// export const HeaderNavLink = styled(NavLink)`
//   font-family: ${primaryFont};
//   font-size: 1.6rem;
//   font-weight: 700;
//   line-height: 1.5;
//   text-transform: uppercase;
//   text-decoration: none;
//   transition: color var(--primary-transition);
//   color: ${(p) => p.theme.colors.headerTextColorLowOp};

//   &:hover {
//     color: ${(p) => p.theme.colors.headerTextColor};
//   }

//   &.active {
//     color: ${(p) => p.theme.colors.headerTextColor};
//   }
// `;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const MobileHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    ${(p) => p.theme.colors.heroSecondOverlayColor}
      ${(p) => p.theme.colors.heroOverlayColor}
  );
  border-radius: 50rem;
  z-index: 1500;
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: #00000070;
  z-index: 1000;
  transform: translateY(${(props) => (props?.$isOpen ? "0%" : "-150%")});
  transition: transform 5s ease-in-out;
`;

export const HeaderItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const HeaderIcons = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.headerTextColor};
  transition: all var(--primary-transition);
  transition-delay: 0.25s;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderText = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.headerTextColor};
  line-height: 1.28571;

  transition: all var(--primary-transition);

  transform: scale(0);
  transition-delay: 0s;
`;

export const HeaderNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 3.2rem;
  height: 3.2rem;
  position: relative;

  border-radius: 50rem;
  background-color: transparent;

  transition: all var(--primary-transition);

  &:hover {
    transform: scale(1.05);
    width: 9.2rem;
    background-color: ${({ theme }) => theme.colors.mainBgColor};
  }

  &:hover {
    ${HeaderIcons} {
      transform: scale(0);
      transition-delay: 0s;
    }
  }

  &:hover {
    ${HeaderText} {
      transform: scale(1);
      transition-delay: 0.25s;
      color: ${({ theme }) => theme.colors.mainTextColor};
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.mainBgColor};

    ${HeaderIcons} {
      color: ${({ theme }) => theme.colors.mainTextColor};
    }
    ${HeaderText} {
      color: ${({ theme }) => theme.colors.mainTextColor};
    }
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

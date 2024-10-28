import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FaRegCopyright } from "react-icons/fa";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  right: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const FooterText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.headerTextColor};
  white-space: nowrap;
`;

export const FooterIcon = styled(FaRegCopyright)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.headerTextColor};
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-decoration: none;
  font-weight: 700;
  transition: color var(--primary-transition);
  padding-bottom: 0.1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainTextColor};

  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
    border-bottom-color: ${({ theme }) => theme.colors.accentColor};
  }
`;

import styled from "styled-components";
import { primaryFont } from "@/components/fonts";
import aboutBg from "/images/about-bg.png";

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.2rem;
  margin: 0 auto;
  margin-top: 10.8rem;
  margin-left: 16.4rem;
`;

export const AboutImgWrapper = styled.div`
  position: relative;
`;

export const AboutImg = styled.img`
  width: 100%;
  max-width: 26rem;
  height: auto;

  position: absolute;
  top: -3.8rem;
  left: -6.8rem;
`;

export const AboutTitleWrapper = styled.div`
  padding-left: 19.6rem;
`;

export const AboutTitle = styled.h2`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 0.88;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.violetColor};
  white-space: nowrap;
  margin-bottom: 0.8rem;
`;

export const AboutTitleText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mainTextColor};
  width: 100%;

  @media (min-width: 1440px) {
    font-size: 1.8rem;
    max-width: 42rem;
  }
`;

export const AboutText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mainTextColor};
  width: 100%;

  @media (min-width: 1440px) {
    font-size: 1.8rem;
    max-width: 54rem;
  }
`;

export const AboutThirdText = styled(AboutText)`
  @media (min-width: 1440px) {
    max-width: 64rem;
  }
`;

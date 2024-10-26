import styled from "styled-components";
import { primaryFont } from "@/components/fonts";

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.2rem;
  gap: 1.2rem;
  margin: 0 auto;
  margin-top: 12.4rem;
  margin-bottom: 2.4rem;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1440px) {
    align-items: start;
    margin-top: 10.8rem;
    margin-left: 16.4rem;
    margin-bottom: 0;
  }
`;

export const AboutImgWrapper = styled.div`
  position: relative;
`;

export const AboutImg = styled.img`
  width: 100%;
  max-width: 26rem;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  display: none;

  @media (min-width: 768px) {
    display: block;
    top: -3.8rem;
    left: -6.8rem;
    right: unset;
  }
`;

export const AboutTitleWrapper = styled.div`
  padding-left: 0;

  @media (min-width: 768px) {
    padding-left: 19.6rem;
  }
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

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    font-size: 1.8rem;
    max-width: 64rem;
  }
`;

export const AboutThirdText = styled(AboutText)`
  @media (min-width: 768px) {
    max-width: 64rem;
  }
`;

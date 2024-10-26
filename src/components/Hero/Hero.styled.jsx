import styled, { keyframes } from "styled-components";
import { primaryFont } from "../fonts";
import { IoMusicalNote } from "react-icons/io5";
import { MdOutlineMusicNote } from "react-icons/md";
import { RiMusic2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const noteIconFirst = keyframes`
  0% {
    opacity: 1;
    transform: scale(1) rotate(-25deg);

  }
  50% {
    opacity: 0;
    transform: scale(1.25) rotate(-35deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(-25deg);
  }
`;

const noteIconSecond = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);

  }
  50% {
    opacity: 0;
    transform: scale(1.25) ;
  }
  100% {
    opacity: 1;
    transform: scale(1) ;
  }
`;

const noteIconThird = keyframes`
  0% {
    opacity: 1;
    transform: scale(1 rotate(15deg));

  }
  50% {
    opacity: 0;
    transform: scale(1.25) rotate(25deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(15deg);
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1.2rem;
  gap: 2.4rem;

  @media (min-width: 1440px) {
    gap: 4.8rem;
    align-items: start;
    justify-content: unset;
    margin-top: 14.8rem;
    margin-left: 12.4rem;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 0.88;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    90deg,
    #f72585 0,
    #7209b7 20%,
    #ff073a 40%,
    #fb8500 60%,
    #ff006e 80%,
    #4cc9f0 100%
  );
  background-size: 100%;
  -webkit-box-decoration-break: clone;

  @media (min-width: 360px) {
    font-size: 3.4rem;
  }

  @media (min-width: 380px) {
    font-size: 3.6rem;
  }

  @media (min-width: 768px) {
    white-space: nowrap;
    font-size: 4.4rem;
  }

  @media (min-width: 1440px) {
    font-size: 5.2rem;
  }
`;

export const HeroText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mainTextColor};
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    max-width: 54rem;
  }
`;

export const MusicNoteIcon = styled(IoMusicalNote)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.pinkColor};
  transform: rotate(-25deg);

  transition: opacity var(--primary-transition);
`;

export const MusicNoteIconSecond = styled(RiMusic2Line)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.violetColor};

  transition: opacity var(--primary-transition);
`;

export const MusicNoteIconThird = styled(MdOutlineMusicNote)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.redColor};
  transform: rotate(15deg);

  transition: all var(--primary-transition);
`;

export const HeroButton = styled(Link)`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 4.8rem;
  padding-right: 2.4rem;
  border-radius: 1.6rem;
  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.buttonBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBgColor};
    color: ${({ theme }) => theme.colors.mainTextColor};

    ${MusicNoteIcon} {
      animation: ${noteIconFirst} 3s infinite;
    }
    ${MusicNoteIconSecond} {
      animation: ${noteIconSecond} 3s 0.4s infinite;
    }
    ${MusicNoteIconThird} {
      animation: ${noteIconThird} 3s 0.2s infinite;
    }
  }

  @media (min-width: 768px) {
    max-width: 32rem;
  }
`;

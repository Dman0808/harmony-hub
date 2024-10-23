import styled, { keyframes } from "styled-components";
import { primaryFont } from "../fonts";
import { IoMusicalNote } from "react-icons/io5";
import { MdOutlineMusicNote } from "react-icons/md";
import { RiMusic2Line } from "react-icons/ri";

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
  align-items: start;
  gap: 4.8rem;
  margin: 0 auto;
  margin-top: 12.4rem;
  margin-left: 12.4rem;
`;

export const HeroTitle = styled.h1`
  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 5.2rem;
  line-height: 0.88;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentColor};
  color: #4cc9f0;
  position: relative;
  white-space: nowrap;
  text-shadow: 0 0 5px #4cc9f0, 0 0 5px #4cc9f0, 0 0 10px #4cc9f0,
    0 0 15px #f72585, 0 0 20px #f72585, 0 0 25px #f72585, 0 0 35px #f72585,
    0 0 40px #f72585;

  &::before {
    content: "Find Your Perfect Harmony";
    font-size: 5.2rem;
    position: absolute;
    top: 0;
    left: 0;
    color: rgb(247, 37, 133);
    color: transparent;
    -webkit-text-stroke: 1px #49ff18;
  }
`;

export const HeroText = styled.p`
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

export const MusicNoteIcon = styled(IoMusicalNote)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.pinkColor};
  transform: rotate(-25deg);
  /* opacity: 0; */

  transition: opacity var(--primary-transition);
`;

export const MusicNoteIconSecond = styled(RiMusic2Line)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.orangeColor};
  /* opacity: 0; */

  transition: opacity var(--primary-transition);
`;

export const MusicNoteIconThird = styled(MdOutlineMusicNote)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.redColor};
  /* opacity: 0; */
  transform: rotate(15deg);

  transition: all var(--primary-transition);
`;

export const HeroButton = styled.button`
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
`;

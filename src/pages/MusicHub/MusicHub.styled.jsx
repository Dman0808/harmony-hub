import styled from "styled-components";
import { primaryFont } from "@/components/fonts";

export const MusicHubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1.2rem;
`;

export const MusicTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;

  @media (min-width: 768px) {
    width: unset;
  }
`;

export const MusicTitle = styled.h2`
  font-size: 3.2rem;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-transform: capitalize;
  line-height: 1;
`;

export const MusicFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem;
  background-color: rgb(253, 255, 252, 0.9);
  border-radius: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    min-width: 56rem;
    max-width: 64rem;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StepCounter = styled.p`
  font-family: ${primaryFont};
  font-size: 1.2rem;
  color: #7a7a7a;
  line-height: 1;
`;

export const QuestionText = styled.p`
  font-family: ${primaryFont};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-weight: 700;
  line-height: 1.2;
`;

export const ExampleText = styled.p`
  font-family: ${primaryFont};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-weight: 400;
  line-height: 1;
`;

export const AnswerInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: ${({ theme }) => theme.colors.darkBlueColor};
    box-shadow: 0 0 3px rgba(0, 119, 255, 0.3);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NextButton = styled.button`
  width: 100%;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.darkBlueColor};
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background-color var(--primary-transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverDarkBlueColor};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    /* max-width: 24rem; */
  }
`;

export const RedirectButton = styled.button`
  width: 100%;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.darkGreenColor};
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background-color var(--primary-transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreenColorHover};
  }
`;

export const ResetButton = styled.button`
  width: 100%;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.mainTextColor};
  background-color: transparent;
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.redColor};
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background-color var(--primary-transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.redColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    outline: 2px solid ${({ theme }) => theme.colors.redColor};
  }

  @media (min-width: 768px) {
    /* max-width: 24rem; */
  }
`;

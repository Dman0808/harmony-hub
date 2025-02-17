import styled from "styled-components";
import Button from "@mui/material/Button";
import Container from "@mui/material/Box";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { primaryFont } from "../../components/fonts";
import { Link as StyledLink } from "react-router-dom";

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 1.2rem;
  overflow-x: hidden;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 1.2rem;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const SignInSignUpBoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  position: relative;
`;

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  max-width: 300px;
  padding: 2.4rem;

  @media (min-width: 365px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    padding: 4rem;
    max-width: 424px;
  }
`;

export const Form = styled(Box)`
  width: 100%;
`;

export const ButtonEl = styled(Button)`
  width: 100%;
  height: 4.9rem;
`;

export const BtnLogInSpan = styled.span`
  color: ${(p) => p.theme.colors.whiteColor};
  font-family: ${primaryFont};
  font-size: 1.4rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: all var(--primary-transition);
`;

export const ButtonStyled = styled.div`
  width: 100%;
  max-width: 260px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${(p) => p.theme.colors.buttonBgColor};
  font-size: 2.4rem;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.buttonHoverBgColor};
    ${BtnLogInSpan} {
      color: ${(p) => p.theme.colors.mainTextColor};
    }
  }
`;

export const LinkStyled = styled(Link)`
  color: ${(p) => p.theme.colors.accentColor};
`;

export const RegistrationLink = styled(StyledLink)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;

  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.violetColor};
    cursor: pointer;
  }
`;

export const TypoStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const TypoTitleStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: ${primaryFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

export const TextFieldStyled = styled(TextField)`
  width: 100%;
  max-width: 260px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }

  input {
    border-radius: 0.4rem;
    color: ${(p) => p.theme.colors.mainTextColor};
    font-family: ${primaryFont};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    border-radius: 4px;
    transition: all var(--primary-transition);

    outline: 1px solid
      ${(p) => (p.error ? p.theme.colors.redColor : p.theme.colors.blueColor)};
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

    &:focus-within {
      outline: none;
    }

    &::placeholder {
      color: ${(p) => p.theme.colors.mainTextColor};
      font-family: ${primaryFont};
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      font-size: 1.4rem;
    }
  }

  fieldset {
    border: 1px solid
      ${(p) => (p.error ? p.theme.colors.redColor : p.theme.colors.blueColor)};
  }

  &:hover fieldset {
    border: none;
  }

  &:focus-within fieldset {
    border: 1px solid
      ${(p) => (p.error ? p.theme.colors.redColor : p.theme.colors.blueColor)};
  }
`;

export const EyePasswordWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 256px;

  @media (min-width: 365px) {
    max-width: 287px;
  }

  @media (min-width: 768px) {
    max-width: 344px;
  }
`;

export const EyeIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;

  transform: translateY(-35%);
  font-size: 2rem;
  color: ${(p) => p.theme.colors.headerTextColor};

  &:hover {
    cursor: pointer;
  }
`;

export const SignInErrorMessage = styled.p`
  position: absolute;
  top: -0.4rem;
  right: 0;
  color: ${(p) => p.theme.colors.redColor};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

import { useState } from "react";
import Box from "@mui/material/Box";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailRegex from "../../regex/emailRegex";
import { Helmet } from "react-helmet-async";
import {
  BoxStyled,
  FormWrapper,
  SignInSignUpBoxStyled,
} from "../SignIn/SignIn.styled";
import {
  ContainerSignUpStyled,
  ErrorMessage,
  EyeIconSignUpWrapper,
  EyePasswordSignUpWrap,
  LinkSignUpStyled,
  SignUpButtonEl,
  SignUpButtonStyled,
  TextFieldSignUpStyled,
  TypoSignUpStyled,
  TypoTitleSignUpStyled,
  LoginLink,
  BtnSpan,
  PasswordErrorMessage,
  SignUpTextField,
} from "./SignUp.styled";
import { useDispatch } from "react-redux";
import { register } from "@/redux/auth/operations";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Copyright(props) {
  return (
    <TypoSignUpStyled
      variant="body2"
      align="center"
      {...props}
      style={{ fontSize: "1rem" }}
    >
      {"Alex Smagin © "}
      <LinkSignUpStyled
        color="inherit"
        href="https://alexandrbig1.github.io/harmony-hub/"
        target="_blank"
      >
        Harmony Hub
      </LinkSignUpStyled>{" "}
      {new Date().getFullYear()}
      {"."}
    </TypoSignUpStyled>
  );
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newErrors = {};

    if (name.trim().length === 0) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (email.trim().length === 0) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (password.length < 6 || password.length > 20) {
      newErrors.password = "Password must be between 6 and 20 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      dispatch(
        register({
          name,
          email,
          password,
        })
      );
      form.reset();
    }
  };

  return (
    <>
      <Helmet>
        <title>Harmony Hub - Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Join Harmony Hub website." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Join Harmony Hub" />
        <meta property="og:description" content="Join Harmony Hub website." />
        <meta
          property="og:url"
          content="https://alexandrbig1.github.io/harmony-hub/"
        />
      </Helmet>
      <ThemeProvider theme={customTheme}>
        <ContainerSignUpStyled>
          <FormWrapper>
            <BoxStyled>
              <SignInSignUpBoxStyled>
                <TypoTitleSignUpStyled variant="h5">
                  Sign Up
                </TypoTitleSignUpStyled>
                <LoginLink to="/signin">Sign In</LoginLink>
              </SignInSignUpBoxStyled>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 2,
                  width: { sm: "376px", xs: "312px" },
                }}
              >
                <SignUpTextField>
                  <TextFieldSignUpStyled
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    placeholder="Enter your name"
                    autoFocus
                    error={errors.name ? true : false}
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                  <TextFieldSignUpStyled
                    required
                    fullWidth
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    autoComplete="email"
                    error={errors.email ? true : false}
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </SignUpTextField>
                <EyePasswordSignUpWrap>
                  <TextFieldSignUpStyled
                    placeholder="Create a password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    type={showPassword ? "text" : "password"}
                    error={errors.password ? true : false}
                  />

                  {errors.password && (
                    <PasswordErrorMessage>
                      {errors.password}
                    </PasswordErrorMessage>
                  )}
                  <EyeIconSignUpWrapper onClick={handleClickShowPassword}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </EyeIconSignUpWrapper>
                </EyePasswordSignUpWrap>
                <SignUpButtonStyled>
                  <SignUpButtonEl type="submit" color="inherit">
                    <BtnSpan>Register Now</BtnSpan>
                  </SignUpButtonEl>
                </SignUpButtonStyled>
              </Box>
            </BoxStyled>
            <Copyright />
          </FormWrapper>
        </ContainerSignUpStyled>
      </ThemeProvider>
    </>
  );
}

import {
  FooterContainer,
  FooterIcon,
  FooterLink,
  FooterText,
  FooterWrapper,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>all rights reserved</FooterText>
        <FooterIcon />
        <FooterText>
          created by{" "}
          <FooterLink href="https://www.alexsmagin.dev" target="blank">
            Alex Smagin
          </FooterLink>
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;

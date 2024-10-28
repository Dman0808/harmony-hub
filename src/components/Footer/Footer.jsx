import SocialIcons from "../UI/SocialIcons/SocialIcons";
import Year from "../UI/Year/Year";
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
      <SocialIcons />
      <FooterWrapper>
        <FooterText>
          all rights reserved <Year />
        </FooterText>
        <FooterIcon />
        <FooterText>
          created by{" "}
          <FooterLink
            href="https://www.alexsmagin.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Alex Smagin personal website"
          >
            Alex Smagin
          </FooterLink>
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;

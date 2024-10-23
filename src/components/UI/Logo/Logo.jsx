import { LogoImg, LogoText, LogoWrapper } from "./Logo.styled";

function Logo() {
  return (
    <LogoWrapper
      href="/"
      aria-label="Home Page"
      title="Go to Home Page"
      role="link"
    >
      <LogoImg src="/logo.svg" alt="Harmony Hub Official Logo" />
      <LogoText>Harmony Hub</LogoText>
    </LogoWrapper>
  );
}

export default Logo;

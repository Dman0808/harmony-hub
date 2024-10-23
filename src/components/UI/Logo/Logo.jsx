import { LogoImg } from "./Logo.styled";

export default function Logo() {
  return (
    <a href="/" aria-label="Home Page" title="Go to Home Page" role="link">
      <LogoImg src="/logo.svg" alt="Harmony Hub official logo" />
    </a>
  );
}

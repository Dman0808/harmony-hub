import { FooterContainer } from "./Footer.styled";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <p>all rights reserved</p>
      <FaRegCopyright />
      <p>created by</p> <a>Alex Smagin</a>
    </FooterContainer>
  );
}

export default Footer;

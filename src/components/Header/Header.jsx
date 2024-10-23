import Logo from "../UI/Logo/Logo";
import MenuLists from "../../data/menuLists";
import { motion } from "framer-motion";
import MenuBurgerIcon from "./MenuBurgerIcon";
import {
  BurgerWrapper,
  HeaderItems,
  HeaderNavLink,
  HeaderNavMenu,
  HeaderNavWrapper,
  HeaderText,
  HeaderWrapper,
} from "./Header.styled";

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderNavWrapper>
        <nav>
          <HeaderNavMenu>
            {MenuLists.map(({ to, list }) => {
              return (
                <HeaderItems key={to}>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", delay: 0.25 }}
                  >
                    <HeaderNavLink to={to}>
                      <HeaderText>{list}</HeaderText>
                    </HeaderNavLink>
                  </motion.div>
                </HeaderItems>
              );
            })}
          </HeaderNavMenu>
          {/* <MobileHeader /> */}
        </nav>
        <BurgerWrapper>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 1.5 }}
          >
            <MenuBurgerIcon />
          </motion.div>
        </BurgerWrapper>
      </HeaderNavWrapper>
    </HeaderWrapper>
  );
}

export default Header;

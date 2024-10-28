import { motion } from "framer-motion";
import { useMenu } from "../../context/ToggleMenuContext";
import SocialIcons from "../UI/SocialIcons/SocialIcons";
import menuItems from "../../data/menuLists";
import Logo from "@/components/UI/Logo/Logo";
import { useAuth } from "../../hooks/useAuth";
import {
  BurgerContainer,
  CloseBurgerMenu,
  Menu,
  BurgerMenuItems,
  BurgerLogoWrapper,
  MenuBurgerText,
  MenuBurgerLinkIcon,
  MenuBurgerItems,
  BurgerMenuFooterWrapper,
  CloseBurgerIcon,
  CloseBurgerWrapper,
} from "./MenuBurger.styled";
import Footer from "../Footer/Footer";

// eslint-disable-next-line react/prop-types
export default function MenuBurger() {
  const { toggleMenu, menuOpen } = useMenu();
  const { isLoggedIn } = useAuth();

  const filteredMenu = menuItems.filter((item) => {
    return item.id !== "music-hub" || isLoggedIn;
  });

  const menuVars = (index) => ({
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5 * index,
        ease: [0.12, 0, 0.39, 0],
        type: "spring",
      },
    },
  });

  return (
    <Menu $isOpen={menuOpen}>
      <CloseBurgerWrapper>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Logo />
          </motion.div>
        )}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <CloseBurgerMenu
              type="button"
              aria-label="Close Menu"
              onClick={toggleMenu}
            >
              <CloseBurgerIcon />
            </CloseBurgerMenu>
          </motion.div>
        )}
      </CloseBurgerWrapper>
      <BurgerContainer>
        <nav>
          <BurgerMenuItems>
            {filteredMenu.map(({ to, list, id }, idx) => (
              <MenuBurgerItems
                key={id}
                onClick={toggleMenu}
                variants={menuVars(idx)}
                initial="initial"
                animate="animate"
              >
                <MenuBurgerText to={to} end>
                  <MenuBurgerLinkIcon />
                  {list}
                </MenuBurgerText>
              </MenuBurgerItems>
            ))}
          </BurgerMenuItems>
        </nav>
      </BurgerContainer>
      <BurgerMenuFooterWrapper>
        <BurgerLogoWrapper>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <Footer />
            </motion.div>
          )}
        </BurgerLogoWrapper>
      </BurgerMenuFooterWrapper>
    </Menu>
  );
}

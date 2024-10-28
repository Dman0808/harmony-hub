import { motion } from "framer-motion";
import {
  GitHubIcon,
  Link,
  LinkedInIcon,
  SocialLinksWrapper,
  TwitterIcon,
  YouTubeIcon,
} from "./SocialIcons.styled";

// eslint-disable-next-line react/prop-types
function SocialIcons() {
  return (
    <SocialLinksWrapper>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.25 }}
      >
        <Link
          href="https://www.linkedin.com/in/alex-smagin29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin LinkedIn Profile"
          title="Visit Alex Smagin LinkedIn Profile"
        >
          <LinkedInIcon />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <Link
          href="https://github.com/Alexandrbig1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin GitHub account"
          title="Visit Alex Smagin GitHub account"
        >
          <GitHubIcon />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.75 }}
      >
        <Link
          href="https://www.youtube.com/@AlexSmaginDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin YouTube channel"
          title="Visit Alex Smagin channel"
        >
          <YouTubeIcon />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <Link
          href="https://x.com/alexsmagin29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin Twitter Profile"
          title="Visit Alex Smagin Twitter Profile"
        >
          <TwitterIcon />
        </Link>
      </motion.div>
    </SocialLinksWrapper>
  );
}

export default SocialIcons;

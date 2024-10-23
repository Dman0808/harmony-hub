import {
  HeroButton,
  HeroText,
  HeroTitle,
  HeroWrapper,
  MusicNoteIcon,
  MusicNoteIconSecond,
  MusicNoteIconThird,
} from "./Hero.styled";

function Hero() {
  return (
    <HeroWrapper>
      <HeroTitle>Find Your Perfect Harmony</HeroTitle>
      <HeroText>
        Harmony Hub curates personalized music playlists based on your mood and
        preferences. Let the power of AI help you find the perfect tunes for any
        moment.
      </HeroText>
      <HeroButton>
        <span>Get Started</span>
        <div>
          <MusicNoteIcon />
          <MusicNoteIconSecond />
          <MusicNoteIconThird />
        </div>
      </HeroButton>
    </HeroWrapper>
  );
}

export default Hero;

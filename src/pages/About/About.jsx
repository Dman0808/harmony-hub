import {
  AboutImg,
  AboutImgWrapper,
  AboutText,
  AboutThirdText,
  AboutTitle,
  AboutTitleText,
  AboutTitleWrapper,
  AboutWrapper,
} from "./About.styled";

function About() {
  return (
    <AboutWrapper>
      <AboutImgWrapper>
        <AboutImg src="/images/about-bg.png" alt="tech cat image" />
        <AboutTitleWrapper>
          <AboutTitle>About Us:</AboutTitle>
          <AboutTitleText>
            Harmony Hub is your personalized music companion, designed to bring
            you the perfect playlist based on your current mood. Powered by
            advanced AI and integrated with Spotify, our app asks you a few
            simple questions to understand how you're feeling and what you're
            looking for in music.
          </AboutTitleText>
        </AboutTitleWrapper>
      </AboutImgWrapper>
      <AboutText>
        Whether you're feeling energetic, mellow, or anywhere in between,
        Harmony Hub is here to match your emotions with the right tunes. No more
        searching for the perfect playlist – we do it for you. Simply sign up,
        answer five quick questions, and let Harmony Hub curate the perfect
        soundtrack for your moment.
      </AboutText>
      <AboutThirdText>
        Music has the power to shape our emotions and enhance our experiences.
        Harmony Hub was built to ensure that every moment, no matter the mood,
        is accompanied by the ideal music. With our app, you no longer need to
        scroll endlessly for that perfect track – just tell us how you're
        feeling, and we'll handle the rest.
      </AboutThirdText>
    </AboutWrapper>
  );
}

export default About;

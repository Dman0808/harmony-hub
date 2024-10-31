import { Helmet } from "react-helmet-async";
import { NotFoundImg, NotFoundText, NotFoundWrapper } from "./NotFound.styled";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Harmony Hub</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="noindex, follow" />

        <meta
          property="og:title"
          content="404 - Page Not Found | Harmony Hub"
        />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:site_name" content="Harmony Hub" />

        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
        <meta
          name="twitter:title"
          content="404 - Page Not Found | Harmony Hub"
        />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/favicon.svg" />
      </Helmet>
      <NotFoundWrapper>
        <NotFoundImg src="/images/404.svg" alt="Error icon" />
        <NotFoundText>
          Looks like the page you're searching for isn’t playing our tune. Try
          heading back to the homepage, or double-check the link. We’ll get you
          back in sync in no time!
        </NotFoundText>
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;

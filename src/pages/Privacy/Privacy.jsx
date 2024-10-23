import { Helmet } from "react-helmet-async";

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Harmony Hub - Privacy Policy</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Harmony Hub - Privacy Policy" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        {/* <meta property="og:image" content="/logo.png" /> */}
        <meta property="og:site_name" content="Harmony Hub" />

        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
        <meta name="twitter:title" content="Harmony Hub - Privacy Policy" />
        <meta name="twitter:description" content="" />
        {/* <meta name="twitter:image" content="/logo.png" /> */}
      </Helmet>

      <div>Privacy</div>
    </>
  );
}

export default Privacy;

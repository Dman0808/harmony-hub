import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle } from "./GlobalStyle";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "../router/router";
import "react-toastify/dist/ReactToastify.css";
import FontsHelmet from "./FontsHelmet";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FontsHelmet />
        <ToastContainer />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

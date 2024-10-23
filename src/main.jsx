import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { MenuContext } from "./context/ToggleMenuContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuContext>
      <App />
    </MenuContext>
  </StrictMode>
);

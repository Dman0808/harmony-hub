import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { MenuContext } from "./context/ToggleMenuContext";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuContext>
          <App />
        </MenuContext>
      </PersistGate>
    </Provider>
  </StrictMode>
);

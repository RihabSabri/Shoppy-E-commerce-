import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ebc814",
    },
    secondary: {
      main: "#ffd500",
    },
  },
  fontFamily: "playfair",
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);

import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;

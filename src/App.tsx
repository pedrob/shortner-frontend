import React from "react";
import Routes from "./routes";
import GlobalStyle from "./styles";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes />
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;

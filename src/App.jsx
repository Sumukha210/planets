import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/common/Navbar";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
import { DataContextProvider } from "./Context/DataContext";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <DataContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Favorite} path="/favorite" />
            </Switch>
          </BrowserRouter>
        </DataContextProvider>
      </Main>
    </>
  );
};

export default App;

const Main = styled.div`
  font-family: "Poppins", sans-serif;
`;

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

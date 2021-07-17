import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import BookDetail from "../pages/BookDetail";
import { history } from '../redux/ConfigStore';
import Header from '../components/Header';
import "../App.css"
import styled from 'styled-components';
import Main from "../pages/Main"

const App = () => {
  return (
    <MainContainer >
      <Header />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/bookdetail" exact component={BookDetail} />
          <Route path="/" exact component={Main} />
        </Switch>
      </ConnectedRouter>
    </MainContainer>
  );
}

const MainContainer = styled.div`
width:100vw;
height:100vh;
box-sizing:border-box;
overflow-x: hidden;
overflow-y: scroll;
font-family: "NotoSans";
`



export default App;
import React, { Component, createContext } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import Card from './Components/Card';


const colors = {
    dark: '#494ca2',
    med: '#8186d5',
    light: '#c6cbef',
    xlight: '#e3e7f1'
}

export const ColorTheme = createContext();

const MainWindow = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: ${colors.xlight};
    align-items: center;
    justify-content: center;
`
class App extends Component {
  render() {
    return (
        <ColorTheme.Provider value={colors}>
            <MainWindow>
                <Card/>
            </MainWindow>
        </ColorTheme.Provider>
    );
  }
}

export default App;

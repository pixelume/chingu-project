import React, { createContext, useState } from "react";
import styled, {css} from "styled-components";
import "./App.css";
import Card from "./Components/Card";
import menuData from '../src/Data/menuData';
import Hangman from './Containers/Hangman';
import Trivia from './Containers/Trivia';
import ComingSoon from './Containers/ComingSoon';
import { fadeZoomOut, fadeZoomIn } from './animations';
import {Button} from './UI/Button';


export const StateContext = createContext(null);

const MainWindow = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`
;
const GamesGridWrapper = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    max-width: 800px;
    justify-content: center;
    animation: ${fadeZoomIn} 0.3s ease-in-out;
    ${props => props.animOut
            ? css`animation: ${fadeZoomOut} 0.3s ease-in-out;`
            : null}
`;

const SingleGameWrapper = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    color: white;
    width: 800px;
    height: 600px;
    border-radius: 20px;
    margin-bottom: 15px;
    background-color: salmon;
    animation: ${fadeZoomIn} 0.3s ease-in-out;
    ${props => props.animOut
        ? css`animation: ${fadeZoomOut} 0.3s ease-in-out;`
        : null}
`;

export default () => {
    const [activeDisplay, setActiveDisplay] = useState("main");
    const [animateOut, setAnimateOut] = useState(false);
    const animToNext = next => {
        setAnimateOut(true);
        setTimeout(() => {
            setActiveDisplay(next);
            setAnimateOut(false);
        }, 280);
    }
    return (
        <StateContext.Provider value={{activeDisplay, setActiveDisplay, setAnimateOut, animToNext}}>
            <MainWindow>
                    {activeDisplay === "main" &&
                        <GamesGridWrapper
                            animOut={animateOut}
                        >
                            {menuData.map(data => <Card
                                key={data.title}
                                heading={data.title}
                                description={data.descr}
                                coverImg={data.image}
                            />)}
                        </GamesGridWrapper>}
                    
                    {activeDisplay !== "main" && 
                        <>
                        <SingleGameWrapper
                            animOut={animateOut}
                        >
                            {activeDisplay === "Hangman" && <Hangman/>}
                            {activeDisplay === "Trivia Quiz" && <Trivia/>}
                            {activeDisplay === "Battleship" && <ComingSoon/>}
                            {activeDisplay === "Mastermind" && <ComingSoon/>}
                        </SingleGameWrapper>
                        <Button onClick={() => animToNext("main")}>《 Home</Button>
                        </>}
            </MainWindow>
        </StateContext.Provider>
    );
}

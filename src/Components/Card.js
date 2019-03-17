import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { StateContext } from "../App";
import { hoverAnim, fadeIn, slideUp, slideDown } from '../animations';

const TriggerBox = styled.div`
    transform: scale(1);
    &:hover {
        transform: scale(1.05);
    }
    transition: transform 0.3s ease-in-out;
`

const CardContainer = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    margin: 10px;
    background-color: #efefef;
    text-align: center;
    border-radius: 20px;
    border: 0.5px solid lightgrey;
    box-sizing: border-box;
    background-image: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    box-shadow: none;
    transition: box-shadow 0.5s ease-in-out;
    ${props =>
        props.active
            ? css`
            animation: ${hoverAnim} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
            box-shadow: 3px 5px 13px 0px rgba(0,0,0,0.60);`
            : null} 
`;

const DescrContainer = styled.div`
    color: white;
    border-radius: 20px;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    animation: ${fadeIn} 0.5s ease-in-out;
`

const DescrHeading = styled.h2`
    animation: ${slideDown} 0.5s ease-in-out;
`

const Descr = styled.p`
    animation: ${slideUp} 0.5s ease-in-out;
`

export default ({heading, description, coverImg}) => {
    const [cardActive, setCardActive] = useState(false);
    const { setActiveDisplay, animToNext } = useContext(StateContext);

    return (
        <TriggerBox
            onMouseEnter={() => setCardActive(true)}
            onMouseLeave={() => setCardActive(false)}
        >
            <CardContainer
                active={cardActive}
                // bg={light}
                bgImg={coverImg}
            >
                {cardActive &&
                    <DescrContainer onClick={() => animToNext(heading)}>
                        <DescrHeading style={{color: "white"}}>{heading}</DescrHeading>
                        <Descr>
                            {description}
                        </Descr>
                    </DescrContainer>}
            </CardContainer>
        </TriggerBox>
    );
};

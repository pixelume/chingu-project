import React, {useContext} from 'react';
import styled, {keyframes} from 'styled-components';
import {ColorTheme} from '../App';

// const fadeZoomOut = keyframes`
//     from {
//         opacity: 1.0;
//         transform: scale(1, 1);
//         filter: blur(0px);
//         }
//     to {
//         opacity: 0;
//         transform: scale(0.5, 0.5);
//         filter: blur(10px);
//         }
// `;

const fadeZoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.8, 0.8);
        filter: blur(10px);
        /* box-shadow: none; */
        }
    to {
        opacity: 1.0;
        transform: scale(1, 1);
        filter: blur(0px);
        /* box-shadow: 1px 2px 13px 0px rgba(0,0,0,0.41); */
        }
`;

const CardContainer = styled.div`
    width: 30%;
    padding: 50px;
    background-color: ${props => props.bg || 'inherit'};
    text-align: center;
    border-radius: 20px;
    /* box-shadow: 1px 2px 13px 0px rgba(0,0,0,0.41); */
    animation: ${fadeZoomIn} 0.5s ease-in-out;
`

export default () => {
    const {light} = useContext(ColorTheme);
    return (
        <CardContainer bg={light}>Hello</CardContainer>
    )
}

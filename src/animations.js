import {keyframes} from 'styled-components';

export const fadeZoomOut = keyframes`
    from {
        opacity: 1;
        transform: scale(1, 1);
        filter: blur(0px);
        }
    to {
        opacity: 0;
        transform: scale(0.5, 0.5);
        filter: blur(10px);
        }
`;
export const fadeZoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.5, 0.5);
        filter: blur(10px);
        }
    to {
        opacity: 1;
        transform: scale(1, 1);
        filter: blur(0px);
        }
`;
export const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
}
`
export const slideUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`
export const fadeIn = keyframes`
    from {
        opacity: 0;
        }
    to {
        opacity: 1.0;
        }
`;
export const hoverAnim = keyframes`
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
`;
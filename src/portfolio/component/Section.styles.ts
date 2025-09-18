import styled from "styled-components";
import { MdControlPoint } from "react-icons/md";

export const Contianer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2vw;
    height: 100vh;
    padding: 0 2vw;

    color: #fff;
    font-family: 'Arial', sans-serif;
`

export const LeftPanel = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
`

export const RightPanel = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
`

export const Address = styled.p`
    color: #fff;
    &:hover {
        color: #facc15;
    }
`

export const IDPWBox = styled.div`
    margin: 5px 0;
`

export const StyledIcon = styled(MdControlPoint)`
    transform: translateY(2px);
    font-size: 1em;
`;

export const StyledContents = styled.p`
    margin: 2px 0;
    white-space: nowrap;
`
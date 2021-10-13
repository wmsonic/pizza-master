import styled from 'styled-components'
import { Link } from "react-router-dom";

const darkRed = "rgb(221, 4, 38)";
const activeRed = "rgb(241, 80, 104)";

const MainNavBtn = styled(Link)`
    position: relative;
    color: ${darkRed};
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    text-align: center;
    transition: all ease-in .2s;

    &:after{
        position: absolute;
        display: block;
        height:2px;
        background-color: ${darkRed};
        width: 0%;
        content: "";
        transition: width ease-out .3s;
    }

    &:hover{
        color: ${activeRed};
        &:after{
            width: 80%;
        }
    }
    
`;

export default MainNavBtn;
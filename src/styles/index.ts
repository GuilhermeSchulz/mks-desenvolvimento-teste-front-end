import {
    createGlobalStyle,
} from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    list-style:none;
    box-sizing: border-box;
    

}
button{
    cursor: pointer;
    transition: .5s;
}

:root{
    --color-primary: #0F52BA;
    --color-primary-focus: #0C449B;

    --black: #000000;
    --white: #FFFFFF;
    
    --grey-2: #EEEEEE;
    --grey-1: #373737;
    --grey-0: #2C2C2C;

    --shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    --shadow-2: -5px 0px 6px rgba(0, 0, 0, 0.13);

}

`
export const StyledContainer = styled.div`
    height: 100vh;
    width: 100vw;
`
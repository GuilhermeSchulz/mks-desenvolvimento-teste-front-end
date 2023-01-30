import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 6%;
    min-height: 50px;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    min-width: 320px;
    button{
        width: 13%;   
        height: 100%;
        display : flex ;
        flex-direction: row;
        justify-content: space-around;
        padding: 0.7rem;
        align-items: center;
        border-radius: 8px;
        border: none;
        max-width: 90px;
        max-height: 45px;
        min-width: 55px;
    }
    img{
        width: 40%;
        height: 90%;
        min-height: 30px;
        max-width: 190px;
        min-width: 144px;
        @media(min-width: 768px){
            height: 55%;
        }
    }
    @media(min-width: 768px){
        padding: 1rem 4rem;
        height: 8%;
    }

`
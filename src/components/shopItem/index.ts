import styled from "styled-components";

export const StyledCartItem = styled.li`
  background-color: var(--white);
  width: 100%;
  height: 45%;
  border-radius: 8px;
  padding: 1rem;
  min-height: 220px;
  min-width: 230px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 260px;
  @media (min-width: 768px) {
    display: flex;
    height: 20%;
    min-height: 100px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width:440px
  }
  div {
    width: 100%;
    height: 40%;
    padding: unset;
    justify-content: center;
    @media (min-width: 768px) {
      width: 30%;
      height: 100%;
    }
    img {
      padding: 0.5rem;
        object-fit: contain;
        height: 100px;
        width: 100px;
    }
    svg {
      position: relative;
      bottom: 20px;
      left: 58px;
      height: 20%;
      width: max-content;
      max-width: 20px;
      z-index: 10;
      cursor: pointer;
      @media (min-width: 768px) {
        bottom: 27px;
        left: 285px;
        background-color: var(--black);
        height: 25px;
        color: var(--white);
        border-radius: 50%;
        min-width: 25px;
      }
    }
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    @media(min-width: 768px){
      width: 20%;
      height: 100%;
    }
  }
  section {
    display: flex;
    height: 15%;
    justify-content: space-between;
    @media(min-width: 768px){
      height: 100%;
      width: 50%;
      align-items: center;
    }
    div {
      padding: unset;
      width: 50%;
      justify-content: space-around;
      border: 2px solid var(--grey-2);
      height: 100%;
      border-radius: 5px;
      max-width: 100px;
      @media(min-width: 768px){
      height: 40%;
    
    }
      p {
        font-size: 20px;
        font-weight: 400;
        color: var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33%;
        border-left: 2px solid var(--grey-2);
        border-right: 2px solid var(--grey-2);
      }
      button {
        height: 100%;
        background-color: transparent;
        color: var(--grey-1);
        width: 33%;
      }
    }
    span {
      background-color: var(--grey-1);
      color: var(--white);
      width: 50%;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media(min-width: 768px){
        height: 40%;
      }
    }
  }
`;

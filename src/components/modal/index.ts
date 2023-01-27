import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  z-index: 5;
  width: 90%;
  height: 100%;
  top: 0px;
  background-color: var(--color-primary);
  right: 0px;
  box-shadow: var(--shadow-2);
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 550px;
  min-width: 350px;
  @media( min-width: 768px){
    width: 30%;
    min-width: 550px;
  }
  div {
    padding: 1rem 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    h3 {
      color: var(--white);
      font-size: 27px;
      font-weight: 700;
      width: 70%;
    }
    svg {
      width: 70px;
      height: 70px;
      cursor: pointer;
    }
  }
  ul{
    margin: 0 auto;
    height: 80%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    /* padding: 1rem; */
  }
  div{
    p{
    color: var(--white);
    font-size: 28px;
    font-weight: 700;
  }
  }
  button{
    height: 10%;
    background-color: var(--black);
    color: var(--white);
    border: none;
    font-size: 20px;
    font-weight: 700;
  }
`;

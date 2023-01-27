import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
export const StyledMain = styled.main`
  height: 90%;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    overflow-y: auto;
    @media(min-width: 768px) {
      width: 95%;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
    li {
      border-radius: 8px;
      width: 80%;
      height: 45%;
      min-width: 220px;
      min-height: 390px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      box-shadow: var(--shadow);
      @media(min-width: 768px) {
      width: 20%;
      }
      img{
        padding: 0.5rem;
        object-fit: contain;
        height: 200px;
        width: 200px;
      }
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.5rem;
        width: 90%;
        h2 {
          font-size: 16px;
          font-weight: 400;
          width: 65%;
        }
        span {
          background-color: var(--grey-1);
          color: var(--white);
          width: max-content;
          padding: 0.5rem;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      p{
        font-size: 10px;
        font-weight: 300;
        padding: 0.5rem;
        min-height: 55px;
      }
      button{
        padding: 0.5rem;
        height: 10%;
        width: 100%;
        border: none;
        background-color: var(--color-primary);
        color: var(--white);
        font-size: 14px;
        font-weight: 600;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        border-radius: 0 0 5px 5px;
        &:hover{
            background-color: var(--color-primary-focus);
        }
        &:active{
            background-color: var(--color-primary-focus);

        }
      }
    }
  }
  @media (min-width: 768px) {
    height: 88%;
  }
`;
export const StyledSkeleton = styled(Skeleton)`
min-height: 320px;
border-radius: 8px;
`;

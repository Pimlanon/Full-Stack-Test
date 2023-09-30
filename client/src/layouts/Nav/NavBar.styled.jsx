import styled from "styled-components";

export const HeadNav = styled.section`
  width: 100%;
  height: 60px;
  background-color: #4a7dff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin-left: 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 425px) {
      margin-left: 1rem;
    }

    h1 {
      color: #fff;

      @media (max-width: 290px) {
        font-size: 21px;
      }
    }
  }

  .user-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid #2a4996;
    margin-right: 2rem;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-item: center;
    font-size: 23px;
    color: #787878;

    @media (max-width: 425px) {
      margin-right: 1rem;
    }

    @media (max-width: 290px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  /* border: 1px solid black; */
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem 0rem 3rem;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    padding: 1rem 1rem 0rem 1rem;
    height: 6rem;
  }

  h1 {
    height: 3.5rem;
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #787878;

    @media (max-width: 425px) {
      font-size: 30px;
      width: 45%;
    }

    @media (max-width: 335px) {
      font-size: 28px;
      width: 48%;
    }

    @media (max-width: 290px) {
      font-size: 26px;
      width: 50%;
    }
  }

  button {
    height: 3.5rem;
    width: 9rem;
    border-radius: 10px;
    font-size: 23px;
    color: #fff;
    border: none;
    background-color: #4a7dff;
    cursor: pointer;

    @media (max-width: 500px) {
      width: 30%;
      height: 3rem;
    }

    @media (max-width: 290px) {
      font-size: 20px;
    }
  }
`;

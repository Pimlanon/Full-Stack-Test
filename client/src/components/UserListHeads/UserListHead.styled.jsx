import styled from "styled-components";

export const Container = styled.section`
  /* border: 1px solid black; */
  height: 9rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem 0rem 3rem;

  @media (max-width: 768px) {
    height: 6rem;
  }

  @media (max-width: 425px) {
    padding: 2rem 2rem 0rem 2rem;
  }

  h1 {
    height: 3.5rem;
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #787878;
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
      height: 2.5rem;
    }
  }
`;

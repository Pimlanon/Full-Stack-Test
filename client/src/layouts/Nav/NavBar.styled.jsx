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

    h1 {
      color: #fff;
    }
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid #2a4996;
    margin-right: 2rem;
    background-color: #fff;
  }
`;

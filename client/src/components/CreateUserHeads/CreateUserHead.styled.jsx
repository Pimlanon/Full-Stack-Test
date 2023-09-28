import styled from 'styled-components';

export const Container = styled.section`
  /* border: 1px solid black; */
  height: 8rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem 0rem 3rem;

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
  }
`;

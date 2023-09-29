import styled from "styled-components";

export const Container = styled.section`
  ${"" /* border: 1px solid red; */}
  padding: 0rem 4rem;
  padding-bottom: 5rem;

  table {
    /* border: 1px solid black; */
    width: 100%;

    border: none;
    border-collapse: collapse;

    tr {
      border: none;
      height: 4rem;

      th {
        /* border: 1px solid black; */
        background-color: #a3a3a2;
        border: none;
      }

      td {
        /* border: 1px solid black; */
        width: 15%;
        height: 5rem;
        border: none;
        text-align: center;
      }

      .col1 {
        img {
          border: 2px solid #2a4996;
          border-radius: 50%;
          width: 4rem;
          height: 3.8rem;
          object-fit: cover;
        }
      }
    }

    .col4 {
      width: 10%;
    }

    .col6 {
      /* border: 1px solid black; */

      div {
        display: flex;
        justify-content: space-around;
        align-items: center;

        button {
          cursor: pointer;
          width: 5rem;
          height: 2.5rem;
          border: none;
          color: #fff;
          font-size: 18px;
        }

        button:nth-child(1) {
          background-color: #d4bb1e;
        }

        button:nth-child(2) {
          background-color: #ab3333;
        }
      }
    }
  }

  tr:hover {
    background-color: #f0f0f0; /* Change the background color on hover */
  }
`;

export const Page = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0rem 4rem;
  display: flex;
  justify-content: flex-end;

  div {
    height: 100%;
    width: 5rem;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
  }
`;

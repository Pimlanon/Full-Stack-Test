import styled from 'styled-components';

export const Container = styled.section`
  /* border: 1px solid red; */
  padding: 0rem 4rem;

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
        div {
          width: 100%;
          height: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        figure {
          width: 4rem;
          height: 3.5rem;
          border-radius: 50%;
          background-color: #787878;
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
            width: 4.5rem;
            height: 2.5rem;
            border: none;
            color: #fff;
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
  }
`;

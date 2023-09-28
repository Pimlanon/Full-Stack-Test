import styled from 'styled-components';

export const Container = styled.section`
  border: 1px solid red;

  table {
    border: 1px solid black;
    width: 100%;
    padding: 0rem 4rem;

    tr {
      border: 1px solid black;
      height: 4rem;

      th {
        border: 1px solid black;
      }

      td {
        border: 1px solid black;
        width: 15%;
        text-align: center;
      }

      .col4 {
        width: 10%;
      }
    }
  }
`;

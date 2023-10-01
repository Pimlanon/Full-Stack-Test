import styled from "styled-components";

export const Container = styled.section`
  padding: 0rem 4rem;
  margin-bottom: 2rem;

  table {
    width: 100%;
    border: none;
    border-collapse: collapse;

    thead {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tr {
      border: none;
      height: 4rem;

      th {
        background-color: #a3a3a2;
        border: none;
      }

      td {
        width: 15%;
        height: 5rem;
        border: none;
        text-align: center;

        @media (max-width: 768px) {
          display: block;
          width: 100%;
        }
      }

      .col1 {
        @media (max-width: 768px) {
          margin-top: 3rem;
        }

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

      @media (max-width: 768px) {
        display: block;
        width: 100%;
      }
    }

    .col6 {
      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
      }

      div {
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media (max-width: 768px) {
          width: 50%;
          margin-bottom: 3rem;
        }

        @media (max-width: 500px) {
          width: 80%;
        }

        @media (max-width: 320px) {
          width: 100%;
        }

        button {
          cursor: pointer;
          width: 5rem;
          height: 2.5rem;
          border: none;
          color: #fff;
          font-size: 18px;
          border-radius: 5px;

          @media (max-width: 325px) {
            width: 4rem;
          }
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
    background-color: #f0f0f0;
  }
`;

export const Page = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0rem 4rem;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  div {
    height: 100%;
    width: 5rem;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  padding: 0rem 4rem 3rem 4rem;
  height: 100%;
  width: 100%;

  @media (min-width: 1440px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (min-width: 2000px) {
    padding-left: 15%;
    padding-right: 15%;
  }

  @media (min-width: 2560px) {
    padding-left: 20%;
    padding-right: 20%;
  }

  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
`;

export const Form = styled.form`
  height: 100%;
  position: relative;

  .check {
    display: flex;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .btn-container {
    margin-top: 5rem;
    width: 20rem;
    display: flex;
    justify-content: space-between;
    margin-left: auto;

    @media (max-width: 1399px) {
      margin-left: 25%;
    }

    @media (max-width: 1000px) {
      margin-left: 0;
      margin: 0 auto;
    }

    @media (max-width: 450px) {
      flex-direction: column-reverse;
      width: 100%;
    }

    button {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      height: 2.5rem;
      width: 8rem;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      color: #fff;

      @media (max-width: 450px) {
        width: 8rem;
        margin-bottom: 1rem;
        margin: 0 auto;
      }
    }

    button:nth-child(1) {
      background-color: #525252;
    }

    button:nth-child(2) {
      background-color: #2a8233;

      @media (max-width: 450px) {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;
  }

  figure {
    width: 15rem;
    height: 14rem;
    border: 2px solid #787878;
    border-radius: 50%;
    margin-bottom: 2rem;

    @media (max-width: 1000px) {
      width: 16rem;
      height: 15rem;
    }

    @media (max-width: 768px) {
      width: 14rem;
      height: 13rem;
    }

    @media (max-width: 425px) {
      width: 12rem;
      height: 11rem;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    p {
      color: #ab3333;
      width: 100%;
      text-align: center;
      margin-top: 0.3rem;
      font-size: 13px;
    }
  }

  .image-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15rem;
    position: relative;

    margin-bottom: 0.5rem;

    @media (max-width: 425px) {
      width: 100%;
    }

    div {
      width: 90%;
      height: 3rem;

      @media (max-width: 1000px) {
        width: 16rem;
      }

      @media (max-width: 425px) {
        width: 90%;
      }

      label {
        background-color: #4a7dff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 19px;
        cursor: pointer;
        margin-bottom: 1rem;
        border-radius: 5px;
      }

      .input-field {
        background-color: black;
        width: 90%;
        height: 3rem;
        border-radius: 5px;
        opacity: 0;
        cursor: pointer;
        display: none;
      }
    }

    button {
      margin-top: 1rem;
      background-color: #ab3333;
      width: 90%;
      height: 3rem;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 19px;
      cursor: pointer;

      @media (max-width: 1000px) {
        width: 16rem;
      }

      @media (max-width: 425px) {
        width: 90%;
      }
    }
  }
`;

export const InputContainer = styled.div`
  flex: 2;
  position: relative;
  height: 100%;
  display: flex;
  align-self: flex-end;

  @media (max-width: 1440px) {
    width: 3rem;
  }

  @media (max-width: 1000px) {
    align-self: auto;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1440px) {
    flex-wrap: none;
    gap: 1rem;
    justify-content: center;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 5.5rem;
    width: 26rem;

    @media (max-width: 768px) {
      width: 20rem;
      height: 6rem;
    }

    label {
      margin-bottom: 0.5rem;
      color: #787878;
      font-size: 22px;
    }

    input {
      height: 4rem;
      width: 100%;
      border-radius: 10px;
      border: 2px solid #787878;
      font-size: large;
      padding-left: 10px;
      padding-right: 10px;

      @media (max-width: 768px) {
        margin-bottom: 1rem;
      }

      &:focus {
        outline: none;
      }

      &:focus-within {
        border: 2px solid #4a7dff;
      }
    }

    #birthday {
      cursor: pointer;
    }

    select {
      height: 4rem;
      width: 100%;
      border-radius: 10px;
      border: 2px solid #787878;
      font-size: large;
      padding-left: 10px;
      padding-right: 10px;
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;

      @media (max-width: 768px) {
        margin-bottom: 1rem;
      }

      &:focus {
        outline: none;
      }

      &:focus-within {
        border: 2px solid #4a7dff;
      }
    }
  }

  div:nth-child(2) {
    margin-bottom: 5rem;

    @media (max-width: 1399px) {
      margin-bottom: 0rem;
    }
  }
`;

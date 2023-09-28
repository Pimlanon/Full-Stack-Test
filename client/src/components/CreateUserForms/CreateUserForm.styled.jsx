import styled from "styled-components";

export const Container = styled.section`
  /* border: 1px solid red; */
  height: 100%;
  padding: 0rem 4rem 0rem 4rem;
`;

export const Form = styled.form`
  /* border: 1px solid blue; */
  height: 100%;
  position: relative;

  /* display: flex; */

  .check {
    display: flex;
  }

  .btn-container {
    margin-top: 5rem;
    width: 20rem;
    display: flex;
    justify-content: space-between;
    margin-left: auto;

    button {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      height: 2.5rem;
      width: 8rem;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      color: #fff;
    }

    button:nth-child(1) {
      background-color: #525252;
    }

    button:nth-child(2) {
      background-color: #2a8233;
    }
  }
`;

export const ImageContainer = styled.div`
  /* border: 1px solid green; */
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  figure {
    width: 15rem;
    height: 14rem;
    border: 2px solid #787878;
    border-radius: 50%;
    margin-bottom: 2rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .image-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15rem;
    position: relative;

    div {
      width: 90%;
      height: 3rem;

      label {
        background-color: #4a7dff;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 19px;
        cursor: pointer;
        margin-bottom: 1rem;
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
    }
  }
`;

export const InputContainer = styled.div`
  /* border: 1px solid pink; */
  flex: 2;
  position: relative;
  height: 100%;
  display: flex;
  align-self: flex-end;
`;

export const NameContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  /* gap: 50px; */

  div {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    height: 5.5rem;
    width: 26rem;

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
  }
`;

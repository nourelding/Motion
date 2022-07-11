import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  min-height: 100vh;
  flex: 1;
`;

export const RightHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: black;
  font-size: 14px;
  font-weight: 700;
  padding: 40px 40px;

  p {
    padding-top: 10px;
    padding-right: 17px;
    font-weight: 500;
  }
  button {
    width: 120px;
    height: 40px;
    border: 1.5px solid rgb(212, 210, 210);
    background: white;
    border-radius: 20px;
    color: black;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      border: 1.5px solid;
      border: 1.5px solid #6e91f6;
    }
  }
`;

export const SignIn = styled.p`
  font-size: 40px;
  font-weight: 300;
  padding: 30px;
  margin-bottom: 25px;
`;

export const SignUp = styled.p`
  font-size: 40px;
  font-weight: 300;
  padding: 30px;
  margin-bottom: 25px;
`;

// after apllying font-family maybe change font-size

export const UserPass = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img,
  .mail {
    position: absolute;
    margin: 26px 0px;
  }
  input {
    height: 45px;
    width: 330px;
    outline: 0;
    border: none;
    border-bottom: 1.5px solid rgb(214, 211, 211);
    padding-inline-start: 40px;
    padding-bottom: 5px;
    margin: 20px 0;
  }
  input:focus {
    border-color: rgb(110, 109, 109);
  }
  :placeholder {
    color: black;
    font-size: medium;
    font-weight: 300;
  }
  label {
  }
`;


import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

export const SignIn = styled.p`
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

  img {
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
`;

export const LoginWrapper = styled.div`
  min-height: 100vh;
  flex: 1;
`;

export const RightHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  font-size: 14px;
  font-weight: 700;
  padding: 40px 40px;
  width: 90%;
  margin: 0 auto;
  label {
    position: relative;
  }
  img {
    position: absolute;
    bottom: 0;
    margin: 15px 0px;
  }
  input {
    height: 45px;
    width: 330px;
    outline: 0;
    border: none;
    border-bottom: 1.5px solid rgb(214, 211, 211);
    padding-inline-start: 40px;
    padding-bottom: 5px;
  }

  button {
    width: 120px;
    height: 40px;
    background: white;
    border: none;
    color: black;
    font-size: 11px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      position: relative;
      bottom: 0;
      box-shadow: inset 0 -2px 0 0 black;
    }
  }
`;

export const LowBodyBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  //justify-content: space-between;
  //align-items: flex-start;
  //align-content: stretch;
  width: 80%;
  margin: 0 auto;
`;
//jennifer's box and button
export const ContainerLeftTop = styled.form`
  display: flex;
  align-items: center;
  text-align: center;
  //width: 400px;
  height: 120px;
  margin: 40px 0 0 40px;
  box-shadow: 0px 0px 10px #888888;
  position: relative;

  form {
    display: flex;
  }

  img {
    position: absolute;
    margin: 20px 50px;
    width: fit-content;
  }
  input {
    height: 45px;
    width: 330px;
    outline: 0;
    border: none;
    padding-inline-start: 40px;
    padding-bottom: 5px;
    margin: 20px 5rem;
  }
`;

export const ContainerLeftBottom = styled.div`
  display: flex;
  border: 1px solid black;
  text-align: center;
  img {
    position: absolute;
    margin: 20px 30px;
  }
  input {
    height: 45px;
    width: 330px;
    outline: 0;
    border: none;
    padding-inline-start: 40px;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    margin: 20px 5rem;
  }
`;
export const ContainerRightTop = styled.div`
  display: flex;
  border: 1px solid black;
  text-align: center;
`;
export const ContainerRightBottom = styled.div`
  display: flex;
  border: 1px solid black;
  text-align: center;
`;

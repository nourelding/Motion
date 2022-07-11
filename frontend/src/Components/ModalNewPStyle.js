import { upload } from "@testing-library/user-event/dist/upload";
import styled from "styled-components";
import { SendButton } from "./Shared/button";

export const Black = styled.div`
  background: rgba(10, 10, 10, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  z-index: 5;
`;

export const PostW = styled.form`
  padding: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 400px;
  min-height: 200px;
  background-color: white;
  border-radius: 3px;
  position: relative;

  .closeBtn {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    position: absolute;
    top: -30px;
    right: -20px;
    cursor: pointer;
  }
`;
export const ProfilHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 12px 20px;
`;

export const NewQuote = styled.form`
  font-size: 12px;
  padding-left: 8px;

  input {
    padding: 10px 10px;
    outline: 0;
    border: none;
  }
`;

//export const EmperorNewGrid = styled.div`
//display: grid;
//grid-template-columns: repeat(2, 1fr);
//justify-items: center;
//gap: 15px 5px;
//padding: 10px 10px;
//
//.Posts{
//    height: 170px;
//    width: 170px;
//
//}
//`
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid lightgrey;

  form {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 20px;
  }

  label {
    color: grey;
    position: relative;
  }
  input {
    opacity: 0;
    width: 50px;
    height: 50px;
    background-color: aliceblue;
    position: absolute;
    left: -10px;
  }
`;

export const Blabla = styled(SendButton)`
  margin: 60px 20px 10px 0;
  transform: translate(300px, -20px);

  img {
    height: 14px;
    width: 19px;
  }
`;
//.Arrow{
//    align-item: end;
//
//}

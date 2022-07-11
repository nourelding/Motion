import styled from "styled-components";
import BaseButtonStyled from "../../Components/Shared/button";

export const StyledFriendContainer = styled.div`
  width: 362px;
  height: 500px;
  padding: 20px;
  margin: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4%;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    margin: 10px;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;

  h2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: grey;
    font-size: 20px;
    font-family: sans-serif;
    position: absolute;
    top: 300px;
    
  }

`;

export const StyledButtonActions = styled(BaseButtonStyled)`
    display: flex;
    width: 140px;
    height: 30px;
    background: white;
    margin: 5px;
    border: solid 1px black;
    align-item: center;
    justify-content: center;

    &:hover {
        opacity: 0.7;
        transform: translateY(2px);
        background: linear-gradient(120deg, #b64cf8 0%, #3365fa);
    }

    p {
        color: black;
        font-size: 10px;
        align-self: center;
    }
`

export const StyledButtonActionsUsed = styled(BaseButtonStyled)`
    display: flex;
    width: 140px;
    height: 30px;
    background: linear-gradient(120deg, #b64cf8 0%, #3365fa);
    margin: 5px;
    border: solid 1px black;
    align-item: center;
    justify-content: center;

    &:hover {
        opacity: 0.7;
        transform: translateY(2px);
    }

    p {
        font-size: 10px;
        align-self: center;
    }
`

export const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  p {
    display: flex;
    justify-content: center;
  }
`;

export const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4%;
  flex-wrap: wrap;

  button {
    margin: 10px;
    width: 100px;
    height: 28px;
    border-radius: 30px;
    border: none;
    cursor: pointer;

    p {
      padding: 0px;
    }
  }
`;

// import { createGlobalStyle } from "styled-components";

import styled from "styled-components";

const BaseButtonStyled = styled.button`
  padding: 1rem 2.3rem;
  margin: 80px;
  width: 280px;
  height: 60px;
  background: linear-gradient(120deg, #b64cf8 0%, #3365fa);
  color: white;
  border-radius: 30px;
  border: none;
  font-size: 0.9rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: filter 0.4s ease-in-out;
  &:hover {
    opacity: 0.7;
    transform: translateY(5px);
  }
`;

export const StoreButton = styled.button`
  border: none;
  padding: 1rem 2.3rem;
  background: transparent;
  border: 1px solid white;
  border-radius: 99999px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transform: scale(110%);
  }
`;
export const SendButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 0px 0 0 80%;
  border: none;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  position: absolute;
  background: linear-gradient(120deg, #b64cf8 0%, #3365fa);
  &:hover {
    opacity: 0.7;
    transform: translateY(5px);
  }
  img {
    position: absolute;
    &:hover {
      opacity: 0.7;
      transform: translateX(5px);
    }
  }
`;

// const GlobalButton= createGlobalStyle`

//  width: 120px;
//  height: 80px;
//  background-color: 132.96deg, #C468FF 3.32%, #6E91F6 100%;
//  color: white;
//  border-radius: 20px;
//  border: none;
//  font-size: 20px;
//  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
// `

export default BaseButtonStyled;

// import styled from "styled-components"
// const BaseButtonStyled = styled.button`
// width: 120px;
// height: 80px;
// background-color: 132.96deg, #C468FF 3.32%, #6E91F6 100%;
// color: white;
// border-radius: 20px;
// border: none;
// font-size: 20px;
// box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);

// `

// export default BaseButtonStyled;
// }

export const postButton = styled.button`
  width: 120px;
  height: 40px;
  border: 1.5px solid rgb(212, 210, 210);
  background: white;
  border-radius: 20px;
  color: black;
  font-size: 11px;
  font-weight: 700;
`;

export const ProfileButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 9999px;
  color: black;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: ${({ width }) => width};
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};

  &:hover {
    border: 1px solid #ad73fd;
  }
`;

export const LikedButton = styled.button`
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 99999px;
`;

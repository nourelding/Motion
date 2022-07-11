import styled from "styled-components";

export const PostWrap = styled.div`
  margin: 40px 40px;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-sizing: border-box;
  border: none;
  box-shadow: 0px 0px 10px #888888;
  //width: 400px;
  //height: 550px;
`;
export const ProfilHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 15px;

  .profilepic {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;

    div {
      display: flex;
      flex-direction: column;

      p {
        margin-left: 15px;
        font-size: 14px;
      }

      .TimePost {
        margin-top: 5px;
        color: grey;
      }
    }
  }

  .ThreeDots {
    height: 15px;
    margin-top: 5px;
  }
`;
export const Quote = styled.div`
  font-size: 15px;
  padding: 0 15px 5px 15px;
`;

export const EmperorNewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 15px 0;
  padding: 10px 30px;

  .Posts {
    height: 170px;
    width: 170px;
    display: inline-block;
  }
`;
export const HeartLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;

  div {
    display: flex;
    padding: 0 5px;

    button {
      cursor: pointer;
      border: none;
      background: transparent;
      margin-right: 13px;
      height: 17px;
      width: 17px;
    }

    .Share {
      margin-left: 40px;
    }
    a {
      font-size: 14px;
    }
  }
`;

export const NrLikes = styled.div`
  color: grey;
`;

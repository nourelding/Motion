import styled from "styled-components";

export const StyledSection = styled.section`
  width: 1152px;
  height: 400px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  position: absolute;
   top: 70%;
  left: 50%; 
  transform: translate(-50%, -50%);
 

  h2 {
    font-size: 24px;
    font-weight: 400;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
  }

  p,
  a {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  gap: 4rem;

  img {
    width: 95px;
  }

  p {
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  
`;

export const StyledProfileInfo = styled.div`
  display: flex;
  flex: 2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-inline: 3rem;
  padding-top: 3rem;
  gap: 2rem;
`;

export const StyledAboutInfo = styled.div`
  flex: 1;

  p {
    padding: 0.5rem 0 2rem 0;
  }
`;

export const StyledLikesInfo = styled.div`
  flex: 1;
`;

export const StyledStatsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3rem;
  flex: 1;
`;

export const StyledContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #ad73fd;
    margin-bottom: -2px;

    & > p {
      color: black;
    }
  }

  p {
    color: gray;
    font-weight: 300;
  }
`;

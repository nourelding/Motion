import styled from "styled-components";

export const StyledPostHeader = styled.div`
  margin: 20px 20px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 10vh;
`;

export const StyledLogo = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  width: 15%;

  img {
    margin: 10px;
    width: 35px;
    cursor: pointer;
  }

  h1 {
    padding: 10px;
    text-align: center;
  }

  /* &:hover {
        box-shadow: inset 0 -2px 0 0 #c468ff; 
    } */
`;
export const SmallLogout = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
border-radius: 4px;
box-shadow: 0px 0px 3px #888888;
width: 180px;
position:absolute;
background-color: white;
z-index: 10;
right: 10px;
top: 100px;


div{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  padding: 0px 10px;

  :hover{
    background-color: lightgrey;
  }
  
p {
  margin: 10px;
  padding: 5px;
  align-items: center;
}  
}
`
export const Icon = styled.div`
position: relative;
color: grey;
width: 50px;
height: 40px;
justify-content: center;
align-items: center;`

/*
export const StyledMenu = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    width: 70%;

    img {
        margin: 10px ;
    }
    
    h3 {

        

    }
`
*/

export const StyledPostsLogo = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  width: 10%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    box-shadow: inset 0 -2px 0 0 #c468ff;
  }

  img {
    margin: 10px;
  }
`;

export const StyledFriendsIcon = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  width: 15%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    box-shadow: inset 0 -2px 0 0 #c468ff;
  }

  img {
    margin: 10px;
  }
`;

export const StyledLeere = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
`;

export const StyledNotifications = styled.div`
  padding: 10px;
  width: 15%;
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    margin: 5px;
    width: 50px;
    height: 50px;
  }
`;

export const StyledBell = styled.div`
  display: flex;
  flex-direction: column-reverse;

  img {
    width: 25px;
    height: 25px;
  }

  p {
    width: 20px;
    height: 20px;
    display: flex;
    align-self: end;
    justify-content: center;
    align-items: center;
    color: white;
    background: ${({ theme }) => theme.linearGradient};
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    border-radius: 50%;
    font-size: 11px;
  }
`;

export const StyledProfileMenu = styled.div`
  display: flex;
  width: 4px;
  height: 60px;
`;

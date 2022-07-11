import React from "react";
import { useDispatch } from "react-redux";
import GenericAvatar from "../../Assets/svgs/genericAvatar.png";
import userSlice from "../../features/user/userSlice";
import { friendRequest } from "../../features/user/userSlice";
import { useState } from "react";

import {
  StyledFriendContainer,
  StyledAbout,
  StyledActions,
  StyledText,
  StyledTags,
  StyledButtonActions,
  StyledButtonActionsUsed,
} from "../../Styles/Friends/Friend.styled";

const Friend = ({
  email,
  id,
  avatar,
  location,
  first_name,
  last_name,
  about_me,
  things_user_likes,
}) => {
  const dispatch = useDispatch();

  const [request, setrequest] = useState(false);
  const sendReq = () => {
    if (request === false) {
      setrequest(true);
    } else {
      setrequest(false);
    }
  };

  return (
    <>
      <StyledFriendContainer>
        <StyledAbout>
          <img src={avatar === null ? `${GenericAvatar}` : avatar} />
          <h3>{`${first_name} ${last_name}`}</h3>
          <p>{location}</p>
        </StyledAbout>
        <StyledActions>
          <StyledButtonActions>
            <p>FOLLOW</p>
          </StyledButtonActions>
          <StyledButtonActions
            onClick={() => {
              dispatch(friendRequest(id));
              sendReq();
            }}
          >
            <p>ADD FRIEND</p>
          </StyledButtonActions>
          {request && (
            <h2>Your friend request has been sent, never to be answered.</h2>
          )}
          {/*<StyledButtonActionsUsed><p>FOLLOWING</p></StyledButtonActionsUsed>*/}
          {/*<StyledButtonActionsUsed><p>FRIEND</p></StyledButtonActionsUsed>*/}
        </StyledActions>
        <StyledText>
          <p>{about_me}</p>
        </StyledText>
        <StyledTags>
          {things_user_likes.map(like => (
            <button>
              <p>{like}</p>
            </button>
          ))}
        </StyledTags>
      </StyledFriendContainer>
    </>
  );
};

export const selectAllFriends = state => state.Friend;

export default Friend;

//export const selectUserById= ( state, userId) => state.Friends.find(Friend => Friend.id === FriendId);

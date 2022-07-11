import React, { useEffect } from "react";
import Jennifer from "../../Assets/images/users/jennifer.png";
import { ContainerLeftTop } from "../../Styles/Posts/Poststyle";
import Send_button from "../../Assets/svgs/send_button.svg";
import { SendButton } from "../../Components/Shared/button";
import { useSelector, useDispatch } from "react-redux";
import { handlePostInput } from "../../features/user/userSlice";
import { sharePost, getPosts } from "../../features/user/userSlice";

export const PostFirstComponent = ({ handleModal }) => {
  const dispatch = useDispatch();
  const text = useSelector(store => store.user.userPost.text);
  const { token } = useSelector(store => store.auth);

  return (
    <ContainerLeftTop
      onSubmit={e => {
        e.preventDefault();
        dispatch(sharePost({ text: text, token: token }));
      }}
    >
      <img src={Jennifer} onClick={handleModal} />

      <input
        text="text"
        placeholder="What's on your mind Jennifer"
        value={text}
        onChange={e => dispatch(handlePostInput(e.target.value))}
      />

      <SendButton>
        <img src={Send_button} />
      </SendButton>
    </ContainerLeftTop>
  );
};

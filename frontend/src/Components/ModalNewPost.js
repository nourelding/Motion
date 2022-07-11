import {
  PostW,
  Black,
  NewQuote,
  ProfilHeader,
  Footer,
  Blabla,
  Inp,
} from "./ModalNewPStyle";
import ProfilPic from "../Assets/images/users/jennifer.png";
//import Attach from '../Assets/svgs/';
import { BsImage } from "react-icons/bs";

import Arrow from "../Assets/images/send_button.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePostInput } from "../features/user/userSlice";
import { sharePost } from "../features/user/userSlice";
import { handleImageUpload } from "../features/user/userSlice";

export const PopUp = ({ handleModal }) => {
  const dispatch = useDispatch();
  const { text, image } = useSelector(store => store.user.userPost);
  const { token } = useSelector(store => store.auth);

  return (
    <Black>
      <PostW
        onSubmit={e => {
          e.preventDefault();
          dispatch(sharePost({ text: text, image: image, token: token }));
        }}
      >
        <button className="closeBtn" onClick={handleModal}>
          X
        </button>
        <ProfilHeader>
          <img src={ProfilPic} />
          <NewQuote>
            <input
              type="text"
              placeholder=" What's on your mind?"
              value={text}
              onChange={e => dispatch(handlePostInput(e.target.value))}
            ></input>
          </NewQuote>
        </ProfilHeader>

        <Footer>
          <label htmlFor="file-input">
            <BsImage />
            <input
              type="file"
              onChange={e => {
                const imageInput = e.target.files[0];
                const imageUrl = URL.createObjectURL(imageInput);
                dispatch(handleImageUpload(imageUrl));
              }}
            />
          </label>
          <Blabla>
            <img src={Arrow} />
          </Blabla>
        </Footer>
      </PostW>
    </Black>
  );
};
// in the footer
//<form>
//  <label for="file-input">
//      <img src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg"/>
//  </label>
//  <input type="file"/>
//</form>

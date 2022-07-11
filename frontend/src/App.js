import { Route, Routes } from "react-router-dom";
import LoginRight from "./Pages/Login/LoginRight";
import SharedLayout from "./Pages/SharedLayout";
import SharedHeader from "./Pages/SharedHeader";
import EmailSignUp from "./Pages/Login/EmailSignUp";
import Confirmation from "./Pages/Login/Confirmation";
import Verification from "./Pages/Login/Verification";
import SinglePost from "./Components/SinglePost";
import Posts from "./Pages/Posts/Posts";
import EditProfile from "./Components/EditProfile";
import UserProfile from "./Components/UserProfile";

import Profile from "./Pages/Profil/Profile";
import Friends from "./Pages/Friends/Friends";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LoginRight />} />
          <Route path="signup" element={<EmailSignUp />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="verification" element={<Verification />} />
        </Route>

        <Route path="user" element={<SharedHeader />}>
          <Route path="posts" element={<Posts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

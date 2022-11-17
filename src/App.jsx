import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile";
import Main from "./Pages/Main";
import Signup from "./Pages/Signup";
import Missing from "./Pages/Missing";
import Login from "./Pages/Login";
import DevTools from "./Components/DevTools";
import AuthProvider from "./Components/Auth/AuthProvider";
import Talk from "./Pages/Talk";
import Board from "./Pages/Board/Board"
import BoardDetail from "./Pages/Board/BoardDetail";
import Boardauth from "./Pages/Boardauth";
import Register from "./Pages/Register";
import Mypage from "./Pages/Mypage";
function App() {
  return (

    <BrowserRouter>
      {/* Navbar는 리랜더링 되지않고, URL에 따라 하위 컴포넌트만 리랜더링 되게하기 위한 구조입니다 */}
      <DevTools />
      <Navbar />
      {/* 양옆 Padding을 제공하는 Wrapper 입니다 */}

      <Routes>
        {/* 로그인해야만 접근가능한 URL */}
        <Route element={<AuthProvider />}>
          <Route path="/talk" element={<Talk/>} />
        </Route>
        
        {/* 퍼블릭 오픈된 url */}
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/boardauth" element={<Boardauth />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        {/* 잘못된 경로일때 보내는 곳*/}
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

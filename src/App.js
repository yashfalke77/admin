import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User"
import Post from "./pages/post/Post";
import Album from "./pages/album/Album";
import SingleUser from "./pages/user/SingleUser";
import SinglePost from "./pages/post/SinglePost";
import SingleAlbum from "./pages/album/SingleAlbum";
import PostByUser from "./pages/user/PostByUser";
import AlbumsByUser from "./pages/user/AlbumsByUser";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={< User />} ></Route>
            <Route path=":userId" element={< SingleUser />} ></Route>
            <Route path="post" >
              <Route index element={< Post />} ></Route>
              <Route path=":postId" element={< SinglePost />} ></Route>
            </Route>
            <Route path="album" >
              <Route index element={< Album />} ></Route>
              <Route path=":albumId" element={< SingleAlbum />} ></Route>
            </Route>
          </Route>
          <Route path="/post/user/:userId" element={< PostByUser />} ></Route>
          <Route path="/album/user/:userId" element={< AlbumsByUser />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

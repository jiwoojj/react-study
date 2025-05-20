import {Route, RouterProvider, Routes} from "react-router-dom";
import MainContainer from "./docs/pages/main/MainContainer";
import Intro from "./docs/pages/intro/Intro";
import Job from "./docs/pages/job/Job";
import PostsContainer from "./docs/pages/posts/PostsContainer";
import Post from "./docs/pages/posts/Post";
import NotFound from "./docs/pages/notFound/NotFound";
import router from "./docs/routes/router";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<MainContainer />} />
    //   <Route path="/intro" element={<Intro />} />
    //   <Route path="/job" element={<Job />} />
    //   <Route path="/posts" element={<PostsContainer />} />
    //   <Route path="/post" element={<Post />}>
    //     <Route path=":id" element={<Post />} />
    //   </Route>
    //
    //   <Route path="*" element={<NotFound/>} />
    // </Routes>
    <RouterProvider router={router}/>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Intro from "../pages/intro/Intro";
import PostsContainer from "../pages/posts/PostsContainer";
import Post from "../pages/posts/Post";
import NotFound from "../pages/notFound/NotFound";
import SignUp from "../signUp/SignUp";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Intro />
      },
      {
        path : "posts",
        element : <PostsContainer />
      },
      {
        path : "post/:id",
        element : <Post />
      },
      {
        path : "sign-up",
        element : <SignUp/>
      }
    ]
  },
  {
    path : "*",
    element : <NotFound />
  }
])

export default router;
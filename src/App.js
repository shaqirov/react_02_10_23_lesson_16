import "./App.css";
import { PostsPage } from "./pages/PostsPage";
import { Layout } from "./hoc/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PostsPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="posts/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

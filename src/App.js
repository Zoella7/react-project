import {Routes,Route} from "react-router-dom"
import {MainLayout} from "./layout/MainLayout"

import {TodosPage} from "./pages/TodosPage"
import {AlbumsPage} from "./pages/AlbumsPage"
import {CommentsPage} from "./pages/CommentsPage"
import PostsComponent from "./components/PostsComponent"
export default function App() {
  return (
    <div>


        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
            <Route path={'/todos'} element={<TodosPage/>}/>
            <Route path={'/albums'} element={<AlbumsPage/>}/>
            <Route path={'/comments'} element={<CommentsPage/>}>
            <Route path={':postId'} element={<PostsComponent/>}/>
            </Route>
        </Route>
        </Routes>
    </div>
  );
}



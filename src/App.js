import {Routes, Route} from "react-router-dom"

import {MainLayout} from "./layouts"
import {NotFoundPage,UsersPage, PostsPage,SingleUserPage} from "./pages"





function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route path={'users'} element={<UsersPage/>}>
          <Route path={':id'} element={<SingleUserPage/>}/>
        </Route>
        <Route path={'posts'} element={<PostsPage/>}/>
        </Route>

        <Route path={'*'} element={<NotFoundPage/>}/>


    </Routes>
  );
}

export default App;

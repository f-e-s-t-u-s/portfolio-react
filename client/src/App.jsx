import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/home/Home';
import Blogs from './components/home/blogsComponents/Blogs';
import Login from './components/home/blogsComponents/Login';
import Create from './components/home/blogsComponents/Create';
import Posts from './components/home/blogsComponents/Admin/Posts';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path='/admin/login' element={<Login></Login>} ></Route>
        <Route path='/blogs/create' element={<Create></Create>} ></Route>
        <Route path='/admin/posts' element={<Posts></Posts>} ></Route>
      </Routes>
    </div>
  );
}

export default App;

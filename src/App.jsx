import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/home/Home';
import Blogs from './components/home/blogsComponents/Blogs';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
      </Routes>
    </div>
  );
}

export default App;

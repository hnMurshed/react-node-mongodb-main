import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='users' element={<Users></Users>}></Route>
        <Route path='user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/update/:userId' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;

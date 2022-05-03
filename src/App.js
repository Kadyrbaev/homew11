import './App.css';
import AddUser from './component/Users/AddUser';
import { useState } from 'react';
import UserList from './component/Users/UserList';

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler=(uName, uAge)=>{
    setUserList(prevUserList=>{
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserList setUserList={setUserList} users={userList}/>
      
    </div>
  );
}

export default App;

import {useState} from 'react';
import {User} from './type';

import Appbar from './components/Appbar/Appbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

function App() {

  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'John', email: 'john@gmail.com', role: 'Admin', isActive: true},
    {id: '2', name: 'Sara', email: 'sara@gmail.com', role: 'Editor', isActive: true},
  ]);
  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-6">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-6">
            <Users users={users}/>
          </div>
          </div>
      </main>
    </>
  );
}

export default App;

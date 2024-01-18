import Appbar from './components/Appbar/Appbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

function App() {

  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-6">
            <UserForm/>
          </div>
          <div className="col-6">
            <Users/>
          </div>
          </div>
      </main>
    </>
  );
}

export default App;

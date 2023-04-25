
import './App.css';
import Heading from './components/Heading';
import Login from './components/Login';
import Subheading from './components/Subheading';
import Loading from './components/Dashboard/Loading';
function App() {
  return (
    <div className="bg-green-600 h-screen">
     <Heading />
     <Login />
     <Loading />
     <Subheading />
    </div>
  );
}

export default App;

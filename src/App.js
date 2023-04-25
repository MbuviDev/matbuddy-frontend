import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './PAGES/Dashboard';
import Heading from './components/Heading';
import Login from './components/Login';
import Subheading from './components/Subheading';
import Loading from './components/Dashboard/Loading';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={
        <>
          <div className="bg-green-600 h-screen">
            <Heading />
            {/* <Login /> */}
            <Subheading />
          </div>
        </>}
      />
      <Route path="/loading" element={<Loading />}/>
      
      <Route path='/dashboard' element={
        <Dashboard/>
      }/>
     </Routes>
      </>
  );
}

export default App;

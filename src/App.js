import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './PAGES/Dashboard';
import Heading from './components/Heading';
import Login from './components/Login';
import Subheading from './components/Subheading';
import Loading from './PAGES/Loading/Loading';
import Expenses from './PAGES/Expenses/Expenses';
import Navbar from './components/Navbar/Navbar';


function App() {

  const loggedIn =true
  
  return (
    <div className='relative flex'>
      <div className='w-2/10 sticky top-0'>
        {loggedIn&&<Navbar />}
      </div>
    <div className='flex-grow'>
      <Routes>
      <Route path='/' element={
        <>
          <div className="bg-green-600 h-screen">
            <Heading />
            <Login />
            <Subheading />
          </div>
        
        </>}
      />
     
      <Route path='/dashboard' element={
        <Dashboard/>
      }/>

      <Route path ='/loading' element={
        <Loading /> 
      }/>

     <Route path ='/expenses' element={
      <Expenses />
     }/>

     </Routes>
    </div>



     </div>
  );
}

export default App;
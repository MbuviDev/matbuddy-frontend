import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './PAGES/Dashboard';
import Heading from './components/Heading';
import Login from './components/Login';
import Subheading from './components/Subheading';
import Loading from './PAGES/Loading/Loading';
import Expenses from './PAGES/Expenses/Expenses';


function App() {
  return (
    <>
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



     </>
  );
}

export default App;
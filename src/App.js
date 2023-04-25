import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './PAGES/Dashboard';
import Heading from './components/Heading';
import Subheading from './components/Subheading';

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

      <Route path='/dashboard' element={
        <Dashboard/>
      }/>
     </Routes>
      </>
  );
}

export default App;

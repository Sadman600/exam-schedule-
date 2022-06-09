
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import EditExamSchedule from './Pages/ExamSchedule/EditExamSchedule';
import PageNotFound from './Pages/Home/PageNotFound';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/editExamSchedule/:id' element={<EditExamSchedule></EditExamSchedule>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;

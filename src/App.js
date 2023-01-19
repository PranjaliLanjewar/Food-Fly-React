import { Button, Container } from 'reactstrap';
import './App.css';
import Header from './Component/Header';
import { ToastContainer, toast } from 'react-toastify';
import Home from './Component/Home';
import Food from './Component/Course';
import AllFood from './Component/AllCourses';
import AddFood from './Component/AddCourse';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Component/Menu';
import About from './Component/About';

function App() {
  const btnHandle = () =>{
  toast.success("ok" ,{
    position:"top-center",
  });
  };

  return (
    <div>
      

      <ToastContainer/>
      <Header/>
        <Container/>
            <div className="row">
              <div className='col-4 col-md-4'><Menu/></div>
              <div className="col-8 col-md-8">
              <Router>
                <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/add-food' element={<AddFood/>} />
                  <Route exact path='/view-food' element={<AllFood/>}/>
                  <Route exact path='/about' element={<About/>}/>
                </Routes>
                </Router>
              </div>
      
      
    </div>
    </div>
 

 
  );
}

export default App;
//npm install react-toastify
//npm install bootstrap reactstrap
//npm install axios

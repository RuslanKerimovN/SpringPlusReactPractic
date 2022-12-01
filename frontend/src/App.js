import './App.css';
import HeaderComponents from './components/HeaderComponents';
import ListStudentsComponents from './components/ListStudentsComponents';
import {BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router';
import AddStudentComponent from './components/AddStudentComponent';
import DeleteStudentComponent from './components/DeleteStudentComponent';
import UpdateComponent from './components/UpdateComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponents />
          <div>
            <Routes>
                <Route path="/" element={<ListStudentsComponents />}/>
                <Route path="/students" element={<ListStudentsComponents />}/>
                <Route path="/add-student" element={<AddStudentComponent />}/>
                <Route path="/delete" element={<DeleteStudentComponent />}/>
                <Route path="/update/:id" element={<UpdateComponent />}/>
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;

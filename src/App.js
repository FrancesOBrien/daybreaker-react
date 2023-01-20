import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'
import './App.css'
import EditTask from './components/EditTask'
import Task from './components/Task'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      Task listen
      <Router>
        <Routes>
          <Route path='/' element={<Tasks />}/>
          <Route path='/:id' element={<Task />}/>
          <Route path='/:id/edit' element={<EditTask />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

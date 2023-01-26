import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom'
import './App.css'
import EditTask from './components/EditTask'
import Task from './components/Task'
import Tasks from './components/Tasks'

function App() {
  return (
      <div class="something has-background-success-light">
      <section class='hero'>
        <div class='hero-body'>
      <h1 class='title is-1 has-text-primary-dark'>Daily Tasks</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Tasks />}/>
          <Route path='/:id' element={<Task />}/>
          <Route path='/:id/edit' element={<EditTask />}/>
        </Routes>
      </Router>
      </div>
    </section>
    </div>


  );
}

export default App;

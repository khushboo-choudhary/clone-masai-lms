import './App.css';
import React from 'react'
import Login from './components/Login'
// import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Lectures from './components/Lectures'
import Assignments from './components/Assignments'
import Quizzes from './components/Header/Quizzes'
import Tickets from './components/Header/Tickets'
import Discussions from './components/Header/Discussions'
import Notifications from './components/Header/Notifications'
import Electives from './components/Header/Electives'
import Courses from './components/Header/Courses'
import Admin from './components/Admin'
import AssignmentsDetails from './components/AssignmentsDetails'
import LectureDetails from './components/LectureDetails'

function App() {
  return (
    <div>
      <>
        <Routes>
          <Route exact path='/' element={<Login />} />
          {/* <Route exact path='/' element={<Signup />} /> */}
          <Route exact path='/LandingPage' element={<LandingPage />} />
          <Route exact path='/Lectures' element={<Lectures />} />
          <Route exact path='/Assignments' element={<Assignments />} />
          <Route exact path='/Quizzes' element={<Quizzes />} />
          <Route exact path='/Tickets' element={<Tickets />} />
          <Route exact path='/Discussions' element={<Discussions />} />
          <Route exact path='/Notifications' element={<Notifications />} />
          <Route exact path='/Electives' element={<Electives />} />
          <Route exact path='/Courses' element={<Courses />} />
          <Route exact path='/Admin' element={<Admin />} />
          <Route exact path='/Lectures/LectureDetails' element={<LectureDetails />} />
          <Route exact path='/Assignments/AssignmentsDetails' element={<AssignmentsDetails />} />

        </Routes>

      </>
    </div>
  );
}

export default App;

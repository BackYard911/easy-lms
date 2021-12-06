import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Header from './js/react-components/common/Header.jsx'
import AddAssignment from './js/react-components/layout/instructor/AddAssignment';
import SubmitAssignment from './js/react-components/layout/student/SubmitAssignment';
import ViewAssignment from './js/react-components/layout/instructor/ViewAssignments';
import Course from './js/react-components/layout/student/Course';
import Courses from './js/react-components/layout/student/Courses';
import ViewAllCourses from './js/react-components/layout/instructor/ViewAllCourse';
import ViewCourse from './js/react-components/layout/instructor/ViewCourse';
import AddCourse from './js/react-components/layout/instructor/AddCourse';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
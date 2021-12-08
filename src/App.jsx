import { useState } from "react";
import LmsContext from "./js/contexts/lms-context"
import { Route, Routes } from "react-router-dom";
import Login from "./js/react-components/layout/Login";
import SignUp from "./js/react-components/layout/Signup";
import AddAssignment from "./js/react-components/layout/instructor/AddAssignment"
import ViewAssignments from "./js/react-components/layout/instructor/ViewAssignments"
import SubmitAssignment from "./js/react-components/layout/student/SubmitAssignment"
import ViewAllCourses from "./js/react-components/layout/instructor/ViewAllCourse";
import ViewCourse from "./js/react-components/layout/instructor/ViewCourse"
import { ROUTES } from "./js/consts/routes";
function App() {

  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const contextValue = {
    userInfo,
    setUserInfo,
  };


  return (
      <LmsContext.Provider value={contextValue}>

        <Routes>
          <Route exact path="/" element={<Login/>}/>

          <Route  path={ROUTES.login.path} element={<Login/>}/>
          <Route  path={ROUTES.signup.path} element={<SignUp/>}/>
          <Route  path={ROUTES.addAssignment.path} element={<AddAssignment/>}/>
          <Route  path={ROUTES.viewAssignments.path} element={<ViewAssignments/>}/>
          <Route  path={ROUTES.submitAssignments.path} element={<SubmitAssignment/>}/>
          <Route  path={ROUTES.addAssignment.path} element={<AddAssignment/>}/>
          <Route  path={ROUTES.viewCourses.path} element={<ViewAllCourses/>}/>
          <Route  path={ROUTES.viewCourse.path} element={<ViewCourse/>}/>



        </Routes>

      </LmsContext.Provider>
  )
}

export default App;

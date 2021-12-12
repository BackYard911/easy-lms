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
import AddCourse from "./js/react-components/layout/instructor/AddCourse"
import { ROUTES } from "./js/consts/routes";
import ProtectedRoute from "./js/react-components/common/ProtectedRoute";
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
        <Route exact path="/" element={<Login />} />

        <Route path={ROUTES.login.path} element={<Login />} />
        <Route path={ROUTES.signup.path} element={<SignUp />} />
        <Route path={ROUTES.addAssignment.path} element={<ProtectedRoute />}>
          <Route path={ROUTES.addAssignment.path} element={<AddAssignment />} />
        </Route>
        <Route path={ROUTES.viewAssignments.path} element={<ProtectedRoute />}>
          <Route path={ROUTES.viewAssignments.path} element={<ViewAssignments />} />
        </Route>
        <Route path={ROUTES.submitAssignments.path} element={<ProtectedRoute />}>
          <Route path={ROUTES.submitAssignments.path} element={<SubmitAssignment />} />
        </Route>
        <Route path={ROUTES.viewCourses.path} element={<ProtectedRoute />}>
          <Route path={ROUTES.viewCourses.path} element={<ViewAllCourses />} />
        </Route>
        <Route path={ROUTES.viewCourse.path} element={<ProtectedRoute />}>
          <Route path={ROUTES.viewCourse.path} element={<ViewCourse />} />
        </Route>
        <Route path={ROUTES.addCourse.path} element={<ProtectedRoute />}>
          <Route path={ROUTES.addCourse.path} element={<AddCourse />} />
        </Route>




      </Routes>

    </LmsContext.Provider>
  )
}

export default App;

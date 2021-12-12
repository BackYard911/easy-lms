export const ROUTES = {
  login: {
    path: "/login",
  },

  signup: {
    path: "/signup",
  },
  
  addAssignment: {
    path: "/courses/:id/add-assignment",
  },

  viewAssignments: {
    path: "/courses/:id/view-assignments/:assId",
  },
  submitAssignments: {
    path: "/courses/:id/submit-assignment/:assId",
  },
  addCourse: {
    path: "/add-course",
  },
  viewCourses: {
    path: "/courses",
  },
  viewCourse: {
    path: "/courses/:id"
  }


}
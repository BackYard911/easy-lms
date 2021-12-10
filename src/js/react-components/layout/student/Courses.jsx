import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { getAllCourse } from "../../../api/course.js";
import Card from "../../common/Card.jsx";
import Header from "../../common/Header.jsx";
import {ROUTES} from "../../../consts/routes"
function Courses() {

  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  async function getAllCoursesProcess(){
    const data = await getAllCourse();
    console.log(data.data.data);
  }

  // const courses  = getAllCoursesProcess();

  useEffect(()=>{
    getAllCourse().then((res)=>{
      setCourses(res.data.data);
    })
  },[])

  

  return (
    <div>
      <Header />
      <h1>All Courses</h1>
      <div className="cards-container">

        {
          courses.map((course)=>(
            <Card  key={course.id}>
            <div onClick={()=>{
            navigate(`${course.id}`)
            console.log("pls")
            }} className="course-unit">
               <div className="course-title">
                <h2 className="course-name">{course.title}</h2>
              </div>
              <p className="course-description">
                {course.description}
              </p>
            </div>
          </Card>
          )
          ) 
        }
      </div>
    </div>
  );
}

export default Courses;

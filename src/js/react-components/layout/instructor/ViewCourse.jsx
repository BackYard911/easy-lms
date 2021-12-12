import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { addStudent, getCourse } from "../../../api/course";
import { getAssignments } from "../../../api/assignment";
import Course from "../student/Course";
import {ROUTES} from "../../../consts/routes"
function ViewCourse() {

  const [course, setCourse] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { id }= useParams();
  console.log(id);

  async function addStudentProcess(){
    const res = await addStudent(email,id);
  }

  useEffect(()=>{
    getCourse(id).then((res)=>{
      setCourse(res.data.data);
    })
    getAssignments(id).then((res)=>{
    setAssignments(res.data.data)
  })
  },[])





  return (
    <div>
      <Course title={course.title} description={course.description} assignments={assignments} />
        <button onClick={()=>{
          navigate(`add-assignment`);
        }} className="assign-add-button">Add Assignment</button>
      <div className="add-student-submit">
        <input
          type="text"
          className="student-input"
          id=""
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Student Email"
        />
        <button onClick={addStudentProcess} className="student-add-button">Add Student</button>
      </div>

    </div>
  );
}

export default ViewCourse;

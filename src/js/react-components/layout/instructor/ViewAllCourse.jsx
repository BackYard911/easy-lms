import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Courses from "../student/Courses";
import {ROUTES} from "../../../consts/routes"
import { getAllCourse } from "../../../api/course";
function ViewAllCourses()
{

    const role = localStorage.getItem("role");

    return(

        <div>
            <Courses/>
            {role === "INSTRUCTOR" &&
            <Link to={ROUTES.addCourse.path}>
                <button className="course-add-button">Add Course</button>
                </Link>
}
        </div>
    );

}

export default ViewAllCourses;
import Header from "../../common/Header";
import Courses from "../student/Courses";
function ViewAllCourses()
{

    return(

        <div>
            <Courses/>
            <button className="course-add-button">Add Course</button>
        </div>
    );

}

export default ViewAllCourses;
import Card from "../../common/Card";
import Header from "../../common/Header.jsx";
import bookmark from "../../../../static/images/bookmark.svg";
import { useNavigate } from "react-router-dom";
function Course(props) {
  
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  let redirectLink;

  if(role === "STUDENT"){
    redirectLink = "submit-assignment";
  }
  else if(role === "INSTRUCTOR"){
    redirectLink = "view-assignments";
  }

  return (
    <div>
      <Header />
      <h1>{props.title}</h1>
      <div class="class-container">
        {props.assignments.map((assignment)=>(

        <div class="assign-container">
          <span className="assign-logo">
            <img className="" src={bookmark} alt="" />
          </span>
          <h2 onClick={()=>navigate(`${redirectLink}/${assignment.id}`)} >{assignment.title}</h2>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Course;

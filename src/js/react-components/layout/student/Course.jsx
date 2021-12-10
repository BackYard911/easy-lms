import Card from "../../common/Card";
import Header from "../../common/Header.jsx";
import bookmark from "../../../../static/images/bookmark.svg";
function Course(props) {
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
          <h2>{assignment.title}</h2>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Course;

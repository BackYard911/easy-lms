import Card from "../../common/Card";
import Header from "../../common/Header.jsx";
import bookmark from "../../../../static/images/bookmark.svg";
function Course() {
  return (
    <div>
      <Header />
      <h1>Class Name</h1>
      <div class="class-container">
        <div class="assign-container">
          <span className="assign-logo">
            <img className="" src={bookmark} alt="" />
          </span>
          <h2>Assignment 1</h2>
        </div>

        <div class="assign-container">
          <span className="assign-logo">
            <img className="" src={bookmark} alt="" />
          </span>
          <h2>Assignment 2</h2>
        </div>
      </div>
    </div>
  );
}

export default Course;

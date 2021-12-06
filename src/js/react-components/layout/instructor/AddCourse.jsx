import Login from "../Login";
import Header from "../../common/Header";
import text from "../../../../static/images/text.svg";
import bookmark from "../../../../static/images/bookmark.svg";


function AddCourse() {
  return (
    <div>
      <Header />
      <div>
        <form>
          <div className="div-assign-1">
          <span className="assign-logo">
              <img className="" src={bookmark} alt="" />
            </span>
            <input
              type="text"
              className="assign-input"
              id=""
              placeholder="Enter Course Name"
            />
          </div>
          <div className="div-assign-2">
          <span className="assign-logo">
              <img className="" src={text} alt="" />
            </span>
            <input
              type="text"
              className="assign-input"
              id=""
              placeholder="Enter Course Description"
            />
          </div>
          <div class="div-assign-1">
           <button className="course-add-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;

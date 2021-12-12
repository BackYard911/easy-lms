import Login from "../Login";
import Header from "../../common/Header";
import text from "../../../../static/images/text.svg";
import bookmark from "../../../../static/images/bookmark.svg";
import { useState } from "react/cjs/react.development";
import { addCourse, getAllCourse } from "../../../api/course";


function AddCourse() {

  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function addCourseProcess(){
    console.log(title,description);
    const res = await addCourse(title,description)
    console.log(res);
  }

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
              onChange={(e)=>{
                setTitle(e.target.value);
              }}
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
              onChange={(e)=>{
                setDescription(e.target.value);
              }}
              placeholder="Enter Course Description"
            />
          </div>
          <div class="div-assign-1">
           <button onClick={addCourseProcess} type="button" className="course-add-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;

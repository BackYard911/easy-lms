import Login from "../Login";
import Header from "../../common/Header";
import bookmark from "../../../../static/images/bookmark.svg";
import bullseye from "../../../../static/images/bullseye.svg";
import calendar from "../../../../static/images/calendar.svg";
import text from "../../../../static/images/text.svg";
import { useState } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import { addAssignment } from "../../../api/assignment";

function AddAssignment() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(0);
  const [deadline, setDeadline] = useState(new Date());

  const {id} = useParams()


  async function addAssignmentProcess(){
    console.log(title,description,points,deadline,id)
    let timeStamp = Date.parse(deadline);
    timeStamp /= 1000;
    timeStamp = Math.floor(timeStamp);
    console.log(timeStamp)
    const res = await addAssignment(title,description,points,timeStamp,id);
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
              onChange={(e)=>setTitle(e.target.value)}
              placeholder="Assignment Name"
            />
          </div>
          <div className="div-assign-2">
            <span className="assign-logo">
              <img className="" src={bullseye} alt="" />
            </span>
            <input
              type="number"
              className="assign-input"
              id=""
              onChange={(e)=>{setPoints(e.target.value)}}
              placeholder="Maximum Grade"
            />
          </div>
          <div className="div-assign-1">
            <span className="assign-logo">
              <img className="" src={calendar} alt="" />
            </span>
            <input
              type="date"
              className="assign-input"
              id="" 
              onChange={(e)=>{setDeadline(e.target.value)}}
              placeholder="Due Date"
            />
          </div>
          <div className="div-assign-2">
            <span className="assign-logo">
              <img className="" src={text} alt="" />
            </span>
            <input type="text" className="assign-input" placeholder="Assignment Description" onChange={(e)=>setDescription(e.target.value)} />
            <button type="button" onClick={addAssignmentProcess} className="upload-button">Add Assignment</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAssignment;

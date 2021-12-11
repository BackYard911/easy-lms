import Login from "../Login";
import Header from "../../common/Header";
import bookmark from "../../../../static/images/bookmark.svg";
import bullseye from "../../../../static/images/bullseye.svg";
import calendar from "../../../../static/images/calendar.svg";
import pdf from "../../../../static/images/pdf.svg";
import { getAllCourse } from "../../../api/course";
import { useParams } from "react-router-dom";
import { getAssignment } from "../../../api/assignment";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { addSubmission } from "../../../api/assignment-submission";

function SubmitAssignment() {

  const {id, assId} = useParams();
  
  const [assignment, setAssignment] = useState({});
  const [assFile, setAssFile] = useState(null);
  
  async function uploadAssignment(){
    let formData = new FormData();
    console.log(assFile);
    formData.append("file",
    assFile)

    const res = await addSubmission(assId, formData);
  }
  

  useEffect(()=>{
    getAssignment(assId).then((res)=>{
      setAssignment(res.data.data)
    })
  },[]);

  console.log(assignment)
  
  
  return (
    <div>
      <Header />
      <div>
        <form>
          <div className="div-assign-1">
            <span className="assign-logo">
              <img className="" src={bookmark} alt="" />
            </span>
            <p className="p-assign">{assignment.title}</p>
          </div>
          <div className="div-assign-2">
            <span className="assign-logo">
              <img className="" src={bullseye} alt="" />
            </span>
            <p className="p-assign">{assignment.points} Marks</p>
          </div>
          <div className="div-assign-1">
            <span className="assign-logo">
              <img className="" src={calendar} alt="" />
            </span>
            <p className="p-assign">{new Date(assignment.deadline).toLocaleDateString()}</p>
            <p>Due in {Math.floor((assignment.deadline - new Date().getTime())/86400000)} days</p>
          </div>
          <div className="div-assign-2">
            <span className="assign-logo">
              <img className="" src={pdf} alt="" />
            </span>
            <input type="file" name="file" id="" onChange={(e)=> setAssFile(e.target.files[0])} accept=".pdf, .jpg, .jpeg" />
            <button type="button" onClick={uploadAssignment} className="upload-button">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitAssignment;

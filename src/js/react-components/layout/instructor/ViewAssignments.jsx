import Header from "../../common/Header";
import pdf from "../../../../static/images/pdf.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { getFile, getSubmissions, gradeSubmission } from "../../../api/assignment-submission";
import { getAssignment } from "../../../api/assignment";

function ViewAssignment() {

  const { id, assId } = useParams();

  const [submissions, setSubmissions] = useState([]);
  const [assignment, setAssignment] = useState({});

  useEffect(()=>{
    getSubmissions(assId).then((res)=>{
      
      setSubmissions(res.data.data);
    });
       getAssignment(assId).then((res)=>{
         setAssignment(res.data.data);
       })
  },[])

  async function gradeSubmissionProcess(points,submissionId){
    let res = await gradeSubmission(points,submissionId)
  }

  async function downloadFile(submission){
    const url = await getFile(submission.id);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', submission.fileName);
    link.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div>
      <Header />
      <div>
        <table className="table-assign">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              {/* <th>State</th> */}
              <th>Grade</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.student.name}</td>
                <td>{submission.student.email}</td>
                {/* <td>{calculateState(submission.submittedAt,assignment.deadline)}</td> */}
                <td>
                  <input type="number" onChange={(e)=> submission.points = Number(e.target.value)} className="table-input" defaultValue={submission.points} min={0} max={assignment.points} id="" />
                  <button onClick={()=> gradeSubmissionProcess(submission.points,submission.id)} className="grade-button">Save</button>
                </td>
                <td>
                  
                    <span onClick={()=> downloadFile(submission)} className="assign-logo">
                      <img className="" src={pdf} alt="download pdf" />
                    </span>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAssignment;

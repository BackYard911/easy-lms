import Header from "../../common/Header";
import pdf from "../../../../static/images/pdf.svg";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getSubmissions } from "../../../api/assignment-submission";

function ViewAssignment() {

  const {id, assId} = useParams();
  
  useEffect(()=>{
    getSubmissions(assId).then((res)=>{
      console.log(res)
    });
  })

  return (
    <div>
      <Header />
      <div>
        <table className="table-assign">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>State</th>
              <th>Grade</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Dom</td>
              <td>17p6031@eng.asu.edu.eg</td>
              <td>Submitted</td>
              <td>
                <input type="text" className="table-input" id="" />
                <button className="grade-button">Save</button>
              </td>
              <td>
                <a>
                  <span className="assign-logo">
                    <img className="" src={pdf} alt="download pdf" />
                  </span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Lilwel</td>
              <td>69@eng.asu.edu.eg</td>
              <td>Late</td>
              <td>
                <input type="text" className="table-input" id="" />
                <button className="grade-button">Save</button>
              </td>
              <td>
                <a>
                  <span className="assign-logo">
                    <img className="" src={pdf} alt="download pdf" />
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAssignment;

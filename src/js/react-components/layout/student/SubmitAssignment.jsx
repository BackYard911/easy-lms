import Login from "../Login";
import Header from "../../common/Header";
import bookmark from "../../../../static/images/bookmark.svg";
import bullseye from "../../../../static/images/bullseye.svg";
import calendar from "../../../../static/images/calendar.svg";
import pdf from "../../../../static/images/pdf.svg";

function SubmitAssignment() {
  return (
    <div>
      <Header />
      <div>
        <form>
          <div className="div-assign-1">
            <span className="assign-logo">
              <img className="" src={bookmark} alt="" />
            </span>
            <p className="p-assign">Assignment Name here</p>
          </div>
          <div className="div-assign-2">
            <span className="assign-logo">
              <img className="" src={bullseye} alt="" />
            </span>
            <p className="p-assign">Grade Here</p>
          </div>
          <div className="div-assign-1">
            <span className="assign-logo">
              <img className="" src={calendar} alt="" />
            </span>
            <p className="p-assign">Due date here</p>
          </div>
          <div className="div-assign-2">
            <span className="assign-logo">
              <img className="" src={pdf} alt="" />
            </span>
            <p className="p-assign">No File</p>
            <button className="upload-button">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitAssignment;

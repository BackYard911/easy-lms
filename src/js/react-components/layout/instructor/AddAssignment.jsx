import Login from "../Login";
import Header from "../../common/Header";
import bookmark from "../../../../static/images/bookmark.svg";
import bullseye from "../../../../static/images/bullseye.svg";
import calendar from "../../../../static/images/calendar.svg";
import pdf from "../../../../static/images/pdf.svg";

function AddAssignment() {
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
              placeholder="Assignment Name"
            />
          </div>
          <div className="div-assign-2">
            <span className="assign-logo">
              <img className="" src={bullseye} alt="" />
            </span>
            <input
              type="text"
              className="assign-input"
              id=""
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
              placeholder="Due Date"
            />
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

export default AddAssignment;

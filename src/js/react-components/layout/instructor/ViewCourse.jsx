import Course from "../student/Course";

function ViewCourse() {
  return (
    <div>
      <Course />
        <button className="assign-add-button">Add Assignment</button>
      <div className="add-student-submit">
        <input
          type="text"
          className="student-input"
          id=""
          placeholder="Student Email"
        />
        <button className="student-add-button">Add Student</button>
      </div>

    </div>
  );
}

export default ViewCourse;

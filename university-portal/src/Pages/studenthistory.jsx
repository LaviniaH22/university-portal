import "../App.css";
import HomeLink from "../Homelink";
function StudentHistory() {
  return (
    <main>
        <HomeLink />
        <h1 id="page-title">Student Course History</h1>
        <form className="searchBar">
            <p> Campus-Wide ID</p>
            <input type="text" placeholder="XXXXXXXXXX" pattern="[0-9]{10}" required onInvalid={(e) =>e.target.setCustomValidity("Invalid Format Correct to follow: ##########")}/>
            <button type="submit">View Course History</button>
        </form>
        <table className="classesTable">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {/* Table rows would be populated with class data */}
            </tbody>
        </table>
    </main>
);
}

export default StudentHistory;

import { Link } from "react-router";
import "../App.css";
import homeLogo from "../assets/home-svgrepo-com.svg";

function StudentHistory() {
  return (
    <main>
        <Link to="/" className="homeLink" aria-label="Back to home"><img src={homeLogo} alt="Home logo" /></Link>
        <h1 id="page-title">Student Course History</h1>
        <div className="searchBar">
            <p> Campus-Wide ID</p>
            <input type="text" placeholder="XXXXXXXXXX" />
            <button>View Course History</button>
        </div>
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

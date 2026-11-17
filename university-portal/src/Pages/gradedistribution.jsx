import { Link } from "react-router";
import "../App.css";
import homeLogo from "../assets/home-svgrepo-com.svg";

function GradeDistribution() {
  return (
    <main>
        <Link to="/" className="homeLink" aria-label="Back to home"><img src={homeLogo} alt="Home logo" /></Link>
        <h1 id="page-title">Courses' Grade Distributions</h1>
        <div className="searchBar">
            <p> Course Number</p>
            <input type="text" placeholder="CPSC 332" />
            <p> Section Number</p>
            <input type="text" placeholder="01" />
            <button>View Grades</button>
        </div>
        <table className="classesTable">
            <thead>
                <tr>
                    <th>Grade</th>
                    <th>Student Count</th>
                </tr>
            </thead>
            <tbody>
                {/* Table rows would be populated with class data */}
            </tbody>
        </table>
    </main>
);
}

export default GradeDistribution;

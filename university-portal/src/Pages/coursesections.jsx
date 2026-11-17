import { Link } from "react-router";
import "../App.css";
import homeLogo from "../assets/home-svgrepo-com.svg";

function CourseSections() {
  return (
    <main>
        <Link to="/" className="homeLink" aria-label="Back to home"><img src={homeLogo} alt="Home logo" /></Link>
        <h1 id="page-title">Find Course Sections</h1>
        <div className="searchBar">
            <p> Course Number</p>
            <input type="text" placeholder="CPSC 332" />
            <button>Search Sections</button>
        </div>
        <table className="classesTable">
            <thead>
                <tr>
                    <th>Section</th>
                    <th>Room</th>
                    <th>Days</th>
                    <th>Times</th>
                    <th>Enrolled</th>
                </tr>
            </thead>
            <tbody>
                {/* Table rows would be populated with class data */}
            </tbody>
        </table>
    </main>
);
}

export default CourseSections;

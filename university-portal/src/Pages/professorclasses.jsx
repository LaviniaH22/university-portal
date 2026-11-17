import { Link } from "react-router";
import "../App.css";
import homeLogo from "../assets/home-svgrepo-com.svg";

function ProfessorClasses() {
  return (
    <main>
        <Link to="/" className="homeLink" aria-label="Back to home"><img src={homeLogo} alt="Home logo" /></Link>
        <h1 id="page-title">Find Professors' Classes</h1>
        <div className="searchBar">
            <p> Professor's SSN</p>
            <input type="text" placeholder="XXX-XX-XXXX" />
            <button>Search Classes</button>
        </div>
        <table className="classesTable">
            <thead>
                <tr>
                    <th>Course Title</th>
                    <th>Room</th>
                    <th>Days</th>
                    <th>Times</th>
                </tr>
            </thead>
            <tbody>
                {/* Table rows would be populated with class data */}
            </tbody>
        </table>
    </main>
);
}

export default ProfessorClasses;

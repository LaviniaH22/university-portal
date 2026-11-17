import { Link } from "react-router";
import "../App.css";
import homeLogo from "../assets/home-svgrepo-com.svg";

function ProfessorClasses() {
  return (
    <main>
        <Link to="/" className="homeLink" aria-label="Back to home"><img src={homeLogo} alt="Home logo" /></Link>
        <h1 id="page-title">Find Professors' Classes</h1>
        <form className="searchBar">
            <p> Professor's SSN</p>
            <input type="text" placeholder="XXX-XX-XXXX" pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}" required onInvalid={(e) =>e.target.setCustomValidity("Invalid Format Correct to follow: ###-##-####")}/>
            <button type="submit">Search Classes</button>
        </form>
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

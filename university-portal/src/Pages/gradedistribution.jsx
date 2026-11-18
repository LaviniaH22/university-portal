import "../App.css";
import HomeLink from "../Homelink";
function GradeDistribution() {
  return (
    <main>
        <HomeLink />
        <h1 id="page-title">Courses' Grade Distributions</h1>
        <form className="searchBar">
            <p> Course Number</p>
            <input type="text" placeholder="CPSC 332" pattern="[A-Za-z]{3,4} [0-9]{3}[A-Za-z]?" required onInvalid={(e) =>e.target.setCustomValidity("Invalid Format Correct to follow: AAAA ###a")}/>
            <p> Section Number</p>
            <input type="text" placeholder="01" pattern="[0-9]{2}" required onInvalid={(e) =>e.target.setCustomValidity("Invalid Format Correct to follow: ##")}/>
            <button type="submit">View Grades</button>
        </form>
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

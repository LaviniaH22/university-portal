import "../App.css";
import HomeLink from "../Homelink";

function CourseSections() {
  return (
    <main>
        <HomeLink />
        <h1 id="page-title">Find Course Sections</h1>
        <form className="searchBar">
            <p> Course Number</p>
            <input type="text" placeholder="CPSC 332" pattern="[A-Za-z]{3,4} [0-9]{3}[A-Za-z]?" required onInvalid={(e) =>e.target.setCustomValidity("Invalid Format Correct to follow: AAAA ###a")}/>
            <button type="submit">Search Sections</button>
        </form>
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

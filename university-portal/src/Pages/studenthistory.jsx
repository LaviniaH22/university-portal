import "../App.css";
import HomeLink from "../Homelink";
import { useState } from 'react';
function StudentHistory() {
    const [waitIndicator, setWaitIndicator] = useState(null);
    const [classData, setClassData] = useState([]); 
    const handleSubmit = (e) => {
        const storedCampusWideID = e.target.elements.campusWideID.value;
        // Prevent the default form submission behavior
        e.preventDefault();
        //created formmated to pass to the backend
        const passedvalue = "sh " + storedCampusWideID; 
        //update the wait indicator to show that the search is in progress
        setWaitIndicator("Searching for student course history...");
        //pass the value to the backend
        //handleCallnResponse(passedvalue);
        setTimeout(() => handleCallnResponse(passedvalue), 500);
    }
    const handleCallnResponse = (query) => {
        //sample data json
        let sampleData = [
            {
                courseTitle: "Example Course",
                grade: "A"
            }
        ];
        //inplace of php call an alert.
        alert(`Query sent to backend: ${query}`)
        // Update the class data state with the sample data
        setClassData(sampleData);
        // Update the wait indicator
        setWaitIndicator(null);
    };
  return (
    <main>
        <HomeLink />
        <h1 id="page-title">Student Course History</h1>
        <form className="searchBar" onSubmit={handleSubmit}>
            <p> Campus-Wide ID</p>
            <input type="text" 
            name="campusWideID"
            placeholder="XXXXXXXXXX" 
            pattern="[0-9]{10}" 
            required 
            onInvalid={(e) =>
            e.target.setCustomValidity(
                "Invalid Format Correct to follow: ##########")}/>
            <button type="submit">View Course History</button>
            <p>{waitIndicator}</p>
        </form>
        <table className="classesTable">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {classData.map((course) => (
                    <tr key={course.id}>
                        <td>{course.courseTitle}</td>
                        <td>{course.grade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </main>
);
}

export default StudentHistory;

import "../App.css";
import HomeLink from "../Homelink";
import { useState } from 'react';
function GradeDistribution() {
    const [waitIndicator, setWaitIndicator] = useState(null);
    const [gradeData, setGradeData] = useState([]);
    const handleSubmit = (e) => {
        const storedCourseNumber = e.target.elements.courseNumber.value;
        const storedSectionNumber = e.target.elements.sectionNumber.value;
        // Prevent the default form submission behavior
        e.preventDefault();
        // Create a formatted query string
        const passedValue = `gd ${storedCourseNumber} ${storedSectionNumber}`;
        // Update the wait indicator to show that the search is in progress
        setWaitIndicator("Searching for grade distribution...");
        // Pass the value to the backend
        // handleCallAndResponse(passedValue);
        setTimeout(() => handleCallAndResponse(passedValue), 500);
    };
    const handleCallAndResponse = (query) => {
        // Sample data JSON
        let sampleData = [
            {
                grade: "A",
                studentCount: 15
            },
            {
                grade: "B",
                studentCount: 20
            },
            {
                grade: "C",
                studentCount: 10
            }
        ];
        // In place of PHP call, show an alert
        alert(`Query sent to backend: ${query}`);
        // Update the grade data state with the sample data
        setGradeData(sampleData);
        // Update the wait indicator
        setWaitIndicator(null);
    };
  return (
    <main>
        <HomeLink />
        <h1 id="page-title">Courses' Grade Distributions</h1>
        <form className="searchBar" onSubmit={handleSubmit}>
            <p> Course Number</p>
            <input type="text" 
            name="courseNumber"
            placeholder="CPSC 332" 
            pattern="[A-Za-z]{3,4} [0-9]{3}[A-Za-z]?" 
            required onInvalid={
                (e) =>e.target.setCustomValidity(
                    "Invalid Format Correct to follow: AAAA ###a")}/>
            <p> Section Number</p>
            <input type="text" 
            name="sectionNumber"
            placeholder="01" 
            pattern="[0-9]{2}" 
            required onInvalid={
                (e) =>e.target.setCustomValidity("Invalid Format Correct to follow: ##")}/>
            <button type="submit">View Grades</button>
            <p>{waitIndicator}</p>
        </form>
        <table className="classesTable">
            <thead>
                <tr>
                    <th>Grade</th>
                    <th>Student Count</th>
                </tr>
            </thead>
            <tbody>
                {gradeData.map((grade) => (
                    <tr key={grade.grade}>
                        <td>{grade.grade}</td>
                        <td>{grade.studentCount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </main>
);
}

export default GradeDistribution;

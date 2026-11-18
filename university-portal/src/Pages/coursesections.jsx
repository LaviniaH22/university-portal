import "../App.css";
import HomeLink from "../Homelink";
import { useState } from 'react';
function CourseSections() {
    const [waitIndicator, setWaitIndicator] = useState(null);
    const [sectionNumber, setSectionNumber] = useState('');
    let passedvalue;
    const handleSubmit = (e) => {
        // Get the value of the course number input field
        const storedCourseNumber = e.target.elements.courseNumber.value;
        // Prevent the default form submission behavior
        e.preventDefault();
       //update the wait indicator to show that the search is in progress
        setWaitIndicator("Searching for course sections...");
        //created formmated to pass to the backend
        passedvalue = "cs " + storedCourseNumber;  
        //pass the value to the backend
        //handleCallnResponse(passedvalue);
        setTimeout(() => handleCallnResponse(passedvalue), 500);
    };
    const handleCallnResponse = (query) => {
        let sectionTable = document.querySelector('.classesTable tbody');
        //sample data json
        let sampleData = [
            {
                section: "01",
                room: "Room 101",
                days: "MWF",
                times: "9:00 AM - 10:00 AM",
                enrolled: 25
            }
        ];
        //inplace of php call an alert.
        alert(`Query sent to backend: ${query}`)
        // Update the section data state with the sample data
        setSectionData(sampleData);
        // Update the wait indicator
        setWaitIndicator("");
    }
  return (
    <main>
        <HomeLink />
        <h1 id="page-title">Find Course Sections</h1>
        <form className="searchBar" onSubmit={handleSubmit}>
            <p> Course Number</p>
            <input type="text" placeholder="CPSC 332" pattern="[A-Za-z]{3,4} [0-9]{3}[A-Za-z]?" required onInvalid={(e) =>e.target.setCustomValidity("Invalid Format Correct to follow: AAAA ###a")}/>
            <button type="submit">Search Sections</button>
            <p>{waitIndicator}</p>
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
                {classData.map((section) => (
                    <tr key={section.id}>
                        <td>{section.section}</td>
                        <td>{section.room}</td>
                        <td>{section.days}</td>
                        <td>{section.times}</td>
                        <td>{section.enrolled}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </main>
);
}

export default CourseSections;

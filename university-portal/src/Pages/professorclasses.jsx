import { Link } from "react-router";
import { useState } from 'react'
import {useEffect} from 'react'
import "../App.css";
import homeLogo from "../assets/home-svgrepo-com.svg";

function ProfessorClasses() {
    const [waitIndicator, setWaitIndicator] = useState(null);
    let passedvalue;
    const [classData, setClassData] = useState([]);
    const handleSubmit = (e) => {
        const storedSSN = e.target.elements.pssn.value;
        // Prevent the default form submission behavior
        e.preventDefault();
        //created formmated to pass to the backend
        passedvalue = "pc " + storedSSN;
        //update the wait indicator to show that the search is in progress
        setWaitIndicator("Searching for classes...");
        //pass the value to the backend
        //handleCallnResponse(passedvalue);
        setTimeout(() => handleCallnResponse(passedvalue), 500);
    }
    const handleCallnResponse=(query)=>{
        let classTable = document.querySelector('.classesTable tbody');
        let numrows = 1;
        //sample data json
        let sampleData = [
            {
                courseTitle: "Example Course",
                room: "Room 101",
                days: "MW",
                times: "9:00 AM - 10:00 AM"
            }
        ];
        //inplace of php call an alert.
        alert(`Query sent to backend: ${query}`)
        // Update the class data state with the sample data
        setClassData(sampleData);
        // Update the wait indicator
        setWaitIndicator("");
    }
  return (
    <main>
        <Link to="/" className="homeLink" aria-label="Back to home"><img src={homeLogo} alt="Home logo" /></Link>
        <h1 id="page-title">Find Professors' Classes</h1>
        <form className="searchBar" onSubmit={handleSubmit}>
            <p> Professor's SSN</p>
            <input type="text" placeholder="XXX-XX-XXXX" name="pssn" pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}" required onInvalid={(e) =>e.target.setCustomValidity("Invalid Format Correct to follow: ###-##-####")}/>
            <button type="submit">Search Classes</button>
            <p>{waitIndicator}</p>
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
            {classData.map((course) => (
                <tr key={course.id}>
                <td>{course.courseTitle}</td>
                <td>{course.room}</td>
                <td>{course.days}</td>
                <td>{course.times}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </main>
);
}

export default ProfessorClasses;
